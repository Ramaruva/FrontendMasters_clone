import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import styles from "./VideoPlayer.module.css";
function Videoplayer({ video }) {
	const [counter, setCounter] = useState(false);
	const [duration, setDuration] = useState("");

	const logSuccess = useSelector((state) => state.author.logSuccess);

	const handleCounter = () => {
		setTimeout(() => {
			logSuccess ? setCounter(false) : setCounter(true);
		}, 15000);
	};

	const history = useHistory();

	useEffect(() => {
		if (counter) {
			history.push("/login");
		}
	}, [counter]);

	const handleDuration = (duration) => {
		setDuration(duration);
	};
	return (
		<div className={styles.videoplayer}>
			<ReactPlayer
				controls
				onReady={() => {
					console.log("Video is ready");
				}}
				onPause={() => {
					console.log("Video is paused");
				}}
				onEnded={() => {
					console.log("Video was  ended");
				}}
				onError={() => {
					alert("Something went wroung ,Video is not available");
				}}
				onStart={handleCounter}
				onDuration={handleDuration}
				width="100%"
				height="100%"
				url={video}
			/>
		</div>
	);
}
export default Videoplayer;
