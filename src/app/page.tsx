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
	
	const [isHover, setIsHover] = useState(false)
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
					
					<div className={`flex content-center ${hoverId=="0"?"gap-44":"gap-0"}`}>
					<div
						// className={`
						// ${hoverId=="2"|| hoverId=="3" ? "transition ease-in delay-7 translate-x-20 skew-1":
						//  hoverId=="1"? "transition ease-in delay-70 translate-x-20 z-50":""}`}
						id="1"
						onMouseEnter={() => handleMouseEnter("1")}
						onMouseLeave={() => handleMouseLeave("1")}
					>
						<PokeBall link={"PokeData/1"} color={pokeBlue}  isHover={hoverId == "1"? true:false}/>
						<h1
							className={`font-semibold text-lg ${
								hoverId == "1" ? "flex" : "hidden"
							}`}
						>
							Pokedex
						</h1>
					</div>
					<div
						className={`${hoverId=="1" ? " -translate-x-40 z-0":""}`}
						id="2"
						onMouseEnter={() => handleMouseEnter("2")}
						onMouseLeave={() => handleMouseLeave("2")}
					>
						<PokeBall link={"#"} color={pokeRed} isHover={hoverId == "2"? true:false}/>
						<h1
							className={`font-semibold text-lg ${
								hoverId == "2" ? "flex" : "hidden"
							}`}
						>
							Pokewhich
						</h1>
					</div>
					
					{/* <div
						id="3"
						onMouseEnter={() => handleMouseEnter("3")}
						onMouseLeave={() => handleMouseLeave("3")}
						className={`${
							hoverId === "2"
							  ? "transition ease-in delay-7 -translate-x-20 z-0"
							  : hoverId == "1"
							  ? "transition ease-in delay-7 -translate-x-20 z-0"
							  : ""
						  }`}
						  

					>
						<PokeBall link={"#"} color={pokeYellow} isHover={hoverId == "3"? true:false}/>
						<h1
							className={`font-semibold text-lg ${
								hoverId == "3" ? "flex" : "hidden"
							}`}
						>
							Pokewhat
						</h1>*/}
					</div> 
					
				</div>
			</main>
		</>
	);
}
