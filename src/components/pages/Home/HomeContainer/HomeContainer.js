import React from "react";
import About from "../About/About";
import HeroArea from "../HeroArea/HeroArea";
import Training from "../Training/Training";
import Why from "../Why/Why";
import WorkOut from "../WorkOut/WorkOut/WorkOut";

const HomeContainer = () => {
	return (
		<section>
			<HeroArea />
			<WorkOut />
			<About />
			<Training />
			<Why />
		</section>
	);
};

export default HomeContainer;
