import React from "react";
import Link from "next/link";
import fetchPokeInfo from "@/lib/fetchPokeInfo";
import capitalize from "@/lib/capitalize";
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import Image from "next/image";
import LoadingPokeBall from "@/app/components/LoadingPokeBall";
import arrowLeft from "../../../../public/arrowLeft.svg";
import { Suspense } from "react";

type Params = {
	params: {
		pokemon: string;
	};
};

export default async function PokeDetails({ params: { pokemon } }: Params) {
	const pokeData = await fetchPokeInfo(pokemon);
	// const pokeInfo = pokeData.results;
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
  const nextId = id < 1010 ? (id+1).toString() : (1).toString();
  const previousId = id > 1 ? (id-1).toString() : (1010).toString();
  const previousPoke = (await fetchPokeInfo(previousId)).name;
  const nextPoke = (await fetchPokeInfo(nextId)).name;


// Set the animation active after a short delay


	return (
		<>
    	<div className="flex justify-center mt-20  ">

			<div className="mt-1 items-center bg-pokeRed rounded-xl shadow-xl	">
				{pokeData ? (
					<>
          <div className="flex items-center justify-center pt-2">
            <Link href={`../PokemonInfo/${previousPoke}`}>
                <Image
              
                className="cursor-pointer"
                src={arrowLeft} alt="go to previous pokemon" width={30} height={30}/>
                  </Link>
                  <Link href={`../PokemonInfo/${nextPoke}`}>

                <Image
                src={arrowLeft}
                className="rotate-180 cursor-pointer"
                alt="go to next pokemon" width={30} height={30}/>
                </Link>

                </div>
            <h1 className="text-4xl	ps-10 pt-10 font-bold ">{capitalize(pokemon)}</h1>

						<div className="flex items-center justify-center space-x-0 pb-5 ">

              <div className="w-1/2 ps-10 font-bold	text-slate-200 ">
								<p>Id: {id} </p>
								<p>Order: {order}</p>
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
										<span className="text-slate-800"> &#10006;</span>
									</p>
								)}
								<p>Hatch Counter: {hatchCounter}</p>
								<p>
									Baby:
									{isBaby ? (
										<span className="text-greenColor"> &#10003;</span>
									) : (
										<span className="text-slate-800"> &#10006;</span>
									)}
								</p>
								<p>
									Legendary:
									{isLegendary ? (
										<span className="text-greenColor"> &#10003;</span>
									) : (
										<span className="text-slate-800"> &#10006;</span>
									)}
								</p>
								<p>
									Mythical:
									{isMythical ? (
										<span className="text-greenColor"> &#10003;</span>
									) : (
										<span className="text-slate-800"> &#10006;</span>
									)}
								</p>
							</div>
							<div className="w-2/3 ">
                <Suspense fallback={<LoadingPokeBall text="loading..."/>}/>
								
                <div className="-translate-y-5 ">
                <Image
									src={image}
									alt={`${pokemon} Image`}
									width={400}
									height={400}
                  
								/>
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
