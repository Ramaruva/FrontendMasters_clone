import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FetchCoursedata } from "../../redux/Courses/action";
import { LoaderSpinner } from "./Loader";

//importing styles from "AllCoursesStyles-page"
import {
	Allcoursebox,
	Conatiner,
	Minicontainer,
	Content,
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
	Buttonbox,
	PreviewButton,
	AccessButton,
} from "./AllCoursesStyles";
import { SearchCourses } from "../Popular/SearchCourses";

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
		
	}, [dispatch,title]);
   if(title.length>0)
   {
	   console.log(coursedata);
	   const a=coursedata.filter((item)=>(item.type===title)).map((item)=>(item.title))
	   console.log(a);
       return(
		   <>
		    {
				coursedata.filter((item)=>item.type===title).map((item)=>(
					item&&<SearchCourses key={item.id} item={item} />
				))
			}
		   </>
	   )
   }
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
