import styled from "styled-components";

const Heading = styled.h1`
	font-family: Open Sans, sans-serif;
	display: block;
	font-size: 36px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	float: left;
	margin-left: 20px;
`;
const Container = styled.div`
	width: 85%;
	height: 80px;
	/* border: 1px solid white; */
	margin: auto;
	@media screen and (max-width: 920px) {
		height: 110px;
		h1 {
			font-size: 25px;
		}
		div {
			width: 55%;
			margin-top: -10px;
		}
	}
	@media screen and (max-width: 650px) {
		h1 {
			font-size: 20px;
		}
		div {
			margin-top: -05px;
			width: 65%;
			float: left;
		}
	}
`;

const SmallNav = styled.div`
	background-color: #1d1818;
	/* border: 1px solid white; */
	width: 100%;
	height: 50px;
	overflow: hidden;
	margin: auto;

	@media screen and (max-width: 900px) {
		height: 70px;
		width: 100%;
	}
	@media screen and (max-width: 610px) {
		height: 90px;
		width: 100%;
	}
`;
const Buttons = styled.button`
	font-family: Open Sans, sans-serif;
	display: block;
	background-color: #1d1818;
	font-size: 36px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	float: left;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 14px 16px;
	transition: 0.3s;
	font-size: 17px;
	&:hover {
		filter: brightness(120%);
	}

	&.active {
		background-color: rgb(10, 87, 163);
	}
`;
const Content = styled.div``;
//rgb(10, 87, 163)

const Buttonbox = styled.div`
	margin-left: 100px;
`;

const Serachbut = styled.button`
	float: right;
	width: 10%;
	height: 40px;
	margin-top: 5px;
	/* border-radius: 5px; */
	padding: 5px;
	background: rgb(56, 56, 56);
	color: white;
	font-size: 12px;
	border: 1px solid whitesmoke;
	border-left: none;
	cursor: pointer;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;
const Inputbox = styled.div`
	width: 40%;
	height: 50px;
	/* border: 1px solid white; */
	float: right;
	margin-top: 10px;
`;

const Input = styled.input`
	background-color: rgb(56, 56, 56);
	width: 80%;
	height: 35px;
	border: 1px solid whitesmoke;
	color: whitesmoke;
	margin-top: 5px;
	font-size: 18px;
	/* border-radius: 5px; */
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	float: right;
	transition: background 0.4s;
	&::placeholder {
		font-size: 18px;
	}
`;
const Inputbtnbox = styled.div`
	width: 80%;
	height: 90%;
	/* border: 1px solid whitesmoke; */

	margin: auto;
	display: flex;
	float: right;
`;
export {
	Heading,
	Container,
	SmallNav,
	Buttons,
	Content,
	Buttonbox,
	Serachbut,
	Inputbox,
	Input,
	Inputbtnbox,
};
