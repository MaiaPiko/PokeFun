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
				<div className={`flex justify-center  
				`}>
					<div
						className={`flex  items-center sm:flex-col md:flex-row 
						
						`}
					>
						<div
							className=" my-14"
							id="1"
							onMouseEnter={() => handleMouseEnter("1")}
							onMouseLeave={() => handleMouseLeave("1")}
						>
							<PokeBall
								link={"/QuizOptions"}
								color={"pokeBlue"}
								isHover={hoverId == "1" ? true : false}
								text="PokeQuiz"
							/>
					
						</div>
						<div
							className="my-14"
							id="2"
							onMouseEnter={() => handleMouseEnter("2")}
							onMouseLeave={() => handleMouseLeave("2")}
						>
							<div className="flex flex-col items-center">
								<PokeBall
									link={"PokeData/1"}
									color={"pokeRed"}
									isHover={hoverId == "2" ? true : false}
									text={"PokeDex"}
								/>
								{/* <h1 className={`font-semibold text-lg `}>Pokewhich</h1> */}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
