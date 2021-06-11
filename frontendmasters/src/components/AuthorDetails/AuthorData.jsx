import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LoaderSpinner } from "../Course/Loader";

const Backgroundimg = styled.div`
	height: 800px;
	width: 100%;
	/* border: 1px solid white; */
	background-image: url(${(props) => props.author});
	background-repeat: no-repeat;
`;

const Aboutauthor = styled.div`
	height: 447px;
	width: 667px;
`;

//rgba(0, 0, 0, 0.8)
export const AuthorData = () => {
	const { authordata, isLoading, isError, isSuccess } = useSelector(
		(state) => state.author
	);

	const [author, setAuthor] = useState(null);

	useEffect(() => {
		if (authordata.length > 1) {
			setAuthor(authordata[0].big_profile);
		}
	}, [isSuccess]);

	console.log(authordata[0]);
	return isLoading ? (
		<LoaderSpinner />
	) : isError ? (
		<h2>Something went wroung</h2>
	) : (
		<div>
			<Backgroundimg author={author}>
				<Aboutauthor></Aboutauthor>
			</Backgroundimg>
		</div>
	);
};
