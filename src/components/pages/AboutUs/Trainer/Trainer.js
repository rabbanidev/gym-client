import React from "react";
import trainers from "../../../../resource/FakeData/trainer.json";

const Trainer = () => {
	return (
		<section className="mt-5 pt-5">
			<h1 className="trainer_text">
				Our <span className="about_yellow">trainers</span>
			</h1>
			<div className="row mt-5">
				{trainers.map((trainer) => (
					<div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={trainer.id}>
						<div>
							<div className="card">
								<img className="card-img-top" src={trainer.image_link} alt="" />
								<div className="card-body">
									<h5 className="trainer_title">{trainer.position}</h5>
									<p className="card-text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Atque labore accusamus magnam expedita. Quam est numquam non
										laboriosam, esse laudantium.
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Trainer;
