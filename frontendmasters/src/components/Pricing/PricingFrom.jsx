import styled from "styled-components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

const pricinginit = {
	email: "",
	fname: "",
	lname: "",
	psd: "",
	cnfpsd: "",
	course: "",
	payment: "",
};
export const PricingFrom = ({ plan }) => {
	const [pricingData, setPricingData] = useState(pricinginit);
	const { email, psd, cnfpsd, course, payment, fname, lname } = pricingData;

	const handleChange = (e) => {
		let { name, value } = e.target;
		setPricingData({ ...pricingData, [name]: value });
	};

	const handlePayment = (e) => {
		e.preventDefault();
		alert("Form submitted successfully !");
	};
	return (
		<div>
			<Form>
				<h2 className="h2class">
					Register for a <span>{plan}</span> Account
				</h2>
				<form>
					<div className="formrow">
						<label className="label">Email</label>
						<span>(you'll need to confirm this email address)</span>
						<br></br>
						<input
							onChange={handleChange}
							name="email"
							value={email}
							type="email"
							title="Please Enter Valid Email id"
							required
							className="inputbox"
						/>
						<div className="formerror"></div>
					</div>
					<div className="sgrid">
						<div className="sgird1">
							<label className="label">First Name</label>
							<br />
							<input
								value={fname}
								onChange={handleChange}
								type="text"
								name="fname"
								title="Please Enter First Name"
								required
								className="inputbox"
							/>
							<div className="formerror"></div>
						</div>
						<div className="sgird1">
							<label className="label">Last Name</label>
							<br />
							<input
								value={lname}
								onChange={handleChange}
								type="text"
								name="lname"
								title="Please Enter First Name"
								required
								className="inputbox"
							/>
							<div className="formerror"></div>
						</div>
					</div>
					<div className="formrow">
						<label className="label" htmlFor="pass_id">
							Password
						</label>
						<br />
						<input
							type="password"
							name="psd"
							value={psd}
							onChange={handleChange}
							title="Please Enter a Password (at least 6 Characters)"
							required
							className="inputbox"
						/>
						<div className="formerror"></div>
					</div>
					<div className="formrow">
						<label htmlFor="passmatch_id" className="label">
							Password Again
						</label>
						<br />
						<input
							value={cnfpsd}
							onChange={handleChange}
							type="password"
							name="cnfpsd"
							title="Please enter Matching Password"
							data-match-id="pass_id"
							className="inputbox"
						/>
						<div className="formerror"></div>
					</div>
					<fieldset className="stripfield">
						<label htmlFor="payment_id" className="label">
							Choose Your Course Type
						</label>
						<br />
						<select
							value={course}
							onChange={handleChange}
							name="course"
							id="payment_id"
              className="inputbox"
              title="Please select your type of course"
						>
							<option value="Select">Select</option>

							<option value="Beginner">Beginner</option>
							<option value="Professional">Professional</option>
							<option value="Expert">Expert</option>
							<option value="Computer Science">Computer Science</option>
							<option value="Fullstack">Fullstack</option>
							<option value="Design to Code">Design to Code</option>
						</select>
						<br />
						<label htmlFor="payment_id" className="label">
							Choose Your Payment Method
						</label>
						<br />

						<select
							value={payment}
							onChange={handleChange}
							name="payment"
							id="payment_id"
              className="inputbox"
              title="Please select your payment method"
              
						>
							<option value="Select">Select</option>

							<option value="Credit/Debit Card">Credit/Debit Card</option>
							<option value="Paypal">Paypal</option>
						</select>
					</fieldset>
					<br />
					<div className="formrow">
						<div
							class="g-recaptcha brochure__form__captcha"
							data-sitekey="6LeqHSEbAAAAABSPac4lSJQ_079Hsd_MYtwCFGPd"
						></div>
					</div>
					<div className="terms">
						<div className="termservices">
							BY Clicking Startinng Learning ,your agree to our
							<a href="https://static.frontendmasters.com/assets/legal/MasterServicesAgreement.pdf">
								<span className="navlink">Terms of service</span>
							</a>
							and
							<a href="https://static.frontendmasters.com/assets/legal/PrivacyPolicy.pdf">
								<span className="navlink">Privacy Policy</span>
							</a>
						</div>
						<button onClick={handlePayment} type="submit" className="redButton">
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
