import { Route, Switch } from "react-router-dom";

import { AuthorData } from "../components/AuthorDetails/AuthorData";
import { BootCamp } from "../components/Bootcamp/BootCamp";
import { CoursePage } from "../components/Course/CoursePage";
import { GetFullAccess } from "../components/Course/GetFullAccess";
import Home from "../components/Home/Home";
import LearnPath from "../components/Learn/LearnPath";
import { LearnFullAccess } from "../components/Learning-Path/LearnFullAccess";
import { LearnLevelData } from "../components/Learning-Path/LearnLevelData";
import { Login } from "../components/Login/Login";
import { ResetPassword } from "../components/Login/ResetPassword";
import Navbars from "../components/Navbar/Navbar";
import { Pricing } from "../components/Pricing/Pricing";
import { Guides } from "../components/Guides/Guides";
import { PrivateRoute } from "./PrivateRoutes";
import { Payment } from "../components/Pricing/Payment";

export const Routes = () => {
	return (
		<>
			<Navbars />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/bootcamp">
					<BootCamp />
				</Route>
				<Route exact path="/courses/">
					<CoursePage />
				</Route>
				<PrivateRoute exact path="/learn">
					<LearnPath />
				</PrivateRoute>
				<Route exact path="/learn/:level">
					<LearnLevelData />
				</Route>
				<Route exact path="/learn/:level/:id">
					<LearnFullAccess />
				</Route>
				<Route exact path="/courses/:author_name">
					<CoursePage />
				</Route>
				<Route exact path="/courses/author_name/:author">
					<AuthorData />
				</Route>
				<Route path="/courses/preview-course/:id">
					<GetFullAccess />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/pricing">
					<Pricing />
				</Route>
				
				<Route path="/recover-password">
					<ResetPassword />
				</Route>
				<PrivateRoute path="/guides">
					<Guides />
				</PrivateRoute>
				<Route path="/payment">
					<Payment/>
				</Route>
				<Route>
					<h2>Page Not found</h2>
				</Route>
			</Switch>
		</>
	);
};
