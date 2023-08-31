export default async function fetchPokeInfo(pokemonName: string): Promise<PokemonDetails> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data for ${pokemonName}`);
    }

    const data: PokemonDetails = await res.json();

    if (data.name === "type=null") {
      const alternateRes = await fetch(`https://another-api-endpoint`);
      if (!alternateRes.ok) {
        throw new Error(`Failed to fetch alternate data for ${pokemonName}`);
      }
      const alternateData: PokemonDetails = await alternateRes.json();

      return alternateData; 
    }

    return data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
}
