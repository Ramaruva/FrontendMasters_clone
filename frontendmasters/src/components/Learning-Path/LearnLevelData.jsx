import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FilterLearndata } from "../../redux/LearnPaths/learnaction";
import { PenIcon } from "./PenIcon";
import { LoaderSpinner } from "../Course/Loader";
import { Link } from "react-router-dom";
import {
	Title,
	Profilebox,
	ProfileImage,
	Profilecontent,
	AuthorName,
	CompanyName,
	AboutAuthor,
	Pro,
	Aboutcontent,
	Timebox,
	Time,
	Subtitles,
} from "../Course/AllCoursesStyles";

import {
	PopularContainer,
	AccessButton,
	PreviewButton,
	Buttonbox,
	ContentBoxpop,
	CourseImage,
	Para5,
	Heading5,
} from "../Popular/PopularStyles";
import Footer from "../Footer/Footer";
import "../Navbar/Navbar.css";

export const LearnLevelData = () => {
	const { level } = useParams();
	// console.log(level);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FilterLearndata(level));
	}, [dispatch]);

	const { learndata, isLoading, isError } = useSelector((state) => state.learn);

	// console.log(learndata)

	const history = useHistory();
	const handleAccess = () => {
		history.push("/pricing");
	};

	return isLoading ? (
		<LoaderSpinner />
	) : isError ? (
		<h2 style={{ color: "rgb(192, 45, 40)", textAlign: "center" }}>
			404 Something went wroung
		</h2>
	) : (
		<div>
			<PenIcon />
			<Heading5>Core Coursework</Heading5>
			<Para5>(take these in order)</Para5>
			<hr size="1" className="break" />
			<div>
				{learndata.map((item) => {
					return (
						<div key={item.id}>
							<PopularContainer>
								<CourseImage bgimage={item.background_image}></CourseImage>
								<ContentBoxpop>
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
											<Subtitles>{item.sub_titles ? "CC" : "No"}</Subtitles>
										</Timebox>
										<Buttonbox>
											<PreviewButton>
												<Link
													to={`/learn/${level}/${item.id}`}
													className="authname2"
												>
													Watch Free Preview
												</Link>
											</PreviewButton>
											<AccessButton onClick={handleAccess}>
												Get Full Access
											</AccessButton>
										</Buttonbox>
									</AboutAuthor>
								</ContentBoxpop>
							</PopularContainer>
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};
