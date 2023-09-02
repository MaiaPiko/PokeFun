import React from "react";
import LoadingPokeBall from "@/app/components/LoadingPokeBall";
export default function loading() {
	return (
		<>
			<div className="flex justify-center mt-5 ">
				<LoadingPokeBall text="loading..." />
			</div>
		</>
	);
}
