import React from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";
function Videoplayer({ video }) {
	return (
		<div className={styles.videoplayer}>
			<ReactPlayer width="100%" height="100%" url={video} />
		</div>
	);
}
export default Videoplayer;
