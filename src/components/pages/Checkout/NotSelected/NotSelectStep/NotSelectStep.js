import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NotSelectStep = ({ stepData }) => {
	return (
		<div>
			<h1>{stepData.heading}</h1>
			<div className="mt-5">
				<Link className="join font_bebas" to={stepData.path}>
					<button className="text-dark">
						<span>
							<FontAwesomeIcon icon={faArrowLeft} />
						</span>{" "}
						{stepData.buttonText}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NotSelectStep;
