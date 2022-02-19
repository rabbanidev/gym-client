import React, { useContext, useState } from "react";
import { UserContext } from "../../../../App";
import Header from "../../../Common/Header/Header";
import "./NotSelected.css";
import NotSelectStep from "./NotSelectStep/NotSelectStep";

const NotSelected = () => {
	const [title, setTitle] = useState("you need to fulfil our policy");
	const { cart, userDetail, paymentSuccess } = useContext(UserContext);

	if (!cart) {
		const stepData = {
			heading: "Please, At First Choose A Plan",
			path: "/pricing",
			buttonText: "Plan",
		};
		return (
			<section>
				<Header title={title} />
				<div className="selected_div  container">
					{/* <ForRegister /> */}
					<NotSelectStep stepData={stepData} />
				</div>
			</section>
		);
	}

	if (cart && !userDetail) {
		const stepData = {
			heading: "Please Complete The Register Process",
			path: "/checkout/register",
			buttonText: "Register",
		};
		return (
			<section>
				<Header title={title} />
				<div className="selected_div">
					<NotSelectStep stepData={stepData} />
				</div>
			</section>
		);
	}

	if (cart && userDetail && !paymentSuccess) {
		const stepData = {
			heading: "Please Complete The Payment Process",
			path: "/checkout/payment",
			buttonText: "Payment",
		};
		return (
			<section>
				<Header title={title} />
				<div className="selected_div">
					<NotSelectStep stepData={stepData} />
				</div>
			</section>
		);
	}
};

export default NotSelected;
