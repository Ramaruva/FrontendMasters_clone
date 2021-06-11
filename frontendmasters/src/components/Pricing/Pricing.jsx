import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PricingFrom } from "./PricingFrom";
import PricingHeading from "./PricingHeading";
import { PricingPackage } from "./PricingPackage";
import { PricingTwitter } from "./PricingTwitter";

const Question = styled.div`
	padding: 20px 0 80px;
	text-align: center;
	font-family: Open Sans, sans-serif;
	letter-spacing: 0;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	h3 {
		font-size: 27px;
		margin: 0;
		padding: 0 0 10px;
		font-weight: 600;
	}
	p {
		font-size: 21px;
	}
	a {
		color: #dd625e;
		text-decoration: underline;
	}
`;
export const Pricing = () => {
	const [plan, setPlan] = useState("Monthly");
	const handlePlan = (e) => {
		setPlan(e.target.id);
	};
	return (
		<>
			<PricingHeading />
			<p>
				if You have already have an account,please <Link to="/login">Login</Link>{" "}
			</p>
			<PricingPackage handlePlan={handlePlan} />
			<PricingFrom plan={plan} />
			<PricingTwitter />
			<Question>
				<h3>Questions on your account?</h3>
				<p>
					Ask us anything! 😀{" "}
					<a href="mailto:support@frontendmasters.com">
						support@frontendmasters.com
					</a>
				</p>
			</Question>
		</>
	);
};
