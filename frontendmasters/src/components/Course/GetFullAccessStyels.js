import styled from "styled-components";

const Previewwraper = styled.div`
	background-color: rgb(45, 45, 45);
	/* border: 1px solid white; */
	width: 100%;
	height: 250px;
	overflow: hidden;
	margin: auto;
	margin-top: 10px;

	@media screen and (max-width: 900px) {
		height: 300px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 350px;
		width: 100%;
	}
`;
const Imagewraper = styled.div`
	width: 22%;
	height: 99%;
	/* border: 1px solid white; */
	@media screen and (max-width: 900px) {
		height: 300px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 350px;
		width: 100%;
	}
`;
const Gridpreview = styled.div`
	width: 80%;
	height: 95%;
	margin-left: 110px;
	margin-top: 10px;
	/* border: 1px solid red; */
	display: flex;
`;
const CourseImage = styled.img`
	width: 100%;
	height: 100%;
	@media screen and (max-width: 900px) {
		height: 85%;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 85%;
		width: 100%;
	}
`;

const AboutCourseauth = styled.div`
	width: 60%;
	height: 99%;
	margin-left: 20px;
	/* border: 1px solid white; */
`;
const Profilecontent2 = styled.div`
	width: 33%;
	height: 100px;
	border: 1px solid rgb(45, 45, 45);
	margin-left: 120px;
	margin-top: 10px;
`;

const Blackwrraper = styled.div`
	background-color: black;
	/* border: 1px solid white; */
	width: 100%;
	height: 500px;
	overflow: hidden;
	margin: auto;
	margin-top: 10px;

	@media screen and (max-width: 900px) {
		height: 550px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: fit-content;
		width: 100%;
	}
`;

const Gridvideobox = styled.div`
	display: grid;
	grid-template-columns: 47% 47%;
	margin: 10px 10px;
	margin-left: 110px;
	@media screen and (max-width: 900px) {
		grid-template-columns: 47% 47%;
	}
	@media screen and (max-width: 610px) {
		grid-template-columns: auto;
	}
`;
const Videobox = styled.div`
	height: 370px;
	@media screen and (max-width: 900px) {
		height: 500px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 650px;
		width: 100%;
	}
	/* border: 1px solid white; */
`;
const Descriptionbox = styled.div`
	height: 370px;
	/* border: 1px solid white; */
	margin-left: 20px;
	@media screen and (max-width: 900px) {
		height: 550px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 650px;
		width: 100%;
	}
`;

const Aboutcontent = styled.p`
	color: rgb(230, 230, 230);
	font-size: 16px;
	font-family: Open Sans, sans-serif;
	line-height: 30px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;
const Publish = styled.p`
	color: rgb(116, 113, 113);
	font-size: 16px;
	font-family: Open Sans, sans-serif;
	line-height: 30px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;
const Unlimitedbutton = styled.button`
	font-size: 20px;
	width: 450px;
	height: 60px;
	border-radius: 40px;
	background-color: rgb(192, 45, 40);
	color: rgb(230, 230, 230);
	border: 1px solid rgb(192, 45, 40);
	cursor: pointer;
	transition: linear 0.5s;

	&:hover {
		filter: brightness(150%);
	}
	@media screen and (max-width: 900px) {
		height: 40px;
		width: 310px;
		font-size: 17px;
	}
	@media screen and (max-width: 610px) {
		height: 30px;
		width: 220px;
		font-size: 14px;
	}
`;

export {
	Gridvideobox,
	Blackwrraper,
	Previewwraper,
	Imagewraper,
	Gridpreview,
	CourseImage,
	AboutCourseauth,
	Profilecontent2,
	Videobox,
	Descriptionbox,
	Aboutcontent,
	Publish,
	Unlimitedbutton,
};
