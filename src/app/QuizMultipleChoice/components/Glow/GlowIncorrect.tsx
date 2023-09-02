import React from "react";

export default function GlowIncorrect() {
	return (
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
	);
}
