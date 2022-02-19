import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../Common/Nav/Nav";
import "./HeroArea.css";

const HeroArea = () => {
	return (
		<section className="hero-area">
			<div className="container">
				<Nav />

				<div className="desktop_padding">
					<div className="row">
						<div className="col-md-12 col-lg-6 col-sm-12 pe-5">
							<div className="text-start mt-5 mb-5 header_left">
								<h1 className="text-uppercase font_bebas">
									The Best Fitness <br /> Stdio in town
								</h1>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Deserunt odit reprehenderit asperiores aliquam. Accusamus, ea.
									Libero odio ducimus quos sapiente animi at iure, consequatur
									maiores culpa magnam necessitatibus, harum quam.
								</p>
								<Link className="join font_bebas" to="/pricing">
									<button>join us</button>
								</Link>
							</div>
						</div>
						<div className="col-md-12 col-lg-6 col-sm-12 d-flex align-items-center pb-2 desktop">
							<div>
								<img
									className="img-fluid"
									src="https://i.ibb.co/5rDLd3Y/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroArea;
