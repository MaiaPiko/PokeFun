import React from "react";
import Link from "next/link";

export default function QuizOptions() {
	return (
		<div className="flex justify-center">

            <Link href={'/QuizMultipleChoice'}>
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
