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
	height: 400px;
	overflow: hidden;
	margin: auto;
	margin-top: 10px;

	/* @media screen and (max-width: 900px) {
		height: 300px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 350px;
		width: 100%;
	} */
`;


export {
	Previewwraper,
	Imagewraper,
	Gridpreview,
	CourseImage,
	AboutCourseauth,
	Profilecontent2,
	
};
