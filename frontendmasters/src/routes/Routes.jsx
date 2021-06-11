import { Route, Switch } from "react-router-dom";
import { AuthorData } from "../components/AuthorDetails/AuthorData";
import { CoursePage } from "../components/Course/CoursePage";
import { GetFullAccess } from "../components/Course/GetFullAccess";
import Home from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { ResetPassword } from "../components/Login/ResetPassword";
import Navbars from "../components/Navbar/Navbar";
import { Pricing } from "../components/Pricing/Pricing";

export const Routes = () => {
	return (
		<>
			<Navbars />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/courses">
					<CoursePage />
				</Route>
				<Route exact path="/courses/:author_name">
					<AuthorData />
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
				{/* <Route exact path="/fullaccess">
					<GetFullAccess />
				</Route> */}
				<Route>
					<h2>Page Not found</h2>
				</Route>
			</Switch>
		</>
	);
};
