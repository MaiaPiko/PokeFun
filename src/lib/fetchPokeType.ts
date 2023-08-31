interface TypeDetail {
    name: string;
  }
  
  interface PokemonType {
    slot: number;
    type: TypeDetail;
  }
  
  export default async function fetchPokeTypes(pokemonName: string): Promise<string> {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: { types: PokemonType[] } = await res.json();
  
      const typeNames = data.types.map(typeData => typeData.type.name);
      const types = typeNames.join(" + ");
      return types;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      throw error;
    }
  }
  