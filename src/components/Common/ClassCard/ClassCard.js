import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./ClassCard.css";

const ClassCard = ({ cardData, classPage }) => {
	return (
		<div>
			<div className="card training_card border-0">
				<img
					className="card-img rounded-0 training_img"
					src={cardData?.image_link}
					alt="Card"
				/>
				<div className="card-img-overlay ps-0 d-flex align-items-end mb-5">
					<Link to={classPage ? "/classes" : `/class/${cardData.id}`}>
						<div className="bg_yellow text-uppercase d-flex justify-content-between">
							<h2>{cardData?.title}</h2>
							<span>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ClassCard;
