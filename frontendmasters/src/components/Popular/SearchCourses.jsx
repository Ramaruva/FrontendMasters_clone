import React from 'react'
import { AboutAuthor, Aboutcontent, AuthorName, Buttonbox, CompanyName, Pro, Profilebox, Profilecontent, ProfileImage, Subtitles, Time, Timebox, Title } from '../Course/AllCoursesStyles'
import { AccessButton, ContentBoxpop, CourseImage, PopularContainer, PreviewButton } from './PopularStyles'

export const SearchCourses = ({item}) => {
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
                            <AccessButton>Get Full Access</AccessButton>
                        </Buttonbox>
                    </AboutAuthor>
                </ContentBoxpop>
            </PopularContainer>
        </div>
    )
}
