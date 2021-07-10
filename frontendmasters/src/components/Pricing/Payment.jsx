import { AppContext } from "../../Context/AppContxetProvider";
import React, { useContext, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const Payment = () => {
	const history = useHistory();

	const { price, ispay, setispay } = useContext(AppContext);
	const [details] = React.useState({
		plan: price.plan,
		price: price.price,
	});

	async function handleToken(token) {
		const response = await axios.post(
			"https://aroul303.herokuapp.com/payment",
			{ token, details }
		);
		const status = response.data.token.id;
		const rate = response.data.details.plan;
		if (status) {
			setispay(true);
			toast(`Successfully completed ${rate} subscription`, { type: "success" });
		} else {
			toast("Something went wrong", { type: "error" });
		}
	}

	useEffect(() => {
		if (ispay) {
			history.push("/login");
		}
		// eslint-disable-next-line
	}, [ispay]);
	return (
		<div>
			<br />
			<br />
			<br />
			<StripeCheckout
				stripeKey="pk_test_51J2c5MSJXP7UJEsaX09X6zs7lMCN3XUj3PYnH67gO15T98UKO3njq0h54A4GMrp28KRX9J0nGgs5nKB0ddJVownD00w9wRgoZa"
				token={handleToken}
				price={price.price * 100}
				plan={price.plan}
				label="Start Learning"
				className="redButton"
			/>
		</div>
	);
};
