import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import { BootcampForm } from "./BootcampForm";
import {Footer} from "../Footer/Footer";
import "./BootCamp.css";

const Bootcampcont = styled.div`
	height: 550px;
	width: 99.9%;
	margin: auto;
	/* border: 1px solid white; */
	background-image: url("https://static.frontendmasters.com/assets/fm/js/header_BG.f12eb70699.jpg");
	@media screen and (max-width: 600px) {
		height: 800px;
	}
`;

const GridBox = styled.div`
	display: grid;
	grid-template-columns: 35% 53%;
	margin: auto;
	@media screen and (max-width: 900px) {
		grid-template-columns: 45% 52%;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 70%;
	}
`;
const Imagebox = styled.div`
	height: 300px;
	margin-top: 100px;
	margin-left: 150px;
	/* border: 1px solid wheat; */
`;
const Image = styled.img`
	height: 100%;
	width: 100%;
`;
const Imagebox2 = styled.div`
	height: 300px;
	margin-top: 100px;
	margin-left: 70px;

	/* border: 1px solid wheat; */
	@media screen and (max-width: 900px) {
		margin-left: 7px;
		height: 370px;
	}

	@media screen and (max-width: 600px) {
		width: 450px;
		margin: auto;
		height: 370px;
		margin-top: 10px;
		margin-left: 37px;
	}
`;
const Heading = styled.h1`
	font-family: Open Sans, sans-serif;
	display: block;
	font-size: 36px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	/* margin-left: 20px; */
	text-align: left;
`;

const Para = styled.p`
	color: rgb(230, 230, 230);
	font-size: 16px;
	font-family: Open Sans, sans-serif;
	line-height: 21px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;
const AccessButton = styled.button`
	font-size: 19px;
	font-family: Open Sans, sans-serif;
	width: 250px;
	height: 60px;
	/* margin-left: -250px; */
	border-radius: 40px;
	margin-top: 40px;
	background-color: rgb(192, 45, 40);
	color: rgb(230, 230, 230);
	border: 1px solid rgb(192, 45, 40);
	cursor: pointer;
	transition: linear 0.5s;
	@media screen and (max-width: 900px) {
		margin-left: 14px;
		margin-top: 5px;
	}
`;

const IconImage = styled.img`
	height: 60px;
	width: 60px;
	cursor: pointer;
	margin-top: 10px;
	margin-left: 20px;
	border-radius: 50%;
	@media screen and (max-width: 900px) {
		display: none;
	}
	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const TutorialBox = styled.div`
	display: grid;
	grid-template-columns: 40% 55%;
	/* border: 1px solid white; */
	@media screen and (max-width: 900px) {
		grid-template-columns: 70%;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: auto;
	}
`;
const Tutorials = styled.div`
	margin: 10px;
	height: 350px;
	margin-left: 70px;
	/* border: 1px solid white; */
`;

const Heading2 = styled.h1`
	font-family: Open Sans, sans-serif;
	display: block;
	font-size: 27px;
	margin-top: 30px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	/* margin-left: 20px; */
	text-align: left;
`;

const Para2 = styled.p`
	color: rgb(230, 230, 230);
	font-size: 16px;
	font-family: Open Sans, sans-serif;
	line-height: 24px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;

const Video = styled.div`
	width: 100%;
	height: 100%;
	/* border: 1px solid green; */
	@media screen and (max-width: 900px) {
		margin-top: -60px;
		/* height: 500px; */
		/* width: 100%; */
	}
`;
// const Break = styled.hr`
// 	width: 92%;
// 	margin: auto;
// 	margin-left: 50px;
// 	@media screen and (max-width: 900px) {
// 		/* height: 500px; */
// 		display: none;
// 		/* width: 100%; */
// 	}
// `;

const TutorialBox2 = styled.div`
	display: grid;
	grid-template-columns: 55% 40%;
	/* border: 1px solid white; */
	@media screen and (max-width: 900px) {
		grid-template-columns: 70%;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: auto;
	}
`;
const Tutorials2 = styled.div`
	margin: 10px;
	height: 350px;
	margin-left: 70px;
	/* border: 1px solid white; */
`;

const Heading3 = styled.h1`
	font-family: Open Sans, sans-serif;
	display: block;
	font-size: 27px;
	margin-top: 30px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	/* margin-left: 20px; */
	text-align: center;
`;

const Campbox = styled.div`
	width: 45%;
	height: 600px;
	margin: auto;
	/* border: 1px solid white; */
	@media screen and (max-width: 900px) {
		width: 65%;
		height: 650px;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		height: 700px;
	}
`;

// color: #dd625e;
const LinkBox = styled.div`
	height: 60px;
	width: 99%;
	margin: auto;
`;

const Anchor = styled.a`
	color: #dd625e;
	font-family: Open Sans, sans-serif;
	text-decoration: underline;
	font-size: 21px;
	float: left;
	text-size-adjust: 100%;
`;
const Anchor2 = styled.a`
	color: rgb(230, 230, 230);

	font-family: Open Sans, sans-serif;
	font-size: 21px;
	float: left;
	text-size-adjust: 100%;
`;
const Timing = styled.p`
	font-family: Open Sans, sans-serif;
	font-size: 16px;
	margin-top: 5px;
	float: right;
	text-size-adjust: 100%;
`;
// const Break2 = styled.hr`
// 	width: 47%;
// 	margin: auto;
// 	margin-left: 350px;
// 	@media screen and (max-width: 900px) {
// 		/* height: 500px; */
// 		display: none;
// 		/* width: 100%; */
// 	}
// `;

const Campbox2 = styled.div`
	width: 45%;
	height: 70px;
	margin: auto;
	/* border: 1px solid white; */
	@media screen and (max-width: 900px) {
		width: 65%;
		height: 70px;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		height: 70px;
	}
`;
const TutorialBox3 = styled.div`
	display: grid;
	grid-template-columns: 40% 50%;
	/* border: 1px solid white; */
	@media screen and (max-width: 900px) {
		grid-template-columns: 90%;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: auto;
	}
`;
const Tutorials3 = styled.div`
	margin: 10px;
	height: 280px;
	margin-left: 70px;
	/* border: 1px solid white; */
	margin-top: 150px;
`;
const Tutorials4 = styled.div`
	margin: 10px;
	height: 650px;
	margin-left: 70px;
	/* border: 1px solid white; */
`;

const Heading4 = styled.h1`
	font-family: Open Sans, sans-serif;
	display: block;
	font-size: 36px;
	margin-top: 10px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	/* margin-left: 20px; */
	text-align: left;
`;
export const BootCamp = () => {
	const symbol = true;
	const links = [
		{
			id: 1,
			links: "https://frontendmasters.com/bootcamp/introduction-html/",
			name: "Introduction to HTML",
			time: "1 hours, 47 minutes",
		},
		{
			id: 2,
			links: "https://frontendmasters.com/bootcamp/introduction-css/",
			name: "Introduction to CSS",
			time: "4 hours, 11 minutes",
		},
		{
			id: 3,
			links: "https://frontendmasters.com/bootcamp/html-forms/",
			name: "HTML Forms",
			time: "2 hours, 4 minutes",
		},
		{
			id: 4,
			links: "https://frontendmasters.com/bootcamp/embeds-github-pages/",
			name: "Website Embeds & GitHub Pages",
			time: "0 hours, 54 minutes",
		},
		{
			id: 5,
			links: "https://frontendmasters.com/bootcamp/calculator-html-css/",
			name: "Calculator Project: HTML & CSS",
			time: "0 hours, 48 minutes",
		},
		{
			id: 6,
			links: "https://frontendmasters.com/bootcamp/introduction-javascript/",
			name: "Introduction to JavaScript",
			time: "5 hours, 23 minutes",
		},
		{
			id: 7,
			links: "https://frontendmasters.com/bootcamp/calculator-javascript/",
			name: "Calculator Project: JavaScript",
			time: "1 hours, 13 minutes",
		},
		{
			id: 8,
			links: "https://frontendmasters.com/bootcamp/javascript-in-websites/",
			name: "Using JavaScript in Websites",
			time: "3 hours, 2 minutes",
		},
		{
			id: 9,
			links: "https://frontendmasters.com/bootcamp/web-game-project/",
			name: "Build a Game Project: Feed-A-Star-Mole",
			time: "2 hours, 14 minutes",
		},
	];

	return (
		<>
			<div>
				<Bootcampcont>
					<GridBox>
						<Imagebox>
							<Image
								src="https://frontendmasters.com/static-assets/bootcamp/BootcampLogo.png"
								alt="bootcamp.png"
							></Image>
						</Imagebox>
						<Imagebox2>
							<Heading>
								Join the Frontend Masters Web Development Bootcamp...Free!
							</Heading>
							<br />

							<Para>
								Get access to everything you need to get started developing
								websites. Learn HTML, CSS and JavaScript through project-based
								learning.
							</Para>
							<div className="iconbtn">
								<AccessButton>
									{symbol ? "Join the Bootcamp >" : null}
								</AccessButton>
								<a
									href="https://twitter.com/intent/tweet?url=https://frontendmasters.com/bootcamp/&text=Get%20started%20learning%20web%20development%20for%20free%20in%20this%20two-week%20online%20curriculum%20by%20@FrontendMasters!"
									className="anchortag"
								>
									<IconImage
										className="imagecontrol"
										src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/twitter-512.png"
										alt="blog.png"
									/>
								</a>
							</div>
						</Imagebox2>
					</GridBox>
				</Bootcampcont>
				<br />
				<br />
				<TutorialBox>
					<Tutorials>
						<Heading2>What is the Bootcamp, and how does it work?</Heading2>
						<br />

						<Para2>
							The Frontend Masters Bootcamp is a complete crash course, and
							everything you need to get up and running with HTML, CSS and
							JavaScript. By completing the coursework contained in the
							Bootcamp, along with practice, you will be well on your way into
							the world of web development!
						</Para2>
					</Tutorials>
					<Tutorials>
						<Video>
							<ReactPlayer
								width="100%"
								height="100%"
								url="https://youtu.be/3lZ4EwV_dlI"
							/>
						</Video>
					</Tutorials>
				</TutorialBox>
				<br />
				<hr className="break" size="1"></hr>
				<br />
				<TutorialBox2>
					<Tutorials2>
						<Video>
							<Image
								src="https://frontendmasters.com/static-assets/welcome/welcomePitch1.jpg"
								alt="assets.png"
							></Image>
						</Video>
					</Tutorials2>
					<Tutorials2>
						<Heading2>What is the Bootcamp, and how does it work?</Heading2>
						<br />

						<Para2>
							The Frontend Masters Bootcamp is a complete crash course, and
							everything you need to get up and running with HTML, CSS and
							JavaScript. By completing the coursework contained in the
							Bootcamp, along with practice, you will be well on your way into
							the world of web development!
						</Para2>
					</Tutorials2>
				</TutorialBox2>
				<br />
				<hr className="break" size="1"></hr>

				<br />
				<Heading3>Bootcamp Curriculum</Heading3>
				<br />
				<Campbox>
					{links.map((item) => {
						return (
							<LinkBox key={item.id}>
								<Anchor href={item.links}>{item.name}</Anchor>
								<Timing>{item.time}</Timing>
							</LinkBox>
						);
					})}
				</Campbox>
				<hr className="break2" size="1"></hr>

				<br />
				<Campbox2>
					<LinkBox>
						<Anchor2>Total Hours to Learn HTML, CSS & JS</Anchor2>
						<Timing>21 hours, 6 minutes</Timing>
					</LinkBox>
				</Campbox2>
				<br />
				<TutorialBox3>
					<Tutorials3>
						<Heading4>Ready to join the Bootcamp?</Heading4>
						<br />
						<Para>
							Create a free account, and get access to everything you need to
							learn HTML, CSS and JavaScript!
							<br />
							<br />
							If you already have a Frontend Masters' account, please{" "}
							<Link style={{ color: "#dd625e" }} to="/login">
								login
							</Link>{" "}
							and return to this page. Otherwise sign-up for a free account
							now..
						</Para>
					</Tutorials3>
					<Tutorials4>
						<BootcampForm />
					</Tutorials4>
				</TutorialBox3>
				<br />
				<br />
				<Footer />
			</div>
		</>
	);
};
