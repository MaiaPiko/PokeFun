import React from "react";
import Link from "next/link";
import fetchPokeInfo from "@/lib/fetchPokeInfo";
import capitalize from "@/lib/capitalize";
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import Image from "next/image";
import LoadingPokeBall from "@/app/components/LoadingPokeBall";
import arrowLeft from "../../../../public/arrowLeft.svg";
import { Suspense } from "react";
import fetchPokeTypes from "@/lib/fetchPokeType";

type Params = {
	params: {
		pokemon: string;
	};
};

export default async function PokeDetails({ params: { pokemon } }: Params) {
	const pokeData = await fetchPokeInfo(pokemon);
	// const pokeInfo = pokeData.results;
	const pokeName = pokeData.name;
	const pokeHappiness: number = pokeData.base_happiness;
	// const flavorText= pokeData.flavor_text_entries[0].flavor_text
	const captureRate = pokeData.capture_rate;
	const growthRate = pokeData.growth_rate.name;
	const hasGenders = pokeData.has_gender_differences;
	const hatchCounter = pokeData.hatch_counter;
	const id = pokeData.id;
	const isBaby = pokeData.is_baby;
	const isLegendary = pokeData.is_legendary;
	const isMythical = pokeData.is_mythical;
	const order = pokeData.order;
	const shape = pokeData.shape?.name;
	const color = pokeData.color?.name;
	const image = await fetchPokemonArtwork(pokemon);
	const nextId = id < 1010 ? (id + 1).toString() : (1).toString();
	const previousId = id > 1 ? (id - 1).toString() : (1010).toString();
	// const previousPoke = (await fetchPokeInfo(previousId)).name;
	// const nextPoke = (await fetchPokeInfo(nextId)).name;
	const pokeTypes = await fetchPokeTypes(pokemon);

	// Set the animation active after a short delay

	return (
		<>
			<div className="flex justify-center my-20  ">
				<div className="mt-1 items-center md:bg-pokeRed rounded-xl md:shadow-xl bg-transparent md:shadow-custom">
					{pokeData ? (
						<>
							<div className="flex items-center justify-center pt-2">
								<Link href={`../PokemonInfo/${previousId}`}>
									<Image
										className="cursor-pointer"
										src={arrowLeft}
										alt="go to previous pokemon"
										width={30}
										height={30}
									/>
								</Link>
								<Link href={`../PokemonInfo/${nextId}`}>
									<Image
										src={arrowLeft}
										className="rotate-180 cursor-pointer"
										alt="go to next pokemon"
										width={30}
										height={30}
									/>
								</Link>
							</div>

							<div className="bg-white md:m-5  md:rounded-xl ">
								<h1 className="text-4xl	ms-5 md:ps-10 pt-10 font-bold text-center md:text-justify">
									{capitalize(pokeName)}
								</h1>

								<div className="flex m-5 md:items-center md:justify-center md:space-x-0 md:pb-5 flex-col md:flex-row">
									<div className="md:w-1/2 md:ps-10 font-bold	text-slate-800 text-center md:text-justify">
										<p>Id: {id} </p>
										<p>Order: {order}</p>
										<p>Type: {pokeTypes}</p>
										<p>Shape: {shape}</p>
										<p>Color: {color}</p>
										<p>Base Happiness: {pokeHappiness}</p>
										<p>Capture Rate: {captureRate}</p>
										<p>Growth Rate: {growthRate}</p>

										{hasGenders ? (
											<p>
												Has Gender Differences:{" "}
												<span className="text-green"> &#10003;</span>
											</p>
										) : (
											<p>
												Has Gender Differences:
												<span className="text-pokeRed"> &#10006;</span>
											</p>
										)}
										<p>Hatch Counter: {hatchCounter}</p>
										<p>
											Baby:
											{isBaby ? (
												<span className="text-greenColor"> &#10003;</span>
											) : (
												<span className="text-pokeRed"> &#10006;</span>
											)}
										</p>
										<p>
											Legendary:
											{isLegendary ? (
												<span className="text-greenColor"> &#10003;</span>
											) : (
												<span className="text-pokeRed"> &#10006;</span>
											)}
										</p>
										<p>
											Mythical:
											{isMythical ? (
												<span className="text-greenColor"> &#10003;</span>
											) : (
												<span className="text-pokeRed"> &#10006;</span>
											)}
										</p>
									</div>
									<div className="w-2/3 ">
										<Suspense
											fallback={<LoadingPokeBall text="loading..." />}
										/>

										<div className="md:-translate-y-5 translate-x-20 md:translate-x-0">
											<Image
												src={image}
												alt={`${pokemon} Image`}
												width={400}
												height={400}
											/>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						<LoadingPokeBall text="loading..." />
					)}
				</div>
			</div>
		</>
	);
}
