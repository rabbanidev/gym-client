import React from "react";
import { Link } from "react-router-dom";

const Coaches = () => {
	return (
		<section className="mt-5 mb-5">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 p-3">
					<div className="text-start coach_text_container">
						<h6 className="coach_title">professional coaches</h6>
						<h1 className="coach_train">Your Training</h1>
						<p className="fw-bold">
							Lorem ipsum dolor sit amet consectetur adipisicing, elit.
							<br />
							Eius aliquam impedit, deleniti est provident dicta.
						</p>
						<p className="coach_text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
							assumenda nesciunt aperiam placeat, qui facilis. Itaque placeat
							aliquam aliquid? Omnis, illum rem nemo facere fugiat reiciendis
							tenetur doloremque cumque explicabo Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Alias, excepturi..
						</p>
						<div className="mt-5">
							<Link className="join font_bebas" to="/pricing">
								<button className="text-dark">join us</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 p-3">
					<div className="coaches_img">
						<img
							className="img-fluid"
							src="https://i.ibb.co/BBbHZQp/damir-spanic-hp3y7-G7-TALI-unsplash.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Coaches;
