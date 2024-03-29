"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import pika from "../../../public/pika.svg";
import Image from "next/image";
import { useState } from "react";
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import getRandomId from "@/lib/getRandomId";
export default function PokeBall({
	link,
	color,
	isHover,
	text,
}: {
	link: string;
	color: string;
	isHover: boolean;
	text: string | null;
}) {
	const [image1, setImage1] = useState("");
	const [image2, setImage2]=useState("")

	const chosenColor =
		color === "pokeBlue" ? "rgb(43,111,236)" : color === "pokeRed" ? "#ed1e25" : color;

	
	const width = 40;
	
	const fetchPictures = async () => {
		const poke1 = "dewgong";
	

		const pokePicture1 = await fetchPokemonArtwork(poke1);
		setImage1(pokePicture1);
		const poke2 = "drowzee"
		const pokePicture2 = await fetchPokemonArtwork(poke2);
		setImage2(pokePicture2)
		
	};

	useEffect(() => {
		try {
			fetchPictures();
		} catch (error) {
			fetchPictures();
		}
	}, []);
	return (
		<>
			<Link href={link}>
				<div
					className={`cursor-pointer relative justify-center items-center screen   ${
						isHover ? "z-50 " : "z-0"
					} `}
					id="pokeball"
					style={{
						transform: isHover ? "scale(1.2)" : "",
						transition: "transform .3s",
						transitionDelay: "0s",
					}}
				>
					<div
						className={` w-${width * 2} h-${width * 2} mx-auto `}
						id="container"
					>
						<div
							className={` absolute top-0 left-0 
								w-full h-${width} border-8 rounded-t-full  border-black ${isHover?"z-0":"z-10"}`}
							style={{
								backgroundColor: chosenColor,
								transform: isHover ? "translateY(-50px)" : "translateY(0)",
								transition: "transform 0.3s ease-in-out",
							}}
							id="colored"
						></div>

						<div
							className={`z-20 absolute bottom-0 left-0 w-full h-${width} border-8 bg-white rounded-b-full  border-black`}
						></div>
						
						<div
							style={{
								position: "absolute",
								zIndex: "-1",
								top: "50%",
								left: "50%",
								transform: isHover
									? "translate(-50%, -50%) scale(1.2)" /* Scale up when hovering */
									: "translate(-50%, -50%) scale(0)" /* Scale down and hide when not hovering */,
								transition: isHover ? "transform 0.6s" : "",
								boxShadow:
									color == "pokeBlue"
										? "0 0 120px 60px rgba(0, 0, 255, 0.3), " +
										  "0 0 200px 100px rgba(0, 0, 255, 0.5), " +
										  "0 0 280px 130px rgba(245, 245, 220, 0.3)"
										: color == "pokeRed"
										? "0 0 120px 60px rgba(255, 0, 0, 0.3), " +
										  "0 0 200px 100px rgba(255, 0, 0, 0.5), " +
										  "0 0 280px 130px rgba(245, 245, 220, 0.3)"
										: "0 0 120px 60px rgba(255,255,0, 0.3), " +
										  "0 0 200px 100px rgba(255,234, 0,  0.5), " +
										  "0 0 280px 130px rgba(245, 245, 220, 0.3)",
							}}
						></div>
						<div className="flex flex-col">
							<div
								className={`z-30 absolute bottom-0 left-1/2 transform 
								-translate-x-1/2 -translate-y-28 
							 flex items-center justify-center  w-${width / 2} h-${width / 2} border-8
									
							bg-white rounded-full  border-black`}
								id="white"
							></div>
							<Image
						src={color=="pokeRed" ? image1 : image2}
						alt="pokemon"
						width={300}
						height={300}
						className={` absolute inset-0 transition-opacity ${
							isHover? "opacity-100 z-10" : "opacity-0 z-0"
						  }`}
						/>
							<h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-9 text-center z-50 buttom-0 text-xl">
								{text}
							</h1>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
