import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { register } from "../../redux/auth/authAction";

toast.configure();

const Form = styled.div`
	padding: 30px 30px 20px;
	margin-top: 20px;
	margin-bottom: 30px;
	box-shadow: 0 5px 10px 0 rgb(0 0 0 / 40%);
	background: #111;
	margin-left: auto;
	margin-right: auto;
	text-align: left;
	max-width: 600px;
	font-family: Open Sans, sans-serif;
	color: #e6e6e6;
	font-size: 16px;
	line-height: 1.5;
	.h2class {
		margin-top: 0;
		font-size: 27px;
		font-weight: 600;
		font-family: Open Sans, sans-serif;
		letter-spacing: 2;
		color: #e6e6e6;
		line-height: 1.5;
	}
	.formrow {
		margin: 0 0 20px;
	}
	.label {
		display: inline-block;
		margin: 0 0 5px;
		cursor: default;
	}
	.inputbox {
		border: 1px solid #ccc;
		box-shadow: inset 0 1px 3px #ddd;
		border-radius: 5px;
		color: #222;
		display: block;
		font-family: inherit;
		padding: 8px 10px;
		width: 100%;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
		outline: none;
	}
	.formerror {
		color: #e06d69;
		font-size: 14px;
		font-style: italic;
		margin-top: 5px;
	}
	.sgrid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.sgird1 {
		margin: 0 0 20px;
		padding: 0;
		width: 46.5%;
	}
	.stripfield {
		border: 0;
		margin: 0;
		padding: 0;
	}

	.terms {
		padding: 10px 0;
	}
	.termservices {
		background: #222;
		color: #aaa;
		font-size: 14px;
		margin-bottom: 20px;
		padding: 10px;
	}
	.navlink {
		color: #c02d28;
		cursor: pointer;
		text-decoration: underline;
		font-weight: 500;
	}
	.navlink:hover {
		filter: brightness(130%);
	}
	.redButton {
		font-size: 19px;
		padding: 20px 30px;
		background: #c02d28;
		display: inline-block;
		border-radius: 40px;
		border: none;
		color: #fff;
		line-height: 1.25;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		font-family: inherit;
		margin: 0;
	}
`;
const initobj = {
	email: "",
	firstname: "",
	lastname: "",
	password: "",
	passwordmatch: "",
};
const checkobj = {
	em: false,
	fn: false,
	ln: false,
	pass: false,
	passw: false,
};
export const PricingFrom = ({ plan }) => {
	const [data, setData] = useState(initobj);
	const [check, setCheck] = useState(checkobj);
	const { email, firstname, lastname, password, passwordmatch } = data;
	const { em, fn, ln, pass, passw } = check;
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.author.loading);
	const success = useSelector((state) => state.author.success);
	const failure = useSelector((state) => state.author.failure);

	const history = useHistory();

	const handleLearning = () => {
		if (success) {
			history.push("/payment");
		} else if (failure) {
			alert("Registration Failed try again");
		}
	};
	console.log(success);
	// payment part------>
	// const { price, ispay, setispay } = useContext(AppContext);
	// const [details] = React.useState({
	// 	plan: price.plan,
	// 	price: price.price,
	// });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (data.email.length <= 0 && !data.email.includes("@")) {
			setCheck({ ...check, em: true });
		}
		if (data.firstname.length <= 0) {
			setCheck({ ...check, fn: true });
		}
		if (data.lastname.length <= 0) {
			setCheck({ ...check, ln: true });
		}
		if (data.password.length < 6) {
			setCheck({ ...check, pass: true });
		}
		if (data.password !== data.passwordmatch || data.passwordmatch.length < 0) {
			setCheck({ ...check, passw: true });
		}
		if (!check.em && !check.fn && !check.pass && !check.passw) {
			dispatch(register(data));
			handleLearning();
		}
	};

	return (
		<div>
			<Form>
				<h2 className="h2class">
					Register for a <span>{plan}</span> Account
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="formrow">
						<label className="label">Email </label>
						<span> (you'll need to confirm this email address)</span>
						<br></br>
						<input
							name="email"
							type="email"
							required
							title="Please Enter Valid Email id"
							value={email}
							onChange={handleChange}
							className="inputbox"
						/>
						<div className="formerror">
							{em && "Please Enter Valid Email id"}
						</div>
					</div>
					<div className="sgrid">
						<div className="sgird1">
							<label className="label">First Name</label>
							<br />
							<input
								type="text"
								name="firstname"
								value={firstname}
								required
								onChange={handleChange}
								title="Please Enter First Name"
								className="inputbox"
							/>
							<div className="formerror">{fn && "Please Enter First"}</div>
						</div>
						<div className="sgird1">
							<label className="label">Last Name</label>
							<br />
							<input
								type="text"
								name="lastname"
								title="Please Enter First Name"
								value={lastname}
								required
								onChange={handleChange}
								className="inputbox"
							/>
							<div className="formerror">{ln && "Please Enter Last Name"}</div>
						</div>
					</div>
					<div className="formrow">
						<label className="label" htmlFor="pass_id">
							Password
						</label>
						<br />
						<input
							type="password"
							name="password"
							required
							value={password}
							onChange={handleChange}
							title="Please Enter a Password (at least 6 Characters)"
							minLength="6"
							className="inputbox"
						/>
						<div className="formerror">
							{pass && "Please Enter a Password of length 6 characters"}
						</div>
					</div>
					<div className="formrow">
						<label htmlFor="passmatch_id" className="label">
							Password Again
						</label>
						<br />
						<input
							type="password"
							name="passwordmatch"
							value={passwordmatch}
							onChange={handleChange}
							title="Please enter Matching Password"
							data-match-id="pass_id"
							required
							className="inputbox"
						/>
						<div className="formerror">
							{passw && "Please enter matching password"}
						</div>
					</div>
					<fieldset className="stripfield">
						<label htmlFor="payment_id" className="label">
							Your Payment Method is
						</label>
						<br />
						<input
							type="text"
							name="payment"
							value="Credit/Debit-card"
							className="inputbox"
							required
						/>
						{/* <select name="payment" id="payment_id" className="inputbox">
              <option>Credit/Debit Card</option>
              <option>Paypal</option>
            </select> */}
					</fieldset>

					<div className="terms">
						<div className="termservices">
							BY Clicking Startinng Learning ,your agree to our
							<NavLink to="/">
								<span className="navlink">Terms of service</span>
							</NavLink>
							and
							<NavLink to="/">
								<span className="navlink">Privacy Policy</span>
							</NavLink>
						</div>
						<button type="submit" className="redButton" disabled={loading}>
							Start Learning
						</button>
					</div>
				</form>
			</Form>
		</div>
	);
};

// 6LeqHSEbAAAAABSPac4lSJQ_079Hsd_MYtwCFGPd
// 6LeqHSEbAAAAAJPFLmLY95eX2X6ENHOAxLjhpR-A
