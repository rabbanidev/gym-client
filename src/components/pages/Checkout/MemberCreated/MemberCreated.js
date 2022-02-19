import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Common/Header/Header";
import Step from "../Step/Step";

const MemberCreated = () => {
	return (
		<section>
			<Header title={"Your gym membership"} />
			<div className="container">
				<div>
					<Step />
				</div>
				<div className="mt-5 mb-5 pb-5">
					<h1>
						Congratulation. Your{" "}
						<span className="about_yellow">Membership</span> Created
					</h1>
					<h2>Thanks For Staying With Us</h2>
					<div className="mt-5 mb-5">
						<Link to="/" className="join join_class font_bebas">
							<button>
								<FontAwesomeIcon icon={faHome} /> Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MemberCreated;
