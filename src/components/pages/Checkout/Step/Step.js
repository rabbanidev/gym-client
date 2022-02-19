import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import "./Step.css";

const Step = () => {
	const { cart } = useContext(UserContext);
	const location = window.location.pathname;
	const [registerPage, setRegisterPage] = useState(false);
	const [paymentPage, setPaymentPage] = useState(false);
	const [memberPage, setMemberPage] = useState(false);

	useEffect(() => {
		if (
			location === "/checkout/register" ||
			location === "/checkout/register/"
		) {
			setRegisterPage(true);
			setPaymentPage(false);
			setMemberPage(false);
		}

		if (location === "/checkout/payment" || location === "/checkout/payment/") {
			setRegisterPage(true);
			setPaymentPage(true);
			setMemberPage(false);
		}

		if (
			location === "/checkout/memberCreated" ||
			location === "/checkout/memberCreated/"
		) {
			setRegisterPage(true);
			setPaymentPage(true);
			setMemberPage(true);
		}
	}, [location]);

	return (
		<section className="mt-5 mb-5">
			<div className="container">
				<div>
					<div className=" d-flex justify-content-center align-items-center me-auto ms-auto">
						<div className={registerPage ? "step step_active" : "step"}>
							<h3>1</h3>
							<p>Personal Details</p>
						</div>
						<div className="dot_border"></div>
						<div
							className={
								registerPage && paymentPage ? "step step_active" : "step"
							}
						>
							<h3>2</h3>
							<p>Bank Payment</p>
						</div>
						<div className="dot_border dot_right"></div>
						<div
							className={
								registerPage && paymentPage && memberPage
									? "step step_right step_active"
									: "step"
							}
						>
							<h3>3</h3>
							<p>Membership Created</p>
						</div>
					</div>
				</div>
				<div className="mt-5 cart_plan">
					{cart && (
						<h2 className="font_bebas_about fs-1">
							You Select <span className="about_yellow">{cart?.name}</span>
						</h2>
					)}
					<div className="border_bottom"></div>
				</div>
			</div>
		</section>
	);
};

export default Step;
