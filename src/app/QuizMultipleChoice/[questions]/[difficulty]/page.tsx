"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import getRandomId from "@/lib/getRandomId";
import shuffle from "@/lib/shuffle";
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import fetchPokeInfo from "@/lib/fetchPokeInfo";
import pokeBall from "../../../../../public/pokeball.svg"
import { Suspense } from "react";
import LoadingPokeBall from "../../../components/LoadingPokeBall";
import fetchPokemonArtworkQuiz from "@/lib/fetchPokeArtQuiz";
import ProgressBar from "../../components/ProgressBar";
type Params = {
	params: {
		questions: string;

		difficulty: string;
	};
};

export default function PokeWhich({
	params: { questions, difficulty },
}: Params) {
	const [score, setScore] = useState(0);
	const totalQuestions = parseInt(questions);
	const questionDifficulty = difficulty;
	const [disableButton, setDisableButton] = useState(false);
	const [dataFetched, setDataFetched] = useState(false);
	const [userChoice, setUserChoice] = useState("");
	const [answeredQuestions, setAnsweredQuestions] = useState(1);
	const [goodScore, setGoodScore] = useState<boolean>(false);
	const [data, setData] = useState<PokemonQuizData>({
		answers: [],
		correctAnswer: "",
		randomPicture: "",
	});

	const [endGamePicture, setEndGamePicture] = useState("");

	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [gameFinish, setGameFinish] = useState<boolean>(false);


	const fetchGameEndPictures = async (goodScore:boolean) => {
		const sadPoke = "oranguru";
		const happyPoke = "pikachu";
		
		let endPicture; 
		if (goodScore==true) {
		  endPicture = await fetchPokemonArtwork(happyPoke); 
		  setEndGamePicture(endPicture); 

		} else if(goodScore==false) {
		  endPicture = await fetchPokemonArtwork(sadPoke); 
		  setEndGamePicture(endPicture); 

		}
	  
	  };
	//   console.log(data.correctAnswer)


	const fetchData = async () => {
		const randomId = getRandomId([]);
		const randomPicture = await fetchPokemonArtwork(randomId);
		const correctAnswer = (await fetchPokeInfo(randomId)).name;
		const randomId2 = getRandomId([randomId]);
		const randomPokemon = (await fetchPokeInfo(randomId2)).name;
		let randomId3, randomId4;
		let answers = [];
		if (questionDifficulty !== "easy") {
			randomId3 = getRandomId([randomId2, randomId]);
			randomId4 = getRandomId([randomId2, randomId, randomId3]);
			const randomPokemon2 = (await fetchPokeInfo(randomId3)).name;
			const randomPokemon3 = (await fetchPokeInfo(randomId4)).name;
			answers = shuffle([
				correctAnswer,
				randomPokemon,
				randomPokemon2,
				randomPokemon3,
			]);
			setData({ correctAnswer, randomPicture, answers });
		} else {
			answers = shuffle([correctAnswer, randomPokemon]);
			setData({
				answers,
				correctAnswer,
				randomPicture,
	
			});
		}
		setDataFetched(true);
	};

	useEffect(() => {
		try {
			fetchData();
		} catch (error) {
			fetchData();
		}
	}, []);


	

	const handleClick = (answer: string) => {
		setDisableButton(true);
		setUserChoice(answer);

		if (answer === data.correctAnswer) {
			setIsCorrect(true);
			setScore(score + 1);
		} else {
			setIsCorrect(false);
		}

		if (totalQuestions <= answeredQuestions - 1) {
			setGameFinish(true);
		}
	};

	const handleNext = () => {
		if (!gameFinish) {
			setAnsweredQuestions(answeredQuestions + 1);
		}
		if (!gameFinish) {
			try {
				fetchData();
			} catch (error) {
				fetchData();
			}
			setDisableButton(false);
			setUserChoice("");
		}
		if (totalQuestions === answeredQuestions) {
			setGameFinish(true);
			const userScore = (score/totalQuestions)*100
			if(userScore> 50){
				setGoodScore(true)
			}
			else{
				setGoodScore(false)
			}
			fetchGameEndPictures(userScore> 50);
		}
	};
	const wrongAnswers =  answeredQuestions - 1 - score;
	const incorrectAnswers = wrongAnswers<0 ? 0: wrongAnswers;
	return (
		<>
			{!gameFinish ? (
				<>
					<div className="flex justify-center mt-8">
						{dataFetched ? (
							<div>
								<div className=" flex flex-row justify-center">
									<p className="text-green-500 font-bold text-lg ">
										&#x2713; : {score}
									</p>
									<p className="text-red-500 font-bold ps-10">
										&#9587; : {incorrectAnswers}{" "}
									</p>
								</div>

								<div className="relative">
									{userChoice ? (
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
												// 	boxShadow:
												// 		"0 0 120px 30px rgba(255,255,0, 0.3), " +
												// 		"0 0 200px 100px rgba(255,255, 51,  0.5), " +
												// 		"0 0 280px 180px rgba(255, 255, 51, 0.3)",
											}}
										></div>
									)}
									<Image
										src={data.randomPicture}
										alt={`random Image`}
										width={400}
										height={400}
										priority
										className="pb-5"
									/>

									<p className="text-center pb-8 text-slate-800">
										{answeredQuestions}/{totalQuestions}
									</p>
								</div>
							</div>
						) 
						: (
							// <div className="flex justify-center flex-col mt-20">
							// 	<Image src={pokeBall} alt="pokeball" width={100} height={100}/>
							// 	{/* <p>loading</p> */}
							// </div>

							<div >
								<LoadingPokeBall text="loading..."/>
							</div>
						)}
					</div>
					<div className="flex justify-center"></div>
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
					: answer === data.correctAnswer
					? "text-green-500 border-green-500 hover:bg-green-100"
					: " disabled:border-slate-500 disabled:text-slate-500"
				: "bg-transparent hover:bg-pokeRed hover:text-white=800 text-pokeRed hover:text-white border border-pokeRed hover:border-pokeRed"
		}
   
  `}
									>
										{answer}
									</button>
									{userChoice && (
										<>
											{isCorrect && answer === data.correctAnswer && (
												<p className="ps-48 text-green-500 font-bold pt-3 text-lg ps-2 absolute">
													&#x2713;
												</p>
											)}
											{!isCorrect && userChoice === answer && (
												<p className="ps-48 text-red-500 font-bold pt-3  ps-2 absolute">
													&#9587;
												</p>
											)}
										</>
									)}
								</div>
							))}
							
								<button
									onClick={() => {
										handleNext();
									}}
									className={`text-white  w-60 py-2 px-4 text-center font-semibold rounded mb-2 ${userChoice? "bg-pokeRed":"bg-transparent"}
							`}
							disabled={!userChoice}
								>
									
									Next
								</button>
							
						</div>
					</div>
				</>
			) : (
				<>
									<div className="flex justify-center mt-8">

					<div className="flex flex-col justify-center space-y-1 items-center">
					<p className="text-xl text-center"> Your Score is {((score / totalQuestions) * 100).toFixed(0)}%</p>
					{endGamePicture &&
						<Image
										src={endGamePicture}
										alt={`organguru`}
										width={400}
										height={400}
										priority
										className="pb-5"
									/>}
						<Link href={"/QuizOptions"}>
							<button
							
								className="text-center text-white bg-pokeRed w-60 py-2  text-center font-semibold rounded disabled:border
							"
							>
								{" "}
								Play Again?
							</button>
						</Link>
					</div>
					</div>
				</>
			)}
		</>
	);
}
