import React from "react";
import fakeData from "../../../resource/FakeData/fakeData.json";
import ClassCard from "../../Common/ClassCard/ClassCard";
import Header from "../../Common/Header/Header";

const OurClass = () => {
	const headerTitle = "our classes";

	return (
		<section>
			<Header title={headerTitle} />
			<div className="container mt-5 mb-5">
				<div className="">
					<div className="row">
						{fakeData?.map((item) => (
							<div
								className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5"
								key={item.id}
							>
								<div>
									<ClassCard cardData={item} classPage={false} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurClass;
