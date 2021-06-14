import styled from "styled-components";

const PopularContainer = styled.div`
	height: 370px;
	width: 83%;
	margin: 20px auto;
	/* border: 1px solid white; */
	display: flex;
	@media screen and (max-width: 900px) {
		height: 450px;
		width: 83%;
	}
	@media screen and (max-width: 610px) {
		height: 550px;
		width: 83%;
	}
`;
const CourseImage = styled.div`
	width: 32%;
	cursor: pointer;
	height: 370px;
	/* border: 1px solid white; */
	filter: brightness(90%);
	background-image: url(${(props) => props.bgimage});
	transition: 1s;

	&:hover {
		filter: brightness(120%);
	}
	@media screen and (max-width: 900px) {
		height: 450px;
		width: 83%;
	}
	@media screen and (max-width: 610px) {
		height: 550px;
		width: 83%;
	}
`;

const ContentBoxpop = styled.div`
	width: 68%;
	height: 100%;
	margin: auto;
	/* border: 1px solid red; */
	background-color: #000;
	float: right;
`;

const Buttonbox = styled.div`
	display: grid;
	grid-template-columns: 28% 28%;
	margin-top: -10px;
	/* border: 1px solid white; */
	@media screen and (max-width: 900px) {
		grid-template-columns: 26%;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 24%;
	}
`;
const PreviewButton = styled.button`
	margin-left: 0px;
	font-size: 14px;
	width: 150px;
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
	font-size: 14px;
	margin-left: -30px;
	width: 150px;
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
	@media screen and (max-width: 1030px) {
		margin-left: 10px;
		margin-top: 5px;
	}
	@media screen and (max-width: 900px) {
		margin-left: 30px;
		margin-top: 25px;
	}

	@media screen and (max-width: 600px) {
		margin-left: -5px;
		margin-top: 5px;
		font-size: 14px;
		width: 150px;
		height: 30px;
	}
`;
const Heading5 = styled.h1`
	font-family: Open Sans, sans-serif;
	display: block;
	font-size: 46px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	margin-left: 20px;
	text-align: center;
`;
const Para5 = styled.p`
	color: rgb(230, 230, 230);
	font-size: 21px;
	font-family: Open Sans, sans-serif;
	line-height: 21px;
	letter-spacing: normal;
	text-align: center;

	text-size-adjust: 100%;
`;

export {
	PopularContainer,
	AccessButton,
	PreviewButton,
	Buttonbox,
	ContentBoxpop,
	CourseImage,
	Para5,
	Heading5
};
