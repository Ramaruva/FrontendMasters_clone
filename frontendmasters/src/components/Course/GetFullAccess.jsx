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
import Footer from "../Footer/Footer";
import {
	Blackwrraper,
	Gridvideobox,
	Videobox,
	Descriptionbox,
	Aboutcontent,
	Publish,
	Unlimitedbutton,
} from "./GetFullAccessStyels";
import { useHistory } from "react-router-dom";

export const GetFullAccess = () => {
	const [previewData, setPreviewData] = useState("");
	// console.log(previewdata);

	// const [isLoading, setIsLoading] = useState(false);
	// const [isError, setIsError] = useState(false);

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

	const PreviewCoursedata = () => {
		//using axios for making network request from server endpoint
		//we are using our own mockserver as database
		//https://ramserver54.herokuapp.com/
		return axios
			.get(`https://ramserver54.herokuapp.com/profeesional/${id}`)
			.then((res) => {
				setPreviewData(res.data);
			    console.log(res.data);
			})
			.catch((error) => {
				//console.log(error);
				alert(error);
			});
	};

	const history = useHistory();
	const GetfullAccess = () => {
		history.push("/pricing");
	};

	useEffect(() => {
		PreviewCoursedata();
	}, []);
  console.log(previewData.level);
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
							<Videoplayer video={video_link} level={previewData.level}/>
						</Videobox>
						<Descriptionbox>
							<Aboutcontent>{description}</Aboutcontent>
							<Aboutcontent>{preview}</Aboutcontent>
							<Publish>{publish}</Publish>
							<Unlimitedbutton onClick={GetfullAccess}>
								Get Unlimited Access Now
							</Unlimitedbutton>
						</Descriptionbox>
					</Gridvideobox>
				</Blackwrraper>
			</div>
			<Footer />
		</>
	);
};
