import styled from "styled-components";
import React from "react";

const Form = styled.div`
	padding: 30px 30px 20px;
	margin-top: 50px;
	margin-bottom: 30px;
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
		/* border: 1px solid white; */
		display: flex;
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
		font-size: 18px;
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
export const ResetPassword = () => {
	return (
		<div>
			<Form>
				<form>
					<div className="formrow">
						<label className="label">
							Enter your email or username and we'll email you a link to reset
							your password.
						</label>
						<br></br>
						<input
							name="username"
							type="text"
							title="Please Enter Valid Email id"
							required
							className="inputbox"
							placeholder="Username or Email"
						/>
						<div className="formerror"></div>
					</div>

					<div className="terms">
						<button type="submit" className="redButton">
							Reset Password
						</button>
					</div>
				</form>
			</Form>
		</div>
	);
};
