import {
	CardCvcElement,
	CardExpiryElement,
	CardNumberElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import React, { useContext, useMemo, useState } from "react";
import { UserContext } from "../../../../../App";

const useOptions = () => {
	const options = useMemo(
		() => ({
			style: {
				base: {
					backgroundColor: "#F5F5F5",
					fontSize: "20px",
					textAlign: "left",
					color: "#424770",
					letterSpacing: "0.025em",
					fontFamily: "Source Code Pro, monospace",
					"::placeholder": {
						color: "#aab7c4",
					},
				},
				invalid: {
					color: "#9e2146",
				},
			},
		}),
		[]
	);

	return options;
};

const CreditCardForm = () => {
	const { cart, paymentSuccess, setPaymentSuccess } = useContext(UserContext);
	const stripe = useStripe();
	const elements = useElements();
	const options = useOptions();
	const [paymentError, setPaymentError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		const payload = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardNumberElement),
		});

		if (payload.error) {
			setPaymentError(payload.error.message);
			setPaymentSuccess(null);
		}
		if (payload.paymentMethod) {
			setPaymentSuccess(true);
			setPaymentError(null);
			sessionStorage.removeItem("cart");
			sessionStorage.removeItem("userDetail");
			// setPaymentData(payload);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="mb-3 w-100 text-left">
				<strong>Card number</strong>
				<CardNumberElement options={options} />
			</label>
			<br />
			<label className="mb-3 w-100 text-left">
				<strong>Expiration date</strong>
				<CardExpiryElement options={options} />
			</label>
			<br />
			<label className="w-100 text-left">
				<strong>CVC</strong>
				<CardCvcElement options={options} />
			</label>
			<br />
			{paymentError && <p className="text-danger mt-5">{paymentError}</p>}
			{paymentSuccess && (
				<p className="text-success mt-5">Your Payment is Successful.</p>
			)}

			<div className="text-center mt-5">
				<button className="pay_btn" disabled={!stripe}>
					Pay ${cart?.price}
				</button>
			</div>
		</form>
	);
};

export default CreditCardForm;
