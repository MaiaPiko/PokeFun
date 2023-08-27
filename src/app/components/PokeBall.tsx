"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import pika from "../../../public/pika.svg";
import Image from "next/image";
import { useState } from "react";
export default function PokeBall({
	link,
	color,
	isHover,
}: {
	link: string;
	color: string;
	isHover: boolean;
}) {


	return (
		<>
			<Link href={link}>
				<div
					className={`cursor-pointer   ${
						isHover
							? "relative z-50 justify-center items-center screen"
							: "absolute z-0"
					} `}
					id="pokeball"
				>
					<div
						className={` ${isHover ? "w-80 h-80" : "w-40 h-40"} mx-auto`}
						id="container"
					>
						<div
							className={`absolute top-0 left-0 ${
								isHover ? " w-full h-40 border-8" : " border-4 w-full h-20"
							} rounded-t-full  border-black`}
							style={{
								backgroundColor: `${color}`,
								transform: isHover ? "translateY(-10px)" : "translateY(0)",
								transition: "transform 0.3s ease-in-out",
							}}
							id="red"
						></div>

						<div
							className={`absolute bottom-0 left-0 w-full ${
								isHover ? "h-40 border-8" : " border-4 h-20"
							} bg-white rounded-b-full  border-black`}
						></div>


						<div
							className={`rounded-full bg-transparent hover:transition-shadow hover:ease-in hover:duration-600 hover:block }`}
							id="glow"
							style={{
								position: "absolute",
								zIndex: "-1",
								top: "50%",
								left: "50%",
								transform: isHover
									? "translate(-50%, -50%) scale(1.2)" /* Scale up when hovering */
									: "translate(-50%, -50%) scale(0)" /* Scale down and hide when not hovering */,
								transition: isHover?
									"transform 0.6s ":"" /* Smooth transition */,
								boxShadow:
									"0 0 120px 60px rgba(255,255,0, 0.3), " +
									"0 0 200px 120px rgba(255,234, 0,  0.5), " +
									"0 0 280px 180px rgba(245, 245, 220, 0.3)",
							}}
						></div>

						<div
							className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
								isHover ? "-translate-y-28" : "-translate-y-14"
							} flex items-center justify-center ${
								isHover ? "w-20 h-20 border-8" : " border-4 w-10 h-10"
							} bg-white rounded-full  border-black`}
							id="white"
						></div>
					</div>
				</div>
			</Link>
		</>
	);
}
