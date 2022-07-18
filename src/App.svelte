<script>
  import "./global.css";
  import { Route, Router } from "svelte-navigator";
  import Navbar from "./components/Navbar.svelte";
  import Button from "./components/Button.svelte";
  import PokemonGrid from "./components/PokemonGrid.svelte";
  import Pokemon from "./components/Pokemon.svelte";

  let offset = 0;

  const increaseOffset = () => {
    offset += 20;
  };

  const decreaseOffset = () => {
    offset -= 20;
  };
</script>

<main class="flex flex-col justify-center items-center p-4">
  <Router
    ><Navbar />
    <Route to="/">
      <div class="flex justify-center items-center w-fit">
        {#if offset !== 0}
          <Button on:changeOffset={decreaseOffset}>Prev</Button>
        {/if}
        <Button on:changeOffset={increaseOffset}>Next</Button>
      </div>
      <PokemonGrid {offset} /></Route
    >
    <Route path="/:name" let:params>
      <Pokemon name={params.name} />
    </Route>
  </Router>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
