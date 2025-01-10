import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  console.log(pokemon);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setOffset(offset - 20)}
        disabled={offset === 0 ? true : false}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setOffset(offset + 20)}>
        Next Page
      </button>
      <ol>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </main>
  );
}
