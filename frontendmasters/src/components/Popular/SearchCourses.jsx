import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userPatch} from '../../redux/user/userAction'
import {
	AboutAuthor,
	Aboutcontent,
	AuthorName,
	Buttonbox,
	CompanyName,
	Pro,
	Profilebox,
	Profilecontent,
	ProfileImage,
	Subtitles,
	Time,
	Timebox,
	Title,
} from "../Course/AllCoursesStyles";
import {
	AccessButton,
	ContentBoxpop,
	CourseImage,
	PopularContainer,
	PreviewButton,
} from "./PopularStyles";

export const SearchCourses = ({ item }) => {
	const dispatch= useDispatch()
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
	return (
		<div>
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
};
