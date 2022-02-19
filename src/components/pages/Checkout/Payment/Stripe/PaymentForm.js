import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CreditCardForm from "./CreditCardForm";

const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_API);

const PaymentForm = () => {
	return (
		<div>
			<div className="payment_form ms-auto me-auto text-start mt-3">
				<div>
					<p>
						<strong style={{ color: "red" }}>Warning: </strong>
						This payment method is used for testing purpose. You can test it by
						using
						<br />
					</p>
					<p>
						<strong>Card Number:</strong> 4242 4242 4242 4242{" "}
					</p>
					<p>
						<strong>Expiration date:</strong> Any upcoming Month and Year.
					</p>
					<p>
						<strong>CVC:</strong> 145
					</p>
				</div>
			</div>
			<div className="payment_form ms-auto me-auto text-start mt-5">
				<div>
					<Elements stripe={stripePromise}>
						<CreditCardForm />
					</Elements>
				</div>
			</div>
		</div>
	);
};

export default PaymentForm;
