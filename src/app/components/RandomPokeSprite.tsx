"use client"
import React, { useEffect, useState } from "react";

interface PokemonSprite {
  sprites: {
    front_default: string;
  };
}

export default function RandomPokemonSprite() {
  const [randomPokemonData, setRandomPokemonData] = useState<PokemonSprite | null>(null);

  useEffect(() => {
    async function fetchRandomPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/7"); // Replace with random ID
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: PokemonSprite = await response.json();
        setRandomPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }
    fetchRandomPokemon();
  }, []);

  return (
    <div>
      <h1>Random Pokémon Sprite</h1>
      {randomPokemonData ? (
        <img src={randomPokemonData.sprites.front_default} alt="Random Pokémon" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
