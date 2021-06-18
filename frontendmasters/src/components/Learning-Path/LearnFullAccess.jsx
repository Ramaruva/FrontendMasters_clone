import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
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
} from "../Course/AllCoursesStyles";

import Videoplayer from "../Course/VideoPlayer";
import Footer from "../Footer/Footer";
import {
	Blackwrraper,
	Gridvideobox,
	Videobox,
	Descriptionbox,
	Aboutcontent,
	Publish,
	Unlimitedbutton,
	Previewwraper,
	Imagewraper,
	Gridpreview,
	CourseImage,
	AboutCourseauth,
	Profilecontent2,
} from "../Course/GetFullAccessStyels";

export const LearnFullAccess = () => {
	const [previewData, setPreviewData] = useState("");
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
		level
	} = previewData;

	const { id } = useParams();
	// console.log(id);
	const PreviewLearndata = () => {
		//using axios for making network request from server endpoint
		//we are using our own mockserver as database
		return axios
			.get(`https://ramserver54.herokuapp.com/profeesional/${id}`)
			.then((res) => {
				setPreviewData(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		PreviewLearndata();
	}, []);

	return (
		<>
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
							<Videoplayer video={video_link} level={level}/>
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
			<Footer />
		</>
	);
};
