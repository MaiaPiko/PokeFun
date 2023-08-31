import React from "react";

// Progressbar.tsx

interface ProgressBarProps {
	answeredQuestions: number;
	totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	answeredQuestions,
	totalQuestions,
}) => {
	const progress = (answeredQuestions / totalQuestions) * 100;

	return (
		<div className="flex flex-row">
			{/* <p className="pe-1">{answeredQuestions}</p> */}

			<div className="w-1/3 bg-gray-300 rounded-lg block h-5">
				<div
					className="h-5 bg-pokeRed rounded-lg block"
					style={{ width: `${progress}%` }}
				>{answeredQuestions}/{totalQuestions}</div>
			</div>
			{/* <p className="ps-1">{totalQuestions}</p> */}
		</div>
	);
};

export default ProgressBar;
