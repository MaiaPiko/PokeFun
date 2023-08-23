


export default async function fetchPokemonArtwork(pokemonName:string): Promise<string> {
 
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); 
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: PokemonSprite = await res.json();
        return data.sprites.other["official-artwork"].front_default;
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw error;
      }

    }
