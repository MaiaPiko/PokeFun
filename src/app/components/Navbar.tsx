"use client"
import React from "react";
import Link from "next/link";
import menuIcon from "../../../public/menu-icon.svg";
import pokeBall from "../../../public/pokeball.svg";
import Image from "next/image";
import { useState } from "react";




export default function Navbar() {
    const [isHover, setIsHover] = useState(false);
    
    const handleMouseEnter= () => {
        setIsHover(true)
    }

    const handleMouseLeave= () => {
        setIsHover(false)
    }


    return (
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
            <div className="flex items-center">
                <Link href={"/"}>
                    <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <span className="mr-2">Pokéfun</span>
                        <div className={`w-2/3 transition-transform duration-300 transform ${isHover?"-translate-y-1":""}`}>

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
            />
            <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                    <li>
                        <Link className="md:p-4 py-2 block hover:text-purple-400" href={"#"}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}