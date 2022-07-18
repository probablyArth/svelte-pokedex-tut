<script>
  import { Link } from "svelte-navigator";

  export let offset;

  import { fetchPokemonData } from "../utils/fetchPokemonData";

  $: fetchPokemons = async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
      .then((res) => res.json())
      .then((data) => data.results);
  };
</script>

{#await fetchPokemons()}
  <h1>Waiting for data ...</h1>
{:then pokemons}
  <div
    class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-10 my-8"
  >
    {#each pokemons as pokemon}
      {#await fetchPokemonData(pokemon.name)}
        <p>Loading {pokemon.name}'s data...</p>
      {:then data}
        <Link to={`/${pokemon.name}`}>
          <div class="flex flex-col rounded-md shadow-md p-4">
            <img src={data.sprites.front_default} alt={pokemon.name} />
            <h1 class="border-t-2 pt-2">{pokemon.name}</h1>
          </div>
        </Link>
      {/await}
    {/each}
  </div>
{/await}
