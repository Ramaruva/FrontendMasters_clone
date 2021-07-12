import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { FetchCoursedata } from "../../redux/Courses/action";
import { LoaderSpinner } from "./Loader";

import {userPatch} from "../../redux/user/userAction"
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
import "../Navbar/Navbar.css";

import { SearchCourses } from "../Popular/SearchCourses";
import { Footer } from "../Footer/Footer";
import { Searching } from "./SearchIncludes";

// import { FilterAuthordata } from "../../redux/Author/authoraction";

export const AllCourses = ({ title }) => {
	// console.log(title);
	const dispatch = useDispatch();
	// eslint-disable-next-line
	const { coursedata, isLoading, isError, isSuccess } = useSelector(
		(state) => state.course
	);

	const logSuccess = useSelector((state) => state.author.logSuccess);
	let data=useSelector((state)=>state.user.data)
	//console.log(data);
	//let array=data.bookmark
	//console.log(array);
	const handleBookMark=(id)=>
	{
		let array=data.bookmark||[]

          if(array.includes(id))
		  {
			  return
		  }
		  else {
			  array.push(id)
		  }
		  console.log(array)
		  let patcher={...data,bookmark:array}
		   //console.log(patcher)

		 dispatch(userPatch(patcher,data.id))
	}
	const history = useHistory();
	const handleAccess = () => {
		history.push("/pricing");
	};
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
					.filter((item) => Searching(item, title))
					.map((item) => item && <SearchCourses key={item.id} item={item} />)}
			</>
		);
	}

	return isLoading ? (
		<LoaderSpinner />
	) : isError ? (
		<h2 style={{ color: "rgb(192, 45, 40)", textAlign: "center" }}>
			404 Something went wroung
		</h2>
	) : (
		<>
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
															{logSuccess ?"Watch Class" :"Watch Free Preview"}
														</Link>
													</PreviewButton>
													{logSuccess ? (
														<AccessButton onClick={()=>handleBookMark(item.id)}>
															Add to Bookmark
														</AccessButton>
													) : (
														<AccessButton onClick={handleAccess}>
															Get Full Access
														</AccessButton>
													)}
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
