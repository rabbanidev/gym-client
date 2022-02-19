import React from "react";
import Header from "../../../Common/Header/Header";
import Coaches from "../Coaches/Coaches";
import OurGym from "../OurGym/OurGym";
import Trainer from "../Trainer/Trainer";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<section>
			<Header title={"Who we are?"} />
			<div className="container">
				<Coaches />
				<Trainer />
				<OurGym />
			</div>
		</section>
	);
};

export default AboutUs;
