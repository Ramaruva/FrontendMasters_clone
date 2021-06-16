import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/auth/authAction";
import "../Navbar/Navbar.css";

function Navbars() {
	//const outSuccess=useSelector(state => state.author.outSuccess);
	const logSuccess = useSelector((state) => state.author.logSuccess);
	// const success=useSelector(state => state.author.success);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<div className="Navbody">
			<Navbar>
				<Link to="/">
					<img
						height="40px"
						src="https://static.frontendmasters.com/assets/fm/js/frontendmasters.e1e10b58c1.svg"
						alt="LOGO"
					/>
				</Link>

				<div
					style={{
						width: "400px",
						justifyContent: "space-between",
						display: "flex",
						minWidth: "400px",
						paddingTop: "10px",
					}}
				>
					<Hover>
						<Link to="/courses/" className="links">
							Courses
						</Link>
					</Hover>
					<Hover>
						<Link to="/learn" className="links">
							Learn
						</Link>
					</Hover>
					<Hover>
						{logSuccess ? (
							<Link to="/guides" className="links">
								Guides
							</Link>
						) : null}
					</Hover>
					<Hover>
						<Link to="/pricing" className="links">
							Pricing
						</Link>
					</Hover>
					<Hover>
						{logSuccess ? (
							<button
								style={{
									borderRadius: "30px",
									width: "100px",
									border: "none",
									backgroundColor: "rgb(192,45,40)",
									marginTop: "-9px",
									height: "40px",
									paddingTop: "5px",
									cursor: "pointer",
								}}
								onClick={handleLogout}
							>
								<Link
									style={{
										fontWeight: "500",
										fontSize: "16px",
										textDecoration: "none",
										fontFamily: "'Open Sans', sans-serif",
										color: "white",
									}}
								>
									Logout
								</Link>
							</button>
						) : (
							<Link to="/login" className="links">
								Login
							</Link>
						)}
					</Hover>
					{logSuccess ? null : (
						<button
							style={{
								borderRadius: "30px",
								width: "100px",
								border: "none",
								backgroundColor: "rgb(192,45,40)",
								marginTop: "-9px",
								paddingTop: "5px",
							}}
						>
							<Link
								to="/pricing"
								style={{
									fontWeight: "500",
									fontSize: "16px",
									textDecoration: "none",
									fontFamily: "'Open Sans', sans-serif",
									color: "white",
								}}
							>
								Join Now
							</Link>
						</button>
					)}
				</div>
			</Navbar>
			<svg style={{ height: "30", width: "100%", zIndex: "1" }}>
				<polygon
					points="-300,0 1400,0 1400,20"
					style={{ fill: "rgb(213,74,38)", stroke: "none", strokeWidth: "1" }}
				/>
			</svg>
		</div>
	);
}

export default Navbars;

export const Navbar = styled.div`
	width: 85%;
	display: flex;
	font-family: "Open Sans", sans-serif;
	flex-wrap: wrap;
	margin: auto;
	padding: 15px;
	justify-content: space-between;
`;
export const Hover = styled.div`
	color: white;
	text-decoration: none;
	&::hover {
		Link {
			background-color: white;
			display: none;
		}
	}
`;
