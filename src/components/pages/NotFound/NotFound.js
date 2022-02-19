import React from "react";
import Header from "../../Common/Header/Header";
import "./NotFound.css";

const NotFound = () => {
	return (
		<section className="mb-5 pb-5">
			<Header title={"opps!!! There are some problem"} />
			<div className="container">
				<div>
					<img
						className="img-fluid"
						src="https://i.ibb.co/XFMNLKY/undraw-page-not-found-su7k.png"
						alt=""
					/>
				</div>
				<h1 className="text-center">Page Not Found</h1>
			</div>
		</section>
	);
};

export default NotFound;
