import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { AllCourses } from "./AllCourses";
// import { LearningPaths } from "./LearningPaths";
// import { FilterCoursedata } from "../../redux/Courses/action";

//importing styles from CoursePageStyles
import {
	Heading,
	Container,
	SmallNav,
	Buttons,
	Buttonbox,
	Inputbox,
	Input,
	Inputbtnbox,
} from "./CoursePageStyles";
import { Popular } from "../Popular/Popular";
import "./CoursePage.css";

import { AuthorData } from "../AuthorDetails/AuthorData";
import { useSelector } from "react-redux";
import { Bookmark } from "./Bookmark";

// import { AuthorData } from "../AuthorDetails/AuthorData";

export const CoursePage = () => {
	const [title, setTitle] = useState("");
	// const dispatch = useDispatch();
	const { author_name } = useParams();

	const logSuccess = useSelector((state) => state.author.logSuccess);
	// console.log(author_name);
	//by changing the title , fetching the data from endpoint of server
	//fetching the data from server ....dispatching action here...

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	// const handleFilterCourse = () => {
	// 	dispatch(FilterCoursedata(title));
	// 	// setTitle(" ");
	// };

	// useEffect(() => {
	// 	dispatch(FilterCoursedata(title));
	// }, []);

	const [head, setHead] = useState("Frontend Masters Courses");

	const handleHead = (value) => {
		setHead(value);
	};

	if (author_name > 0 && author_name !== "all" && author_name !== "popular") {
		return <AuthorData />;
	}

	return (
		<>
			<Container>
				<Heading>{head}</Heading>
				<Inputbox>
					<Inputbtnbox className="search-container">
						<Input
							type="text"
							name="title"
							onChange={handleChange}
							value={title}
							placeholder="Type to search..."
						/>
					</Inputbtnbox>
				</Inputbox>
			</Container>
			<br />
			<SmallNav>
				<Buttonbox>
					<Buttons
						// className="tablinks"
						onClick={(e) => {
							// 	ActivationButtons(e, "all");
							handleHead("Frontend Masters Courses");
						}}
					>
						<Link className="courselinks" to="/courses/all">
							All Courses
						</Link>
					</Buttons>
					<Buttons
						// className="tablinks"
						onClick={(e) => {
							// 	ActivationButtons(e, "all");
							handleHead("Popular Courses");
						}}
					>
						<Link className="courselinks" to="/courses/popular">
							Popular Courses
						</Link>
					</Buttons>
					{logSuccess && (
						<Buttons onClick={(e) => {
							// 	ActivationButtons(e, "all");
							handleHead("Your Bookmarks");
						}}>
							{" "}
							<Link className="courselinks" to="/courses/bookmarks">
								Your Bookmarks
							</Link>
						</Buttons>
					)}
					<Buttons>
						{" "}
						<Link className="courselinks" to="/learn">
							Learning Paths
						</Link>
					</Buttons>
				</Buttonbox>
			</SmallNav>
			{author_name === "all" ? (
				<AllCourses title={title} />
			) : author_name === "popular" ? (
				<Popular title={title} />
			) : author_name === "bookmarks" ? (
				<Bookmark />
			) : (
				<AllCourses title={title} />
			)}
		</>
	);
};
