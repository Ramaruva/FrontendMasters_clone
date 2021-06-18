import styled from "styled-components";

const Allcoursebox = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	margin: 1px 1px;
	@media screen and (max-width: 900px) {
		grid-template-columns: 50% 50%;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 99%;
	}
`;
const Conatiner = styled.div`
	width: 85%;
	cursor: pointer;
	height: 450px;
	margin: 10px auto;
	/* border: 1px solid white; */
	filter: brightness(90%);
	background-image: url(${(props) => props.bgimage});
	transition: 1s;

	&:hover {
		filter: brightness(120%);
	}
	@media screen and (max-width: 1050px) {
		height: 500px;
		width: 95%;
	}
	@media screen and (max-width: 900px) {
		height: 570px;
		width: 83%;
	}
	@media screen and (max-width: 600px) {
		height: 520px;
		width: 83%;
	}
`;
//rgb(221, 98, 94)
const Minicontainer = styled.div`
	width: 80%;
	height: 100%;

	/* border: 1px solid white; */
	background-color: #000;
	float: right;
`;
const Content = styled.div`
	width: 95%;
	cursor: pointer;

	height: 99%;
	/* border: 1px solid white; */
	float: right;
	@media screen and (max-width: 900px) {
		height: 450px;
		width: 83%;
	}
	@media screen and (max-width: 600px) {
		height: 470px;
		width: 83%;
	}
`;
const Title = styled.h2`
	cursor: pointer;

	color: rgb(221, 98, 94);
	font-family: Open Sans, sans-serif;
	font-size: 27px;
	letter-spacing: normal;
	font-weight: 400;
	text-align: left;
	text-decoration-color: rgb(221, 98, 94);
	text-size-adjust: 100%;

	&:hover {
		filter: brightness(140%);
	}
`;
const Profilebox = styled.div`
	width: 100px;
	cursor: pointer;
	height: fit-content;
	/* border: 1px solid white; */
	border-radius: 50%;
	float: left;
`;
const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
const Profilecontent = styled.div`
	width: 33%;
	height: 100px;
	border: 1px solid #000;
	margin-left: 120px;
	margin-top: 10px;
`;
const AuthorName = styled.h2`
	cursor: pointer;
	color: rgb(230, 230, 230);
	font-size: 18px;
	font-family: Open Sans, sans-serif;

	text-decoration-color: rgb(230, 230, 230);
	letter-spacing: normal;
	font-weight: 400;
	text-align: left;
	text-size-adjust: 100%;
`;
const CompanyName = styled.p`
	cursor: pointer;

	color: rgb(138, 138, 138);
	font-family: Open Sans, sans-serif;
	font-size: 16px;
	letter-spacing: normal;
	font-weight: 400;
	text-align: left;
	text-size-adjust: 100%;
`;
const Pro = styled.div`
	width: 98%;
	height: 100px;
	/* border: 1px solid white; */
`;

const AboutAuthor = styled.div`
	width: 99%;
	height: 250px;
	/* border: 1px solid white; */
	margin: 5px auto;
	margin-top: 5px;
`;
const Aboutcontent = styled.p`
	color: rgb(230, 230, 230);
	font-size: 14px;
	font-family: Open Sans, sans-serif;
	line-height: 21px;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;

const Timebox = styled.div`
	width: 99%;
	height: 60px;
	/* border: 1px solid white; */
	margin: 5px auto;
	margin-top: 5px;
	display: flex;
`;
const Time = styled.p`
	color: rgb(138, 138, 138);
	font-size: 14px;
	font-family: Open Sans, sans-serif;
	letter-spacing: normal;
	text-align: left;
	text-size-adjust: 100%;
`;
const Subtitles = styled.div`
	width: 30px;
	height: 25px;
	/* border: 1px solid white; */
	margin-left: 10px;
	margin-top: 10px;
	border-radius: 10px;
	background-color: rgb(138, 138, 138);
	text-align: center;
`;
//rgb(192, 45, 40)
//rgb(201, 79, 23)

const Buttonbox = styled.div`
	display: grid;
	grid-template-columns: 45% 45%;
	margin: 10px;
	@media screen and (max-width: 1050px) {
		grid-template-columns: 33% 33%;
	}
	@media screen and (max-width: 900px) {
		grid-template-columns: 28%;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 24%;
	}
`;
const PreviewButton = styled.button`
	margin-left: -10px;
	font-size: 14px;
	width: 200px;
	height: 40px;
	border-radius: 20px;
	background-color: rgb(192, 45, 40);
	color: rgb(230, 230, 230);
	border: 1px solid rgb(192, 45, 40);
	cursor: pointer;
	transition: linear 0.5s;

	&:hover {
		filter: brightness(150%);
	}
	@media screen and (max-width: 1050px) {
		margin-left: 5px;
		font-size: 13px;
		width: 160px;
		height: 40px;
	}
	@media screen and (max-width: 900px) {
		margin-left: 10px;
		margin-top: 5px;
	}
	@media screen and (max-width: 600px) {
		margin-left: -5px;
		margin-top: 5px;
		font-size: 14px;
		width: 150px;
		height: 30px;
	}
`;
const AccessButton = styled.button`
	margin-left: 20px;
	font-size: 14px;
	width: 200px;
	height: 40px;
	border-radius: 20px;
	background-color: rgb(201, 79, 23);
	color: rgb(230, 230, 230);
	border: 1px solid rgb(201, 79, 23);
	cursor: pointer;
	transition: linear 0.5s;
	&:hover {
		filter: brightness(150%);
	}
	@media screen and (max-width: 1050px) {
		margin-left: 90px;
		font-size: 13px;
		width: 160px;
		height: 40px;
	}
	@media screen and (max-width: 900px) {
		margin-left: 14px;
		margin-top: 5px;
	}
	@media screen and (max-width: 600px) {
		margin-left: -5px;
		margin-top: 5px;
		font-size: 14px;
		width: 150px;
		height: 30px;
	}
`;
const Heading = styled.h1`
	font-family: Open Sans, sans-serif;
	display: block;
	font-size: 46px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	text-align: center;
`;

export {
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
	Heading,
};
