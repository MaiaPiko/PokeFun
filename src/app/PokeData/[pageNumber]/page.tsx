import React from "react";
import fetchAllPokemons from "@/lib/fetchAllPokemons";
import Pagination from "@/app/PokeData/components/Pagination";
import fetchPokeNumber from "@/lib/fetchPokeNumber";
import Link from "next/link";
import capitalize from "@/lib/capitalize";
import Image from "next/image";
import { Suspense } from "react";
import Picture from "../components/Picture";
import LoadingPokeBall from "@/app/components/LoadingPokeBall";
type Params = {
	params: {
		pageNumber: string;
	};
};

export default async function PokemonList({ params: { pageNumber } }: Params) {
	const page = parseInt(pageNumber);
	const pokemonsPerPage = 101;
	const pokeData = await fetchAllPokemons(page, pokemonsPerPage);
	const pokemons = pokeData.results;
	const pokeCountResponse = await fetchPokeNumber();
	const pokeCount = pokeCountResponse.count;
	
	const totalPages = Math.floor(pokeCount / pokemonsPerPage);
	return (
		<div>
			<div className="flex flex-col items-center justify-center">
			<Suspense fallback={<LoadingPokeBall text="loading..."/>}>

				<h1 className="title text-4xl p-4">Pokémons</h1>
				<div className="md:w-2/3 lg:w-3/4 xl:w-4/5 mx-auto">
					<ul className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
						{pokemons.map((pokemon, index) => (
							<div  key={pokemon.name} className="flex items-center">
							<li key={pokemon.name}>
								<Link
									href={`../PokemonInfo/${pokemon.id}`}
									key={index + pokemon.name}
									className="flex items-center"
								>
									{index + 1 + pokemonsPerPage * (page - 1)}.
									<span className="font-semibold">
										{" "}
										{capitalize(pokemon.name)}
									</span>
									<Picture pokemon={pokemon.name}/>

								</Link>
							</li>
							</div>
						))}
					</ul>
			
				</div>
				<Pagination pageTotal={totalPages} pageNumber={pageNumber} />
				</Suspense>
			</div>
		</div>
	);
}
