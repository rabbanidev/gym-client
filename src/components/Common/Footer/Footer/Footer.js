import React from "react";
import { Link } from "react-router-dom";
import Connect from "../Connect/Connect";
import DigitalResource from "../DigitalResource/DigitalResource";
import NeedHelp from "../NeedHelp/NeedHelp";
import NewsLetter from "../Newsletter/NewsLetter";
import "./Footer.css";

const Footer = () => {
	return (
		<section className="footer">
			<div className="container text-start pt-5 pb-5">
				<div className="row">
					<div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 pb-4">
						<Link
							className="navbar-brand text-uppercase fs-3 text-light"
							to="/"
						>
							POWER <span className="span-x fw-bold">X</span>
						</Link>
					</div>
					<div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 pb-4">
						<NeedHelp />
					</div>
					<div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 pb-4">
						<DigitalResource />
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pb-4">
						<Connect />
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 pb-4">
						<NewsLetter />
					</div>
				</div>
			</div>
			<p className="text-center copyright m-0 pb-2">
				<small>
					<span>&#169;</span> 2021 Power X By Golam Rabbani.
				</small>
			</p>
		</section>
	);
};

export default Footer;
