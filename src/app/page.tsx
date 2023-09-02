"use client";
import Head from "next/head";
// import { Metadata } from "next";
import PokeBall from "./components/PokeBall";
import getRandomId from "@/lib/getRandomId";
import RandomPokemonSprite from "./components/RandomPokeSprite";
import LoadingPokeBall from "./components/LoadingPokeBall";
import { useEffect, useState } from "react";
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";

// export const metadata: Metadata = {
// 	title: "Pokefun",
// 	description: "Pokemon fun time",
// };

export default function Home() {
	
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
			<Head>
				<link rel="shortcut icon" href="/static/favicon.ico" />
			</Head>
			<main>
				<div
					className={`flex justify-center  
				`}
				>
					<div
						className={`flex  items-center md:my-20 md:flex-row flex-col md:space-x-9
						
						`}
					>
						<div
							className=" my-14 relative"
							id="1"
							onMouseEnter={() => handleMouseEnter("1")}
							onMouseLeave={() => handleMouseLeave("1")}
							onClick={() => handleMouseEnter("1")}

						>
						
							{/* <Image
							src={image}
							alt="pokemon"
							width={300}
							height={300}
							className={`absolute inset-0 transition-opacity ${
								hoverId=="1" ? "opacity-100" : "opacity-0"
							  }`}
							/> */}
							<PokeBall
								link={"/QuizOptions"}
								color={"pokeBlue"}
								isHover={hoverId == "1" ? true : false}
								text="PokéQuiz"
							/>
						</div>
						<div
							className="md:my-14 my-8 relative"
							id="2"
							onMouseEnter={() => handleMouseEnter("2")}
							onMouseLeave={() => handleMouseLeave("2")}
							onClick={() => handleMouseEnter("2")}
						>
							<div className="flex flex-col items-center mb-4 md:mb-0">
								<PokeBall
									link={"PokeData/1"}
									color={"pokeRed"}
									isHover={hoverId == "2" ? true : false}
									text={"PokéDex"}
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
