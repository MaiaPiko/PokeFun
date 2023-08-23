import Head from "next/head";
import Image from "next/image";
import { Metadata } from "next";
import Box from "./components/PokeBall";
import PokeBall from "./components/PokeBall";
import RandomPokemonSprite from "./components/RandomPokeSprite";
import LoadingPokeBall from "./components/LoadingPokeBall";
export const metadata: Metadata = {
	title: "Pokefun",
	description: "Pokemon fun time",
};

export default function Home() {
	const pokeBlue = "#0000a3";
	const pokeRed = "#ed1e25";
	const pokeYellow = "#ffbf00";
	return (
		<>
			<main>				
        <div className="flex justify-center items-center h-2/3 mt-20 ">

				<div className="flex justify-center items-center  mt-20 mx-10 space-y-0">
					<div className="flex flex-col justify-center items-center h-80 space-y-0">
						<PokeBall link={"PokeData/1"} color={pokeBlue} />
						<h1 className="font-semibold text-lg ">Pokedex</h1>
					</div>
					<div className="flex flex-col justify-center items-center  space-y-0">
						<PokeBall link={"#"} color={pokeRed} />
						<h1 className="font-semibold text-lg ">Pokewho</h1>
					</div>
					<div className="flex flex-col justify-center items-center  space-y-0">
						<PokeBall link={"#"} color={pokeYellow} />
						<h1 className="font-semibold text-lg ">Pokewhat</h1>
					</div>
          </div>
				</div>
			</main>
		</>
	);
}
