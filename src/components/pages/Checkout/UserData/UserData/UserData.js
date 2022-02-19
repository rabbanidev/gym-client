import React from "react";
import Header from "../../../../Common/Header/Header";
import Step from "../../Step/Step";
import UserForm from "../UserForm/UserForm";
import "./UserData.css";

const UserData = () => {
	return (
		<section>
			<Header title={"Your gym membership"} />
			<div className="container">
				<div>
					<Step />
					<UserForm />
				</div>
			</div>
		</section>
	);
};

export default UserData;
