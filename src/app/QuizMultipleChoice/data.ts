import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import fetchPokeInfo from "@/lib/fetchPokeInfo";
import getRandomId from "@/lib/getRandomId";
import shuffle from "@/lib/shuffle";

export async function getData() {
    const randomId = getRandomId([]);
    const randomPicture = await fetchPokemonArtwork(randomId);
    const correctAnswer = (await fetchPokeInfo(randomId)).name;
    const randomId2 = getRandomId([randomId]);
    const randomId3 = getRandomId([randomId2, randomId]);
    const randomId4 = getRandomId([randomId2, randomId, randomId3]);
    const randomPokemon = (await fetchPokeInfo(randomId2)).name;
    const randomPokemon2 = (await fetchPokeInfo(randomId3)).name;
    const randomPokemon3 = (await fetchPokeInfo(randomId4)).name;
    const answers = shuffle([
        correctAnswer,
        randomPokemon,
        randomPokemon2,
        randomPokemon3,
    ]);

    return {
        answers,
        correctAnswer,
        randomPicture,
    };
}
