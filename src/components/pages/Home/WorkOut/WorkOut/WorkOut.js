import React from "react";
import WorkoutCard from "../WorkOutCard/WorkoutCard";

const WorkOut = () => {
	const workoutData = [
		{
			id: 1,
			title: "progression",
			bg_image:
				"https://i.ibb.co/rvsJsZb/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg",
			icon: "https://i.ibb.co/ftJ4zJ7/Group-80.png",
			t_color: " #fff",
		},
		{
			id: 2,
			title: "workout",
			bg_image:
				"https://i.ibb.co/yg2Nqdn/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg",
			icon: "https://i.ibb.co/5KBZKGJ/Group-81.png",
			t_color: " #fcd842",
		},
		{
			id: 3,
			title: "nutrition",
			bg_image:
				"https://i.ibb.co/zJP8N6d/penguinuhh-8-VI6-Ww-EEEHw-unsplash.jpg",
			icon: "https://i.ibb.co/NyY764Y/Group-82.png",
			t_color: " #fff",
		},
	];

	return (
		<section>
			<div className="container mt-5 mb-5 pt-5 pb-5">
				<div>
					<div className="row">
						{workoutData.map((item) => (
							<WorkoutCard key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkOut;
