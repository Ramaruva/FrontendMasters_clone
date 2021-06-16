import React, { useState } from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import { AnimatedProgressProvider } from "./AnimatedProgressProvider";
import { useParams } from "react-router-dom";

function Pprogress({pro}) {
	const [progressData, setProgressData] = useState(0);

	// if (title === "Expert") {
	// 	setProgressData(5);
	// }

	
	return (
		<div>
			<Example label="Fully controlled text animation using react-move">
				<AnimatedProgressProvider
					valueStart={100}
					valueEnd={pro}
					duration={3}
					reapet
					easingFunction={easeQuadInOut}
				>
					{(value) => {
						const roundedValue = Math.round(value);
						return (
							<CircularProgressbar
								value={value}
								text={`${roundedValue}%`}
								styles={buildStyles({
									pathTransition: "none",
									pathColor: "rgb(213,74,38)",
									pathTransitionDuration: "15",
									trailColor: "rgb(112,112,112)",
									textColor: "white",
									textSize: "30px",
								})}
							/>
						);
					}}
				</AnimatedProgressProvider>
			</Example>
		</div>
	);
}

function Example(props) {
	return (
		<div style={{ marginTop: -280 }}>
			<div style={{ marginTop: 30, display: "flex" }}>
				<div style={{ width: "100%" }}>{props.children}</div>
			</div>
		</div>
	);
}

export default Pprogress;
