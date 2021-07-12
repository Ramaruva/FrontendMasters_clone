import React from 'react'
 import {useSelector} from 'react-redux'
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
} from "./AllCoursesStyles";
import {
	PopularContainer,
	AccessButton,
	PreviewButton,
	Buttonbox,
	ContentBoxpop,
	CourseImage,
} from "../Popular/PopularStyles";
import { Footer } from "../Footer/Footer";

export const Bookmark = () => {
    const coursedata = useSelector(state => state.course.coursedata)
    const data=useSelector(state => state.user.data)
    let array=data.bookmark
   const filterCheck=(id)=>
   {
       if(array.includes(id))
       {
           return true
       }
       else 
       {
           return false
       }
   }
    return (
        <div>
            {
                coursedata.filter((item)=>filterCheck(item.id)).map((item)=>(
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
                                    <AccessButton>Get Full Access</AccessButton>
                                </Buttonbox>
                            </AboutAuthor>
                        </ContentBoxpop>
                    </PopularContainer>
                </div>
                ))
            }
            <Footer />
        </div>
    )
}
