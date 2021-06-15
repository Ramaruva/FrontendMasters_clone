import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	margin: 10px;

	@media screen and (max-width: 900px) {
		grid-template-columns: auto auto;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: auto;
	}
`;
const Bookbox = styled.div`
	/* border: 1px solid white; */
	height: 600px;
	margin: 10px;
`;
const Heading = styled.h1`
	font-family: Open Sans, sans-serif;
	font-size: 36px;
	color: rgb(230, 230, 230);
	line-height: normal;
	font-weight: 600;
	margin-left: 22px;

	text-align: left;
`;
const Imagebox = styled.div`
	/* border: 1px solid red; */
	height: 500px;
`;
const Image = styled.img`
	height: 100%;
	width: 100%;
	filter: brightness(90%);
	transition: 1s;

	&:hover {
		filter: brightness(130%);
	}
`;
const BookLinks = styled.div`
	/* border: 1px solid red; */
	background-color: black;
	width: 100%;

	height: 80px;
	margin: 0px;
	.booklinks {
		color: #c02d28;
		cursor: pointer;
		text-decoration: underline;
		font-weight: 500;
		text-align: left;
		line-height: 25px;
		padding: 15px;
		transition: 1s;
		margin-top: 10px;
		filter: brightness(70%);

		&:hover {
			filter: brightness(110%);
		}
	}
`;

export { BookLinks, Container, Heading, Image, Imagebox, Bookbox };
