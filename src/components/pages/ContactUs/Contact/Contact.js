import React from "react";
import Header from "../../../Common/Header/Header";
import ContactForm from "../ContactForm/ContactForm";
import "./contact.css";

const Contact = () => {
	return (
		<section>
			<Header title={"Contact Us"} />
			<div className="container">
				<div className="mt-4 mb-5 pt-4 pb-5">
					<div className="row">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
