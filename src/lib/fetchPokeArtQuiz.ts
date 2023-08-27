

export default async function fetchPokemonArtworkQuiz(pokemonName:string): Promise<PokemonArtworkQuiz> {
 
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); 
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: PokemonSprite = await res.json();
      const officialDefault = data.sprites.other["official-artwork"].front_default;
      const officialShiny =data.sprites.other["official-artwork"].front_default;
      return {officialDefault, officialShiny};
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error;
    }

  }