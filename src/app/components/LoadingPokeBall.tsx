"use client";
import React from "react";

import { useState, useEffect } from "react";

export default function LoadingPokeBall({ text }: { text: string }) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const animate = setInterval(() => {
			setOpen((prevOpen) => !prevOpen); // Toggle the state between true and false
		}, 500);

		return () => {
			clearInterval(animate);
		};
	}, []);

	return (
		<>
			<div className="flex justify-center mt-20 ">
				<div className=" mt-20 pt-20 cursor-pointer" id="pokeball">
					<h1 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-20 text-4xl font-bold text-black drop-shadow-sm	 z-50">
						{text}
					</h1>
					<div className="relative w-80 h-80 mx-auto" id="container">
						<div
							className="absolute top-0 left-0 w-full h-40 bg-red-600 rounded-t-full border-8 border-black"
							style={{
								transform: open ? "translateY(-10px)" : "translateY(0)",
								transition: "transform 0.3s ease-in-out",
							}}
							id="red"
						></div>

						<div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-b-full border-8 border-black"></div>
						<div
							className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-28 flex items-center justify-center w-20 h-20 bg-white rounded-full border-8 border-black"
							id="white"
						></div>
					</div>
				</div>
			</div>
		</>
	);
}
