import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export const LoaderSpinner = () => {
	return (
		<div>
			<div
				style={{
					width: "110px",
					height: "110px",
					margin: "auto",
					marginTop: "100px",
				}}
			>
				<Loader
					type="BallTriangle"
					color="rgb(221, 98, 94)"
					height={100}
					width={100}
				/>
			</div>
		</div>
	);
};
