"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import pika from "../../../public/pika.svg";
import Image from "next/image";
import { useState } from "react";
export default function PokeBall({
	link,
	color,
	isHover
}: {
	link: string;
	color: string;
	isHover: boolean;
}) {
	// const [isHover, setIsHover] = useState(false);

	// const handleMouseEnter = () => {
	// 	setIsHover(true);
	// };
	// const handleMouseLeave = () => {
	// 	setIsHover(false);
	// };

	return (
		<>
			<Link href={link}>
				<div
					className={`cursor-pointer   ${isHover? "relative z-50 justify-center items-center screen":"absolute z-0"} `}
					id="pokeball"
					// onMouseEnter={handleMouseEnter}
					// onMouseLeave={handleMouseLeave}
				>
					
					<div
						className={` ${
							isHover ? "w-80 h-80" : "w-40 h-40"
						} mx-auto`}
						id="container"
					>
						<div
							className={`absolute top-0 left-0 ${isHover?" w-full h-40 border-8": " border-4 w-full h-20"} rounded-t-full  border-black`}
							style={{
								backgroundColor: `${color}`,
								transform: isHover ? "translateY(-10px)" : "translateY(0)",
								transition: "transform 0.3s ease-in-out",
							}}
							id="red"
						></div>

						<div
							className={`absolute bottom-0 left-0 w-full ${
								isHover ? "h-40 border-8": " border-4 h-20"
							} bg-white rounded-b-full  border-black`}
						></div>
						<div
							className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${isHover?"-translate-y-28":"-translate-y-14"} flex items-center justify-center ${
								isHover ? "w-20 h-20 border-8": " border-4 w-10 h-10"
							} bg-white rounded-full  border-black`}
							id="white"
						></div>
						</div>
				</div>
			</Link>
		</>
	);
}
