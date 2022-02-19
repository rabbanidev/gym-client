import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../../../../App";

const UserForm = () => {
	const history = useHistory();
	const { userDetail, setUserDetail } = useContext(UserContext);
	const [birthday, setBirthday] = useState(userDetail?.dateOfBarth);
	const [gender, setGender] = useState(userDetail?.gender);

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		if (gender) {
			if (birthday) {
				data.dateOfBarth = birthday;
				data.gender = gender;
				setUserDetail(data);
				sessionStorage.setItem("userDetail", JSON.stringify(data));
				history.push("/checkout/payment");
			} else {
				window.alert("Please select your Date of Birth");
			}
		} else {
			window.alert("Please select your Gender");
		}
	};

	return (
		<div>
			<div className="ms-auto me-auto form_container">
				<form onSubmit={handleSubmit(onSubmit)} className="row g-3 p-3">
					<div className="col-md-6 input_container text-start">
						<label htmlFor="inputFirstName">First Name</label>
						<input
							type="text"
							name="firstName"
							spellCheck="true"
							className="form_input"
							id="inputFirstName"
							defaultValue={userDetail?.firstName}
							ref={register({ required: true })}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							name="lastName"
							spellCheck="true"
							className="form_input"
							id="lastName"
							defaultValue={userDetail?.lastName}
							ref={register({ required: true })}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="inputEmail4">Email</label>
						<input
							type="email"
							name="email"
							spellCheck="true"
							className="form_input"
							id="inputEmail4"
							defaultValue={userDetail?.email}
							ref={register({ required: true })}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="mobile">Mobile Number</label>
						<input
							type="number"
							min="0"
							name="mobile"
							className="form_input"
							id="mobile"
							defaultValue={userDetail?.mobile}
							ref={register({ required: true })}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="gender">Gender</label>
						<select
							className="form_input"
							name="gender"
							id="gender"
							onChange={(e) => setGender(e.target.value)}
						>
							<option
								selected={userDetail?.gender === "" && "selected"}
							></option>
							<option
								value="male"
								selected={userDetail?.gender === "male" && "selected"}
							>
								Male
							</option>
							<option
								value="female"
								selected={userDetail?.gender === "female" && "selected"}
							>
								Female
							</option>
							<option
								value="others"
								selected={userDetail?.gender === "others" && "selected"}
							>
								Others
							</option>
						</select>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="dateOfBarth">Date of Birth</label>
						<DayPickerInput
							onDayChange={(date) => setBirthday(date.toLocaleDateString())}
							selectedDays={userDetail?.dateOfBarth}
							placeholder={userDetail?.dateOfBarth}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="address">Address</label>
						<input
							type="text"
							name="address"
							spellCheck="true"
							className="form_input"
							id="address"
							defaultValue={userDetail?.address}
							ref={register({ required: true })}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="country">Country/Region:</label>
						<input
							type="text"
							name="countryOrRegion"
							className="form_input"
							id="country"
							spellCheck="true"
							defaultValue={userDetail?.countryOrRegion}
							ref={register({ required: true })}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="city">City:</label>
						<input
							type="text"
							name="city"
							spellCheck="true"
							className="form_input"
							id="city"
							defaultValue={userDetail?.city}
							ref={register({ required: true })}
						/>
					</div>

					<div className="col-md-6 input_container text-start">
						<label htmlFor="postCode">Postcode</label>
						<input
							type="Number"
							name="postCode"
							min="0"
							className="form_input"
							id="postCode"
							defaultValue={userDetail?.postCode}
							ref={register({ required: true })}
						/>
					</div>
					<div className="col-md-6 input_container text-end"></div>
					<div className="col-md-6 mt-5 input_container text-end">
						<button className="next_btn" type="submit">
							Next <FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserForm;
