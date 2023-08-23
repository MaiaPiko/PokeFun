
export default async function fetchPokeNumber(): Promise<PokeApiResponse> {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: PokeApiResponse = await res.json();
        return data;
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw error;
      }
}
