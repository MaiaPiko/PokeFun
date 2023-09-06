"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import getRandomId from "@/lib/getRandomId";
import shuffle from "@/lib/shuffle";
import fetchPokemonArtwork from "@/lib/fetchPokemonArtwork";
import fetchPokeInfo from "@/lib/fetchPokeInfo";
import pokeBall from "../../../../../public/pokeball.svg";
import { Suspense } from "react";
import LoadingPokeBall from "../../../components/LoadingPokeBall";
import fetchPokemonArtworkQuiz from "@/lib/fetchPokeArtQuiz";
import ProgressBar from "../../components/ProgressBar";
import { GlobalLayoutRouterContext } from "next/dist/shared/lib/app-router-context";
import GlowCorrect from "../../components/Glow/GlowCorrect";
import GlowIncorrect from "../../components/Glow/GlowIncorrect";
import Choices from "../../components/Choices";
import getUniqueRandomId from "@/lib/getUniqueRandomID";
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
	const [nextQuestion, setNextQuestion] = useState<boolean>(false);
	const [data, setData] = useState<PokemonQuizData>({
		answers: [],
		correctAnswer: "",
		randomPicture: "",
	});
	const [usedNumbers, setUsedNumbers] = useState<string[]>([]);

	const [endGamePicture, setEndGamePicture] = useState("");

	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [gameFinish, setGameFinish] = useState<boolean>(false);
	const [randomRotate, setRandomRotate] = useState("rotate-0")

	const fetchGameEndPictures = async (goodScore: boolean) => {
		const sadPoke = "oranguru";
		const happyPoke = "pikachu";

		let endPicture;
		if (goodScore == true) {
			endPicture = await fetchPokemonArtwork(happyPoke);
			setEndGamePicture(endPicture);
		} else if (goodScore == false) {
			endPicture = await fetchPokemonArtwork(sadPoke);
			setEndGamePicture(endPicture);
		}
	};

	const fetchData = async () => {
		const randomId = getUniqueRandomId(usedNumbers);
		setUsedNumbers([...usedNumbers, randomId]);
		const randomPicture = await fetchPokemonArtwork(randomId);
		const correctAnswer = (await fetchPokeInfo(randomId)).name;
		console.log(correctAnswer)
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
		setNextQuestion(false);

		if(difficulty=="expert"){
			setRandomRotate(shuffle(["rotate-12", "rotate-45", "rotate-90", "rotate-180"])[1])
		}
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
		setNextQuestion(true)
		setAnsweredQuestions(answeredQuestions + 1);

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
			const userScore = (score / totalQuestions) * 100;
			if (userScore > 50) {
				setGoodScore(true);
			} else {
				setGoodScore(false);
			}
			fetchGameEndPictures(userScore > 50);
		}
	};

	const wrongAnswers = answeredQuestions - 1 - score;
	const incorrectAnswers = wrongAnswers < 0 ? 0 : wrongAnswers;
	
	return (
		<>
			{!gameFinish ? (
				<>
					{dataFetched && !nextQuestion? (
						<>
							<div className="flex justify-center mt-8">
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
										{userChoice && (
											<div>
												{isCorrect  ? <GlowCorrect /> : <GlowIncorrect />}
											</div>
										)}
										
										<Image
											src={data.randomPicture}
											alt={`random Image`}
											width={400}
											height={400}
											priority
											className={`pb-5 ${questionDifficulty=="hard" && !userChoice && !nextQuestion?'contrast-75 brightness-0':
											difficulty=="expert" && !userChoice && !nextQuestion? `blur-md contrast-75 brightness-0 ${randomRotate}`:
											""}`}
										/>

										<p className="text-center pb-8 text-slate-800">
											{answeredQuestions}/{totalQuestions}
										</p>
									</div>
								</div>
							</div>

							<Choices
								isCorrect={isCorrect}
								handleClick={handleClick}
								data={data}
								disableButton={disableButton}
								userChoice={userChoice}
								handleNext={handleNext}
							/>
						</>
					) : (
						<LoadingPokeBall text=" " />
					)}
				</>
			) : (
				<>
					<div className="flex justify-center mt-8">
						<div className="flex flex-col justify-center space-y-1 items-center">
							<p className="text-xl text-center">
								{" "}
								Your Score is {((score / totalQuestions) * 100).toFixed(0)}%
							</p>
							{endGamePicture && (
								<Image
									src={endGamePicture}
									alt={`organguru`}
									width={400}
									height={400}
									priority
									className="pb-5"
								/>
							)}
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
