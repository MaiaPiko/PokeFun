"use client"; // Error components must be Client Components
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
		getPokemon();
	}, [error]);

	const sadPoke = "oranguru";
	const [pokemon, setPokemon] = useState("");
	const getPokemon = async () => {
		const fetchedPokemon = await fetchPokemonArtwork(sadPoke);
		setPokemon(fetchedPokemon);
	};

	return (
		<div className="flex justify-center mt-8">
			<div className="flex flex-col justify-center space-y-1 items-center">
				{" "}
				<p className="text-xl text-center">Something went wrong!</p>
				{pokemon && (
					<Image
						src={pokemon}
						alt={`organguru`}
						width={400}
						height={400}
						priority
						className="pb-5"
					/>
				)}
        <Link href={"/"}>

				<button
					className="text-center text-white bg-pokeRed w-60 py-2  text-center font-semibold rounded disabled:border"
				>
					Back to Home?
				</button>
        </Link>
			</div>
		</div>
	);
}
