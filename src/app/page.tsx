"use client";
import Head from "next/head";
import Image from "next/image";
import { Metadata } from "next";
import Box from "./components/PokeBall";
import PokeBall from "./components/PokeBall";

import RandomPokemonSprite from "./components/RandomPokeSprite";
import LoadingPokeBall from "./components/LoadingPokeBall";
import { useState } from "react";

export const metadata: Metadata = {
	title: "Pokefun",
	description: "Pokemon fun time",
};

export default function Home() {
	const pokeBlue = "#0000a3";
	const pokeRed = "#ed1e25";
	const pokeYellow = "#ffbf00";
	const [hoverId, setHoverId] = useState<string>("0");

	const [isHover, setIsHover] = useState(false);
	const handleMouseEnter = (id: string) => {
		setHoverId(id);
	};

	const handleMouseLeave = (id: string) => {
		setHoverId("0");
	};

	return (
		<>
			<main>
				<div className={`flex justify-center h-2/3 mt-20 `}>
					<div
						className={`flex content-center ${
							hoverId == "0" || hoverId == "2" ? "gap-44" : "gap-0"
						}`}
					>
						<div
							className="text-center"
							id="1"
							onMouseEnter={() => handleMouseEnter("1")}
							onMouseLeave={() => handleMouseLeave("1")}
						>
							<PokeBall
								link={"PokeData/1"}
								color={pokeBlue}
								isHover={hoverId == "1" ? true : false}
							/>
							<h1
								className={`font-semibold text-lg ${
									hoverId == "1" ? "block" : "hidden"
								}`}
							>
								Pokedex
							</h1>
						</div>
						<div
							className="text-center"
							id="2"
							onMouseEnter={() => handleMouseEnter("2")}
							onMouseLeave={() => handleMouseLeave("2")}
						>
							<div className="flex flex-col items-center">
								<PokeBall
									link={"/QuizOptions"}
									color={pokeRed}
									isHover={hoverId == "2" ? true : false}
								
								/>
								<h1
									className={`font-semibold text-lg ${
										hoverId == "2" ? "block" : "hidden"
									}`}
								>
									Pokewhich
								</h1>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
