import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../App";
import Header from "../../../../Common/Header/Header";
import Step from "../../Step/Step";
import Stripe from "../Stripe/PaymentForm";
import "./PaymentContainer.css";

const PaymentContainer = () => {
	const { paymentSuccess } = useContext(UserContext);
	return (
		<section className="mb-5 pb-5">
			<Header title={"Your gym membership"} />
			<div className="container mb-5">
				<div>
					<Step />
					<h1>Payment Process</h1>
					<Stripe />
				</div>
				<div className="payment_next d-flex justify-content-around ms-auto me-auto">
					<div>
						<Link to="/checkout/register">
							<button className="next_btn me-0" type="submit">
								<FontAwesomeIcon icon={faArrowLeft} /> Back
							</button>
						</Link>
					</div>
					<div>
						{paymentSuccess ? (
							<Link to="/checkout/memberCreated">
								<button className="next_btn  me-0" type="submit">
									Next <FontAwesomeIcon icon={faArrowRight} />
								</button>
							</Link>
						) : (
							<button
								className="next_btn me-0 disabled_btn"
								disabled
								type="submit"
							>
								Next <FontAwesomeIcon icon={faArrowRight} />
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PaymentContainer;
