"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import getRandomId from "@/lib/getRandomId";
import shuffle from "@/lib/shuffle";
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import fetchPokeInfo from "@/lib/fetchPokeInfo";
import { Suspense } from "react";
import LoadingPokeBall from "../components/LoadingPokeBall";
import fetchPokemonArtworkQuiz from "@/lib/fetchPokeArtQuiz";

export default function PokeWhich() {
	const [score, setScore] = useState(0);
	const [totalQuestions, setTotalQuestions] = useState(0);
	const [disableButton, setDisableButton] = useState(false);
	const [dataFetched, setDataFetched] = useState(false);
	const [userChoice, setUserChoice] = useState("");
	const [data, setData] = useState<PokemonQuizData>({
		answers: [],
		correctAnswer: "",
		randomPicture: "",
		shinyPicture: "",
	});
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

	const fetchData = async () => {
		const randomId = getRandomId([]);
		const randomPicture = await fetchPokemonArtwork(randomId);
		const shinyPicture = (await fetchPokemonArtworkQuiz(randomId))
			.officialShiny;
		const correctAnswer = (await fetchPokeInfo(randomId)).name;
		const randomId2 = getRandomId([randomId]);
		const randomId3 = getRandomId([randomId2, randomId]);
		const randomId4 = getRandomId([randomId2, randomId, randomId3]);
		const randomPokemon = (await fetchPokeInfo(randomId2)).name;
		const randomPokemon2 = (await fetchPokeInfo(randomId3)).name;
		const randomPokemon3 = (await fetchPokeInfo(randomId4)).name;
		const answers = shuffle([
			correctAnswer,
			randomPokemon,
			randomPokemon2,
			randomPokemon3,
		]);

		setData({
			answers,
			correctAnswer,
			randomPicture,
			shinyPicture,
		});
		setDataFetched(true);
		console.log(correctAnswer);
	};

	useEffect(() => {
		try{
		fetchData()}
		catch(error){
			fetchData()
		}
	}, []);

	useEffect(() => {
		const savedScore = localStorage.getItem("pokeQuizScore");
		const savedTotalQuestions = localStorage.getItem("pokeQuizTotalQuestions");

		if (savedScore !== null && savedTotalQuestions !== null) {
			setScore(parseInt(savedScore, 10));
			setTotalQuestions(parseInt(savedTotalQuestions, 10));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("pokeQuizScore", score.toString());
		localStorage.setItem("pokeQuizTotalQuestions", totalQuestions.toString());
	}, [score, totalQuestions]);

	const handleClick = (answer: string) => {
		setTotalQuestions(totalQuestions + 1);
		setDisableButton(true);
		setUserChoice(answer);
		if (answer === data.correctAnswer) {
			setIsCorrect(true);
			setScore(score + 1);
		} else {
			setIsCorrect(false);
		}
	};
	return (
		<>
			<div className="flex justify-center">
				{dataFetched ? (
					<div>
						<p>
							Score:{score}/{totalQuestions}
						</p>
						<div className="relative">
							{userChoice && (
								<div>
									{isCorrect ? (
										<div
											className={`rounded-full bg-transparent hover:transition-shadow hover:ease-in hover:duration-600 hover:block }`}
											id="glow"
											style={{
												position: "absolute",
												zIndex: "-1",
												top: "50%",
												left: "50%",
												transform: "translate(-50%, -50%) scale(1.2)",
												transition: "transform 0.6s",
												boxShadow:
													"0 0 120px 60px rgba(255,255,0, 0.3), " +
													"0 0 200px 120px rgba(80,200, 120,  0.5), " +
													"0 0 280px 180px rgba(245, 245, 220, 0.3)",
											}}
										></div>
									) : (
										<div
											className={`rounded-full bg-transparent hover:transition-shadow hover:ease-in hover:duration-600 hover:block }`}
											id="glow"
											style={{
												position: "absolute",
												zIndex: "-1",
												top: "50%",
												left: "50%",
												transform: "translate(-50%, -50%) scale(1.2)",
												transition: "transform 0.6s",
												boxShadow:
													"0 0 120px 30px rgba(255,255,0, 0.3), " +
													"0 0 200px 100px rgba(255,51, 51,  0.5), " +
													"0 0 280px 180px rgba(245, 51, 51, 0.3)",
											}}
										></div>
									)}
								</div>
							)}
							<Image
								src={data.randomPicture}
								alt={`random Image`}
								width={400}
								height={400}
								priority
							/>
						</div>
					</div>
				) : (
					<LoadingPokeBall text="loading..." />
				)}
			</div>
			<div className="flex justify-center">
				{/* <h3 className="font-bold p-10">What is my name?</h3> */}
			</div>
			<div className="flex justify-center">
				<div className="grid grid-cols-1 gap-1">
					{data.answers.map((answer, index) => (
						<div key={index} className="flex content-start">
							<button
								key={index}
								onClick={() => handleClick(answer)}
								disabled={disableButton}
								className={`
    w-60 py-2 px-4 text-center font-semibold rounded disabled:border
    ${
			userChoice
				? answer == userChoice
					? isCorrect
						? "disabled:text-green-500 disabled:border-green-500"
						: "disabled:text-pokeRed disabled:border-red-500 disabled:hover:bg-transparent"
					: " disabled:border-slate-500 disabled:text-slate-500"
				: "bg-transparent hover:bg-pokeRed hover:text-white=800 text-pokeRed hover:text-white border border-pokeRed hover:border-pokeRed"
		}
   
  `}
							>
								{answer}
							</button>
							{isCorrect && answer === data.correctAnswer && (
								<p className="ps-48 text-green-500 font-bold pt-3 text-lg ps-2 absolute">
									&#x2713;
								</p>
							)}
							{!isCorrect && userChoice === answer && (
								<p className="ps-48 text-red-500 font-bold pt-3  ps-2 absolute">&#9587;</p>
							)}
						</div>
					))}
					{userChoice && (
						<button
							onClick={() => {
								window.location.reload();
							}}
							className="text-white bg-pokeRed w-60 py-2 px-4 text-center font-semibold rounded disabled:border
							"
						>
							Next
						</button>
					)}
				</div>
			</div>
		</>
	);
}
