import React from "react";
import gymImage from "../../../../resource/FakeData/gymImage.json";
import "./OurGym.css";

const OurGym = () => {
	return (
		<section className="mt-5 mb-5">
			<div className="container">
				<div>
					<h1 className="trainer_text">
						we have <span className="about_yellow">best resource</span> for you
					</h1>
					<h2 className="tryout_text">Tryout us</h2>
					<div className="mt-3">
						<div className="row">
							{gymImage.map((image) => (
								<div
									className="col-lg-4 col-md-6 col-sm-12 div_contain"
									key={image.id}
								>
									<div className="img_container mb-3">
										<img className="image" src={image.image_link} alt="" />
										<div className="img_overlay">
											<div className="overlay_text">{image.id}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurGym;
