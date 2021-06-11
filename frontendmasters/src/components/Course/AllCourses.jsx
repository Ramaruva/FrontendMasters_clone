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
import { Link, useHistory } from "react-router-dom";
import "../Navbar/Navbar.css";

import { SearchCourses } from "../Popular/SearchCourses";

// import { FilterAuthordata } from "../../redux/Author/authoraction";

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
	}, [dispatch, title]);
	if (title.length > 0) {
		console.log(coursedata);
		const a = coursedata
			.filter((item) => item.type === title)
			.map((item) => item.title);
		console.log(a);
		return (
			<>
				{coursedata
					.filter((item) => item.type === title)
					.map((item) => item && <SearchCourses key={item.id} item={item} />)}
			</>
		);
	}

	// const history = useHistory();
	const handlePreview = (id) => {
		dispatch(PreviewCoursedata(id));
	};

	// if (isSuccess) {
	// 	history.push("/preview-course");
	// }

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
														to={`/courses/author_name/${item.author_name}`}
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
												<PreviewButton>
													<Link
														to={`/courses/preview-course/${item.id}`}
														className="authname2"
													>
														Watch Free Preview
													</Link>
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