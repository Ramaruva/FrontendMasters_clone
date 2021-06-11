import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FetchCoursedata, PreviewCoursedata } from "../../redux/Courses/action";
import { LoaderSpinner } from "./Loader";

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
} from "./AllCoursesStyles";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

export const AllCourses = ({ title }) => {
	console.log(title);
	const dispatch = useDispatch();
	const { coursedata, isLoading, isError, isSuccess } = useSelector(
		(state) => state.course
	);
	// console.log(coursedata);

	//fetching the data from server ....dispatching action here...

	useEffect(() => {
		if (title.length === 0) {
			dispatch(FetchCoursedata());
		}
	}, [dispatch]);

	const handlePreview = (id) => {
		dispatch(PreviewCoursedata(id));
	};

	// const handleAuthordata = (authorname) => {
	// 	dispatch(FilterAuthordata(authorname));
	// };

	return isLoading ? (
		<LoaderSpinner />
	) : isError ? (
		<h2 style={{ color: "rgb(192, 45, 40)", textAlign: "center" }}>
			404 Something went wroung
		</h2>
	) : (
		<div>
			<Allcoursebox>
				{coursedata.map((item) => {
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
												<AuthorName>
													<Link
														className="authname"
														to={`/courses/${item.author_name}`}
													>
														{item.author_name}
													</Link>
												</AuthorName>
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
												<PreviewButton
													onClick={() => {
														handlePreview(item.id);
													}}
												>
													Watch Free Preview
												</PreviewButton>
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
	);
};
