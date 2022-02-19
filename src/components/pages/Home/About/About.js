import React from "react";
import "./About.css";

const About = () => {
	return (
		<section className="mb-5 mt-5 pt-5 pb-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div className="about_image">
							<img
								className="ab_img"
								src="https://i.ibb.co/HCgKnbh/wells-chan-H-v-Axu-Wxmi8-unsplash.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="text-start col-lg-6 col-md-12 col-sm-12 pt-5 about_text_container">
						<div className="about_text">
							<h1 className="text-uppercase font_size_about font_bebas_about">
								About us
							</h1>
							<h1 className="text-uppercase font_size font_bebas_about about_yellow">
								we are here to dream!
							</h1>
							<h1 className="text-uppercase font_size font_bebas_about">
								our team is here to surve you.
							</h1>
							<p className="pe-4">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
								consequatur natus error praesentium accusamus veritatis, enim
								neque, modi atque tenetur inventore nemo earum vero quisquam,
								officiis aliquam cumque autem quia quam sint! Aperiam officiis
								sint mollitia assumenda magnam quos rem.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
