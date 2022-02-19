import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	let path = "/";
	if (typeof (window.location !== undefined)) {
		path = window.location.pathname;
	}

	return (
		<div className="pt-2">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<Link className="navbar-brand text-uppercase fs-3 text-light" to="/">
						POWER <span className="span-x fw-bold">X</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span>
							<FontAwesomeIcon icon={faBars} />
						</span>
					</button>
					<div className="collapse navbar-collapse my_nav" id="navbarText">
						<ul className="navbar-nav ms-auto d-flex align-items-center">
							<li
								className={
									path === "/" || path === "/home" || path === "/home/"
										? "activeBtn"
										: " "
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									path === "/classes" || path === "/classes/"
										? "activeBtn"
										: " "
								}
							>
								<Link to="/classes">Our Classes</Link>
							</li>
							<li
								className={
									path === "/pricing" || path === "/pricing/"
										? "activeBtn"
										: " "
								}
							>
								<Link to="/pricing">Pricing</Link>
							</li>
							<li
								className={
									path === "/about" || path === "/about/" ? "activeBtn" : " "
								}
							>
								<Link to="/about">About Us</Link>
							</li>
							<li
								className={
									path === "/contact" || path === "/contact/"
										? "activeBtn"
										: " "
								}
							>
								<Link to="/contact">Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
