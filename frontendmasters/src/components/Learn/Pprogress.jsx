import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import { AnimatedProgressProvider } from "./AnimatedProgressProvider";

function Pprogress() {
	return (
		<div>
			<Example label="Fully controlled text animation using react-move">
				<AnimatedProgressProvider
					valueStart={100}
					valueEnd={0}
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
								/* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
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
