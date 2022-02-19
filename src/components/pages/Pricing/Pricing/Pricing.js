import React from "react";
import plans from "../../../../resource/FakeData/plans.json";
import Header from "../../../Common/Header/Header";
import PricingCard from "../PricingCard/PricingCard";
import "./Pricing.css";

const Pricing = () => {
	const headerTitle = "pricing plans";

	return (
		<section>
			<Header title={headerTitle} />
			<div className="container mt-5 mb-5 pb-5">
				<div>
					<div>
						<h1 className="text-uppercase fs-1 font_bebas_about">
							<span className="text_yellow">choose the offer </span>
							that suits you
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
							qui eos ipsam reiciendis nulla voluptatum.
						</p>
					</div>
					<div className="mt-5">
						<div className="row">
							{plans.map((plan) => (
								<div
									className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-light"
									key={plan.id}
								>
									<PricingCard plan={plan} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
