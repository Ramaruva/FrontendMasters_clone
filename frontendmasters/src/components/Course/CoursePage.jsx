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
	Content,
	Buttonbox,
	Serachbut,
	Inputbox,
	Input,
	Inputbtnbox,
} from "./CoursePageStyles";
import { Popular } from "../Popular/Popular";
import "./CoursePage.css";
import { AuthorData } from "../AuthorDetails/AuthorData";
export const CoursePage = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();

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
						<Serachbut onClick={handleFilterCourse}>
							<i className="fa fa-search"></i>
						</Serachbut>
					</Inputbtnbox>
				</Inputbox>
			</Container>
			<br />
			<SmallNav>
				<Buttonbox>
					<Buttons
						id="Frontend Masters Courses"
						className="tablinks"
						onClick={(e) => {
							ActivationButtons(e, "all");
							handleHead(e);
						}}
					>
						All Courses
					</Buttons>
					<Buttons
						className="tablinks"
						id="Popular Courses"
						onClick={(e) => {
							ActivationButtons(e, "popular");
							handleHead(e);
						}}
					>
						Popular Courses
					</Buttons>
					<Buttons
						className="tablinks"
						onClick={(e) => {
							ActivationButtons(e, "learning");
						}}
					>
						Learning Paths
					</Buttons>
				</Buttonbox>
			</SmallNav>
			<Content id="all" className="tabcontent">
				{/* all courses  */}
				<AllCourses title={title} />
			</Content>
			<Content id="popular" className="tabcontent">
				{/* popular courses  */}
				<Popular />
			</Content>
			<Content id="learning" className="tabcontent">
				{/* learning paths*/}
				{/* <LearningPaths /> */}
				<AuthorData/>
			</Content>
		</>
	);
};
