import React from 'react';

type ChoicesProps = {
  data: {
    answers: string[];
    correctAnswer: string;
  };
  handleClick: (answer: string) => void;
  disableButton: boolean;
  userChoice: string;
  isCorrect: boolean | null;

  handleNext:()=> void
};

const Choices: React.FC<ChoicesProps> = ({
  data,
  handleClick,
  disableButton,
  userChoice,
  isCorrect,
  handleNext
}) => {
  return (
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
								className={`text-white  w-60 py-2 px-4 text-center font-semibold rounded mb-2 ${
									userChoice ? "bg-pokeRed" : "bg-transparent"
								}
							`}
								disabled={!userChoice}
							>
								Next
							</button>
						</div>
					</div>
			
  );
};

export default Choices;
