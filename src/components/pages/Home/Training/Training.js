import React from "react";
import ClassCard from "../../../Common/ClassCard/ClassCard";
import "./Training.css";

const Training = () => {
	const cardData1 = {
		id: "1",
		title: "yoga training season",
		image_link:
			"https://i.ibb.co/w6JcvTq/bruce-mars-g-Jt-Dg6-Wf-Ml-Q-unsplash.png",
	};

	const cardData2 = {
		id: "2",
		title: "cardio training season",
		image_link:
			"https://i.ibb.co/8mwYVX4/arthur-edelman-qfjuh4-OLdxw-unsplash.jpg",
	};

	return (
		<section className="mt-5 mb-5 pt-5">
			<div className="container">
				<h1 className="text-uppercase font_size font_bebas_about">
					training <span className="text_yellow">programme</span>
				</h1>
				<div className="mt-5 mb-5 pt-3">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12 mb-5">
							<ClassCard cardData={cardData1} classPage={true} />
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 mb-5">
							<ClassCard cardData={cardData2} classPage={true} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Training;
