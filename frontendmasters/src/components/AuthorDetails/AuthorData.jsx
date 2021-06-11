import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { LoaderSpinner } from "../Course/Loader";
import "./AuthorData.css";
import { useSelector } from "react-redux";

//importing styles from "AllCoursesStyles-page"
import {
	Allcoursebox,
	Conatiner,
	Minicontainer,
	Content,
	Title,
	Pro,
	Profilebox,
	ProfileImage,
	Profilecontent,
	AuthorName,
	CompanyName,
	AboutAuthor,
	Aboutcontent,
	Timebox,
	Time,
	Subtitles,
	Buttonbox,
	PreviewButton,
	AccessButton,
	Heading,
} from "../Course/AllCoursesStyles";
import Footer from "../Footer/Footer";
const Profilebox1 = styled.div`
	width: 150px;
	cursor: pointer;
	height: fit-content;
	/* border: 1px solid rgba(0, 0, 0, 0.8); */
	border-radius: 50%;
	float: left;
`;
const ProfileImage1 = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
const Profilecontent1 = styled.div`
	width: 63%;
	height: 100px;
	/* border: 1px solid #222; */
	/* border: 1px solid rgba(0, 0, 0, 0.8); */
	margin-left: 170px;
	margin-top: 20px;
`;
const AuthorName1 = styled.h2`
	cursor: pointer;
	color: rgb(192, 45, 40);
	font-size: 31px;
	font-family: Open Sans, sans-serif;
	margin-top: 10px;
	text-decoration-color: rgb(192, 45, 40);
	letter-spacing: normal;
	font-weight: 400;
	text-align: left;
	text-size-adjust: 100%;
`;
const CompanyName1 = styled.p`
	cursor: pointer;
	margin-top: -5px;
	color: rgb(138, 138, 138);
	font-family: Open Sans, sans-serif;
	font-size: 27px;
	letter-spacing: normal;
	font-weight: 400;
	text-align: left;
	text-size-adjust: 100%;
`;
const Pro1 = styled.div`
	width: 95%;
	height: 160px;
	border: 1px solid rgba(0, 0, 0, 0.8);
	margin: 10px auto;
`;

const Aboutcontent1 = styled.p`
	color: rgb(230, 230, 230);
	font-size: 16px;
	font-family: Open Sans, sans-serif;
	line-height: 24px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;
const Backgroundimg1 = styled.div`
	height: 800px;
	width: 99%;
	border: 1px solid #222;
	background-image: url(${(props) => props.bgimage});
	background-repeat: no-repeat;
	clear: both;
`;

const Aboutauthor1 = styled.div`
	height: 407px;
	width: 607px;
	color: white;
	margin-left: 65px;
	/* border: 1px solid white; */
	margin-top: 130px;
	background-color: rgba(0, 0, 0, 0.8);
`;
const AboutAuthor2 = styled.div`
	width: 576px;
	height: 120px;
	/* border: 1px solid white; */
	margin-top: 60px;
	margin-left: -172px;
`;

const Social1 = styled.div`
	width: 39%;
	height: 70px;
	/* border: 1px solid white; */
	margin: 10px;

	margin-top: 150px;
`;

//#222
export const AuthorData = () => {
	const [authordata, setAuthorData] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const { author } = useParams();

	console.log(author);

	const coursedata = useSelector((state) => state.course.coursedata);

	const FilterAuthordata = () => {
		//using axios for making network request from server endpoint
		//we are using our own mockserver as database
		return axios
			.get(`https://ramserver54.herokuapp.com/authors/${author}`)
			.then((res) => {
				setAuthorData(res.data);
				setIsLoading(true);
				console.log(res.data);
			})
			.catch((error) => {
				setIsError(true);
				alert(error);
			});
	};

	useEffect(() => {
		FilterAuthordata();
	}, []);

	const {
		twitter,
		github,
		Linkedin,
		profile_pic,
		blog,
		company_name,
		author_name,
		big_profile,
		about_author,
	} = authordata;

	console.log(authordata);

	return (
		<>
			<div>
				<Backgroundimg1 bgimage={big_profile}>
					<Aboutauthor1>
						<Pro1>
							<Profilebox1>
								<ProfileImage1 src={profile_pic}></ProfileImage1>
							</Profilebox1>
							<Profilecontent1>
								<AuthorName1>{author}</AuthorName1>
								<CompanyName1>{company_name}</CompanyName1>
								<AboutAuthor2>
									<Aboutcontent1>{about_author}</Aboutcontent1>
								</AboutAuthor2>
							</Profilecontent1>
						</Pro1>
						<Social1>
							<a href={blog} target="_blank" className="anchortag">
								<img
									className="imagecontrol"
									src="https://icon-library.com/images/circle-blogger-512.png"
									alt="blog.png"
								/>
							</a>
							<a href={github} target="_blank" className="anchortag">
								<img
									className="imagecontrol"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSydz6A-sYVmfwH5ZYXmGg2-8C4Noq1tYpy4lK0IA2f00cUXXnyZQwcH-nZB6IxcMncY&usqp=CAU"
									alt="blog.png"
								/>
							</a>
							<a href={Linkedin} target="_blank" className="anchortag">
								<img
									className="imagecontrol"
									src="https://www.pngarea.com/pngs/102/1113783_linkedin-icon-png-twitter-facebook-linkedin-png-download.png"
									alt="blog.png"
								/>
							</a>

							<a href={twitter} target="_blank" className="anchortag">
								<img
									className="imagecontrol"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEoqArAKCFNxiG1mCGClEVTBMpV590XdDYP5dSUXBJSha4tWwpjcXKtF7mOANbCwg_yI&usqp=CAU"
									alt="blog.png"
								/>
							</a>
						</Social1>
					</Aboutauthor1>
				</Backgroundimg1>
				<br />
				<br />
				<Heading>{author} 's Courses</Heading>
				<br />
				<hr size="1" width="1240" align="center" />
				<br />
				<Allcoursebox>
					{coursedata
						.filter((item) => item.author_name === author)
						.map((item) => {
							return (
								<div key={item.id}>
									<Conatiner bgimage={item.background_image}>
										<Minicontainer>
											<Content>
												<Title>{item.title}</Title>
												<Pro>
													<Profilebox>
														<ProfileImage src={item.profile_pic}></ProfileImage>
													</Profilebox>
													<Profilecontent>
														<AuthorName>{item.author_name}</AuthorName>
														<CompanyName>{item.company_name}</CompanyName>
													</Profilecontent>
												</Pro>
												<AboutAuthor>
													<Aboutcontent>{item.about}</Aboutcontent>
													<Timebox>
														<Time>{item.time}</Time>
														<Subtitles>
															{item.sub_titles ? "CC" : "No"}
														</Subtitles>
													</Timebox>
													<Buttonbox>
														<PreviewButton>Watch Free Preview</PreviewButton>
														<AccessButton>Get Full Access</AccessButton>
													</Buttonbox>
												</AboutAuthor>
											</Content>
										</Minicontainer>
									</Conatiner>
								</div>
							);
						})}
				</Allcoursebox>
			</div>
			<Footer />
		</>
	);
};
