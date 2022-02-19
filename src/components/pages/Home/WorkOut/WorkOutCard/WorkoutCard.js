import React from "react";
import "./workoutCard.css";

const WorkoutCard = ({ item }) => {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12">
			<div className="card work-card bg-dark text-white mt-3 mb-3">
				<img src={item.bg_image} className="card-img my_img" alt="..." />
				<div className="card-img-overlay card_img mt-auto d-flex align-items-end">
					<div className="pb-4 p-4">
						<img className="pb-4" src={item.icon} alt="" />
						<h2
							className="card-title text-uppercase fs-1 pt-2 pb-2 font_bebas"
							style={{ color: item.t_color }}
						>
							{item.title}
						</h2>
						<p className="card-text">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
							alias dolores autem laborum dolorem nihil ad?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkoutCard;
