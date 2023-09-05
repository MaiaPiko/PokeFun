"use client";

import React, { useState } from "react";
import Link from "next/link";
export default function QuizOptions() {
	const [totalQuestions, setTotalQuestions] = useState(20);
	const [tooMany, setTooMany] = useState(false);
	const [tooLittle, setTooLittle] = useState(false);
	const [gameDifficulty, setGameDifficulty] = useState("normal");

	const handleDifficulty = 
	(event: React.ChangeEvent<HTMLInputElement>) => {
		const userInput = event.target.value;
		setGameDifficulty(userInput)
	};

	const handleTotalQuestionsChange2 = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const userInput = parseInt(event.target.value);
		if (userInput >= 1 && userInput <= 1010) {
			setTotalQuestions(userInput);
		} else if (userInput < 1) {
			setTotalQuestions(1);
			setTooLittle(true);
		} else if (userInput > 1010) {
			setTotalQuestions(1010);
			setTooMany(true);
		}
	};

	const handleTotalQuestionsChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const userInput = parseInt(event.target.value);
		setTotalQuestions(userInput);
	};

	return (
		<div className="flex flex-col items-center justify-center space-y-4 h-80" style={{height:"50vh"}}>
			<label className="font-semibold text-lg">Number of Questions:</label>

			<div>
				<input
					id="range"
					type="range"
					name="Questions"
					min="1"
					max="1010"
					value={totalQuestions}
					onChange={handleTotalQuestionsChange}
					className="cursor-pointer accent-pokeRed py-25"
				/>
			</div>

			<input
				type="number"
				min="1"
				max="1010"
				id="type-number"
				name="q"
				value={totalQuestions}
				placeholder={totalQuestions.toString()}
				onChange={handleTotalQuestionsChange2}
				className={`focus:border focus:border-pokeRed focus:rounded focus:border-2 text-center placeholder-pokeRed text-pokeRed caret-pokeRed `}
			/>
			{tooLittle && <p>A quiz must have at least one Question!</p>}

			{tooMany && <p>Maximum number must be 1010</p>}


			<fieldset>
			<legend className="font-semibold text-lg">Difficulty:</legend>

				<div>
					<input
						type="radio"
						id="easy"
						value="easy"
						className="accent-pokeRed"
						onChange={handleDifficulty}
						name="difficulty"
						checked={gameDifficulty === "easy" ? true : false}
					

					/>
					<label> easy</label>
				</div>

				<div>
					<input
						type="radio"
						id="normal"
						value="normal"
						className="accent-pokeRed"
						onChange={handleDifficulty}
						name="difficulty"
						checked={gameDifficulty === "normal" ? true : false}

					/>
					<label> normal</label>
				</div>

				<div>
					<input
						type="radio"
						id="hard"
						value="hard"
						className="accent-pokeRed"
						onChange={handleDifficulty}
						name="difficulty"
						checked={gameDifficulty === "hard" ? true : false}

					/>
					<label> hard</label>
				</div>


		
			</fieldset>

			<Link href={`/QuizMultipleChoice/${totalQuestions}/${gameDifficulty}`}>
				<button
					className="text-white bg-pokeRed w-60 py-2 px-4 text-center font-semibold rounded disabled:border
							"
				>
					Start Quiz
				</button>
			</Link>
		</div>
	);
}
