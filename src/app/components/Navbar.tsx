"use client";
import React, { useState } from "react";
import Link from "next/link";
import menuIcon from "../../../public/menu-icon.svg";
import pokeBall from "../../../public/pokeball.svg";
import Image from "next/image";
import { usePathname } from 'next/navigation';
export default function Navbar() {
	const [isHover, setIsHover] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const currentPage = usePathname()
	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};
console.log(currentPage)
	return (
		<nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-2 px-4 text-lg text-gray-700 bg-transparent">
			<div className="flex items-center">
				<Link href={"/"}>
					<div
						className="flex items-center"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<span className="mr-2">Pokéfun</span>
						<div
							className={`w-2/3 transition-transform duration-300 transform ${
								isHover ? "-translate-y-1" : ""
							}`}
						>
							<Image
								src={pokeBall}
								alt="Pokeball"
								width={30}
								height={30}
								className="h-6 w-6 cursor-pointer hover:transform-y-5"
							/>
						</div>
					</div>
				</Link>
			</div>

			<Image
				src={menuIcon}
				alt="menu"
				width={30}
				className="h-6 w-6 cursor-pointer md:hidden block"
				onClick={handleMenuToggle}
			/>
			<div
				className={`${
					isMenuOpen
						? "block md:flex md:items-end items-end"
						: "hidden md:flex md:items-end items-end"
				} w-full md:w-auto md:absolute md:right-0 md:top-0 md:bg-white md:z-10 z-10`}
				id="menu"
			>
				<ul className="m-1 relative pt-4 mr-0 text-base text-gray-700 md:flex md:pt-0  shadow-xl md:shadow-none">
					<li onClick={handleMenuToggle}>
						<Link
							className= {`block  p-3   rounded  ${currentPage== "/QuizOptions" || currentPage.includes("/QuizMultipleChoice/")? "bg-pokeRed text-white":" text-slate-800"}`}
							href="/QuizOptions/"
						>
							PokéQuiz
						</Link>
					</li>
					<li onClick={handleMenuToggle}>
						<Link
							className= {`block  p-3 mr-2 rounded  ${currentPage.includes("/PokeData/")? "bg-pokeRed text-white":" text-slate-800"}`}
							href="/PokeData/1"
						>
							PokéDex
						</Link>
					</li>

					{/* <li onClick={handleMenuToggle}>
						<Link
							className={`block  p-3 pr-4  rounded  ${currentPage=='' ? "bg-pokeRed text-white":" text-slate-800"} `}
							href="/"
						>
							Home
						</Link>
					</li> */}
				</ul>
			</div>
		</nav>
	);
}
