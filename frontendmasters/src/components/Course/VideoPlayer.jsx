import React from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";
function Videoplayer({ video }) {
	// console.log(video);
	// console.log(onProgress());
	// console.log(ReactPlayer)
	return (
		<div className={styles.videoplayer}>
			<ReactPlayer width="100%" height="100%" url={video} />
		</div>
	);
}
export default Videoplayer;
