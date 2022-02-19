import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./BottomTopBtn.css";

const BottomTopBtn = () => {
	const [topBtn, setTopBtn] = useState(false);

	window.onscroll = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setTopBtn(true);
		} else {
			setTopBtn(false);
		}
	};

	const bottomToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<>
			{topBtn && (
				<button onClick={bottomToTop} id="myBtn" title="Go to top">
					<FontAwesomeIcon icon={faArrowUp} />
				</button>
			)}
		</>
	);
};

export default BottomTopBtn;
