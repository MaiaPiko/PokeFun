"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import pika from "../../../public/pika.svg";
import Image from "next/image";
import { useState } from "react";
export default function PokeBall({
	
	link,
	color,
}: {
	
	link: string;
	color: string;
}) {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

// 	const [pokeColor, setPokeColor] = useState("")
// useEffect(()=>{
// 	if (color == "bluePoke"){
// 		setPokeColor("#0000a3")
// 	}
// 	else if (color=="redPoke"){
// 		setPokeColor('#ed1e25')
// 	}
// 	else if (color=="pokeYellow"){
// 		setPokeColor('#ffbf00')
// 	}
// },[])
	return (
		<>
			<Link href={link}>
				<div
					className=" cursor-pointer "
					id="pokeball"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{/* <h1 className="-translate-y-10 text-4xl font-bold  drop-shadow-sm text-center">
						<span >{textPart1}</span><span className={`text-${color}`}>{textPart2}</span>
					</h1> */}
					<div className="relative w-80 h-80 mx-auto" id="container">
						<div
							className={`absolute top-0 left-0 w-full h-40 rounded-t-full border-8 border-black`}
							style={{
								backgroundColor:`${color}`,
								transform: isHover ? "translateY(-10px)" : "translateY(0)",
								transition: "transform 0.3s ease-in-out",
								
							}}
							id="red"
						></div>

						{/* <div className="absolute top-0 left-0 w-full h-40 bg-red-600 rounded-t-full border-8 border-black transform hover:-translate-y-5 transition-transform" id="red"></div> */}
						<div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-b-full border-8 border-black"></div>
						<div
							className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-28 flex items-center justify-center w-20 h-20 bg-white rounded-full border-8 border-black"
							id="white"
						></div>
					</div>
				</div>
			</Link>
		</>
	);
}
