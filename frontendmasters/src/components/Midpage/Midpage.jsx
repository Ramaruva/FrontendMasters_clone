import React from "react";
import { Link } from "react-router-dom";
import "./Midpage.css";

function Midpage() {
	return (
		<div>
			<div className="Middiv">
				<div className="dots">
					<div class="onmiddiv">
						<h1>
							Join Now and Learn Straight from the Experts Who Shape the Modern
							Web
						</h1>

						<div class="MidButton">
							<Link className="linkss" to="">
								Join Now
							</Link>{" "}
						</div>
					</div>
				</div>
			</div>
			<div className="bootcamp">
				<img
					src="https://static.frontendmasters.com/assets/fm/med/bootcamp/bc-logo-ad.png"
					alt=""
				/>
				<p>
					Looking to take your first steps in Web Development? Try the free
					Frontend Masters Bootcamp!
				</p>
				<Link className="linksss" to="">
					{" "}
					More info{" "}
				</Link>
			</div>
			<div></div>
		</div>
	);
}

export default Midpage;
