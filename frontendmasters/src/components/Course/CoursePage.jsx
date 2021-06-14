import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { ActivationButtons } from "./activationbuttons";
import { AllCourses } from "./AllCourses";
import { LearningPaths } from "./LearningPaths";
import { FilterCoursedata } from "../../redux/Courses/action";

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

import { Link, useParams } from "react-router-dom";
import { AuthorData } from "../AuthorDetails/AuthorData";

// import { AuthorData } from "../AuthorDetails/AuthorData";

export const CoursePage = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();
	const { author_name } = useParams();
	console.log(author_name);
	//by changing the title , fetching the data from endpoint of server
	//fetching the data from server ....dispatching action here...

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleFilterCourse = () => {
		dispatch(FilterCoursedata(title));
		// setTitle(" ");
	};

	// useEffect(() => {
	// 	dispatch(FilterCoursedata(title));
	// }, []);

	const [head, setHead] = useState("Frontend Masters Courses");

	const handleHead = (e) => {
		setHead(e.target.id);
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
						id="Frontend Masters Courses"
						// className="tablinks"
						onClick={(e) => {
							// 	ActivationButtons(e, "all");
							handleHead(e);
						}}
					>
						<Link className="courselinks" to="/courses/all">
							All Courses
						</Link>
					</Buttons>
					<Buttons
						// className="tablinks"
						id="Popular Courses"
						onClick={(e) => {
							// 	ActivationButtons(e, "popular");
							handleHead(e);
						}}
					>
						<Link className="courselinks" to="/courses/popular">
							Popular Courses
						</Link>
					</Buttons>
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
			) : (
				<AllCourses title={title} />
			)}
		</>
	);
};
