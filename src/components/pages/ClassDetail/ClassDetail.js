import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import day1 from "../../../resource/FakeData/day1.json";
import day2 from "../../../resource/FakeData/day2.json";
import fakeData from "../../../resource/FakeData/fakeData.json";
import Header from "../../Common/Header/Header";
import "./ClassDetail.css";

const ClassDetail = () => {
	const { classId } = useParams();
	const classData = fakeData.find((item) => item.id === Number(classId));
	const { title, image_link } = classData;

	return (
		<section>
			<Header title={title} />
			<div className="container mt-5 mb-5">
				<div>
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12 p-3">
							<div>
								<div className="text-start classDetail_left">
									<div className="img_container">
										<img className="img-fluid" src={image_link} alt="" />
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Enim sint incidunt, voluptatibus magnam rerum fuga ratione
										suscipit provident odit impedit autem quasi voluptates!
										Culpa molestiae eos fuga expedita nam blanditiis natus
										ratione quibusdam quam incidunt? Rem cupiditate veritatis
										exercitationem sed sunt quisquam architecto fugiat iste,
										aperiam quis mollitia excepturi expedita consequuntur.
										Placeat quia odit doloremque inventore adipisci sapiente
										sint quis!
									</p>
									<ul className="class_detail_list">
										<li>
											<span>
												<FontAwesomeIcon icon={faCheckSquare} />
											</span>
											Having Slimmer Shapely Thighs
										</li>
										<li>
											<span>
												<FontAwesomeIcon icon={faCheckSquare} />
											</span>
											Getting Stronger Body
										</li>
										<li>
											<span>
												<FontAwesomeIcon icon={faCheckSquare} />
											</span>
											Increased Metabolism
										</li>
										<li>
											<span>
												<FontAwesomeIcon icon={faCheckSquare} />
											</span>
											Increased Muscular Endurance
										</li>
										<li>
											<span>
												<FontAwesomeIcon icon={faCheckSquare} />
											</span>
											Maximum Result in Less Time
										</li>
										<li>
											<span>
												<FontAwesomeIcon icon={faCheckSquare} />
											</span>
											Firm Hips and Tummy
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12 col-sm-12 p-3">
							<div className="text-start classDetail_right">
								<h1 className="text-uppercase font_size font_bebas_about">
									<span className="about_yellow">Class</span> Schedule
								</h1>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 xs-12">
										{day1.map((item) => (
											<div
												className="card border-light day_box mb-5 pt-3 pb-3"
												key={item.id}
											>
												<div className="card-body">
													<h4 className="fs-3">{item.day}</h4>
													<p className="time_text card-text">{item.time}</p>
												</div>
											</div>
										))}
									</div>

									<div className="col-lg-6 col-md-6 col-sm-6 xs-12">
										{day2.map((item2) => (
											<div
												className="card border-light day_box mb-5 pt-3 pb-3"
												key={item2.id}
											>
												<div className="card-body">
													<h4 className="fs-3">{item2.day}</h4>
													<p className="time_text card-text">{item2.time}</p>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className="class_join_container">
									<Link className="join join_class font_bebas" to="/pricing">
										<button>join us</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClassDetail;
