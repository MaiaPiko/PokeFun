


// export default async function fetchAllPokemons(page:number, number:number): Promise<PokeApiResponse> {
//   try {
//     // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * number}&limit=${number}`);
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=${(page-1)*number}`);

//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data: PokeApiResponse = await res.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching Pokémon data:', error);
//     throw error;
//   }
// }


export default async function fetchAllPokemons(page: number, number: number): Promise<PokeApiResponse> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=${(page - 1) * number}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: PokeApiResponse = await res.json();
    
    // Add the ID to each result
    const pokemonsWithId = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: (page - 1) * number + index + 1,
    }));

    return {
      ...data,
      results: pokemonsWithId,
    };
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
}
