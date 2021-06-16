import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export const PrivateRoute = ({
	redirect = "/login",
	path,
	push = false,
	children,
	exact,
}) => {
	const logSuccess = useSelector((state) => state.author.logSuccess);
	return logSuccess ? (
		<div>
			<Route path={path} exact={exact}>
				{children}
			</Route>
		</div>
	) : (
		<Redirect push={push} to={redirect} />
	);
};
