

export default async function fetchPokeInfo(pokemonName:string): Promise<PokemonDetails > {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data for ${pokemonName}`);
      }
      const data: PokemonDetails = await res.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error;
    }
  }