import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = ({ title }) => {
	return (
		<section className="common_header">
			<div className="container">
				<Nav />
				<div className="header_text d-flex align-items-center">
					<h1 className="text-uppercase text-center text-light">{title}</h1>
				</div>
			</div>
		</section>
	);
};

export default Header;
