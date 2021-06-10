import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
	Subtitles,
	Time,
	Timebox,
	Pro,
	CompanyName,
	AuthorName,
	ProfileImage,
	Profilebox,
	Title,
} from "./AllCoursesStyles";

import {
	Previewwraper,
	Imagewraper,
	Gridpreview,
	CourseImage,
	AboutCourseauth,
	Profilecontent2,
} from "./GetFullAccessStyels";
import Videoplayer from "./VideoPlayer";

const Blackwrraper = styled.div`
	background-color: black;
	/* border: 1px solid white; */
	width: 100%;
	height: 450px;
	overflow: hidden;
	margin: auto;
	margin-top: 10px;

	@media screen and (max-width: 900px) {
		height: 500px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: fit-content;
		width: 100%;
	}
`;
const Gridvideobox = styled.div`
	display: grid;
	grid-template-columns: 47% 47%;
	margin: 10px 10px;
	margin-left: 110px;
	@media screen and (max-width: 900px) {
		grid-template-columns: 47% 47%;
	}
	@media screen and (max-width: 610px) {
		grid-template-columns: auto;
	}
`;
const Videobox = styled.div`
	height: 370px;
	@media screen and (max-width: 900px) {
		height: 500px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 650px;
		width: 100%;
	}
	/* border: 1px solid white; */
`;

const Descriptionbox = styled.div`
	height: 370px;
	/* border: 1px solid white; */
	margin-left: 20px;
	@media screen and (max-width: 900px) {
		height: 550px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 650px;
		width: 100%;
	}
`;

const Aboutcontent = styled.p`
	color: rgb(230, 230, 230);
	font-size: 16px;
	font-family: Open Sans, sans-serif;
	line-height: 30px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;
const Publish = styled.p`
	color: rgb(116, 113, 113);
	font-size: 16px;
	font-family: Open Sans, sans-serif;
	line-height: 30px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;
const Unlimitedbutton = styled.button`
	font-size: 20px;
	width: 450px;
	height: 60px;
	border-radius: 40px;
	background-color: rgb(192, 45, 40);
	color: rgb(230, 230, 230);
	border: 1px solid rgb(192, 45, 40);
	cursor: pointer;
	transition: linear 0.5s;

	&:hover {
		filter: brightness(150%);
	}
	@media screen and (max-width: 900px) {
		height: 40px;
		width: 310px;
		font-size: 17px;
	}
	@media screen and (max-width: 610px) {
		height: 30px;
		width: 220px;
		font-size: 14px;
	}
`;

export const GetFullAccess = () => {
	const { previewdata, isLoading, isError } = useSelector(
		(state) => state.course
	);
	// console.log(previewdata);

//destructuring the data from previewdata.....
	const {
		author_name,
		background_image,
		profile_pic,
		title,
		company_name,
		time,
		sub_titles,
		description,
		video_link,
		preview,
		publish,
	} = previewdata;


	return (
		<div>
			<Previewwraper>
				<Gridpreview>
					<Imagewraper>
						<CourseImage src={background_image}></CourseImage>
					</Imagewraper>
					<AboutCourseauth>
						<Title>{title}</Title>
						<Pro>
							<Profilebox>
								<ProfileImage src={profile_pic}></ProfileImage>
							</Profilebox>
							<Profilecontent2>
								<AuthorName>{author_name}</AuthorName>
								<CompanyName>{company_name}</CompanyName>
							</Profilecontent2>
						</Pro>
						<Timebox>
							<Time>{time}</Time>
							<Subtitles>{sub_titles ? "CC" : null}</Subtitles>
						</Timebox>
					</AboutCourseauth>
				</Gridpreview>
			</Previewwraper>
			<br />
			<br />
			<Blackwrraper>
				<Gridvideobox>
					<Videobox>
						<Videoplayer video={video_link} />
					</Videobox>
					<Descriptionbox>
						<Aboutcontent>{description}</Aboutcontent>
						<Aboutcontent>{preview}</Aboutcontent>
						<Publish>{publish}</Publish>
						<Unlimitedbutton>Get Unlimited Access Now</Unlimitedbutton>
					</Descriptionbox>
				</Gridvideobox>
			</Blackwrraper>
		</div>
	);
};
