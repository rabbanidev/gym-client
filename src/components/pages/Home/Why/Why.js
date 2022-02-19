import React from "react";
import "./Why.css";

const Why = () => {
	const why_data = [
		{
			id: 1,
			title: "free fitness training",
			image_link: "https://i.ibb.co/41JGc5Q/Group-87.png",
		},
		{
			id: 2,
			title: "tons of cardio & strength",
			image_link: "https://i.ibb.co/Q9rCrGs/Group-88.png",
		},
		{
			id: 3,
			title: "no commitment membership",
			image_link: "https://i.ibb.co/KVtMhg1/gift-2.png",
		},
	];

	return (
		<section className="mt-5 mb-5 pt-5 pb-5">
			<div className="container">
				<h1 className="text-uppercase font_size font_bebas_about">
					<span className="text_yellow">Why</span> choose us
				</h1>
				<div className="pt-5">
					<div className="row">
						{why_data.map((item) => (
							<div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
								<div>
									<div className="card why_card mb-5">
										<div className="card-body p-2">
											<img className="why_image" src={item.image_link} alt="" />
											<h2 className="text-uppercase font_bebas_about">
												{item.title}
											</h2>
											<p className="card-text p-3">
												Lorem ipsum, dolor sit amet consectetur adipisicing
												elit. Voluptates eius delectus fuga soluta blanditiis
												facilis quae quaerat obcaecati placeat unde?
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Why;
