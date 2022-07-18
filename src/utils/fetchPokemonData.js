export const fetchPokemonData = async (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
    res.json()
  );
};
