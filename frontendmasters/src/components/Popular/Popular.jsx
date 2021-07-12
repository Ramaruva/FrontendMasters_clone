import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FetchPopulardata } from "../../redux/Popular/popularaction";
import { LoaderSpinner } from "../Course/Loader";
import {userPatch} from '../../redux/user/userAction'
import { useHistory } from "react-router-dom";

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
} from "./PopularStyles";
import { SearchCourses } from "./SearchCourses";
import {Footer} from "../Footer/Footer";
import { Searching } from "../Course/SearchIncludes";

export const Popular = ({ title }) => {
	const { populardata, isLoading, isError } = useSelector(
		(state) => state.popular
	);
	// console.log(populardata);
	const dispatch = useDispatch();
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
	useEffect(() => {
		dispatch(FetchPopulardata());
	}, [dispatch, title]);
	if (title.length > 0) {
		return (
			<>
				{populardata
					?.filter((item) => Searching(item, title) && item.rating > 4)
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
				{populardata
					.filter((item) => item.rating >= 4)
					.map((item) => {
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
												<PreviewButton>Watch Free Preview</PreviewButton>
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
									</ContentBoxpop>
								</PopularContainer>
							</div>
						);
					})}
			</div>
			<Footer />
		</>
	);
};
