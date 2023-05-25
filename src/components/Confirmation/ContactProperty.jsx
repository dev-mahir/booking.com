import React from "react";
import { Link } from "react-router-dom";

const ContactProperty = () => {
	return (
		<div className="border border-gray-200 p-3 mt-5 rounded-sm">
			<h4>Contact property</h4>
			<p>Got a question or need to arrange something for your stay?</p>
			<div className="flex items-center gap-x-2 mt-3">
				<i className="text-lg bx bx-envelope"></i>
				<Link to="" className="text-primaryColor font-semibold">
					Send an email
				</Link>
			</div>
			<div className="flex items-center gap-x-2">
				<i className="text-lg bx bx-phone-call"></i>
				<Link to="" className="text-primaryColor font-semibold">
					01868944080
				</Link>
			</div>
		</div>
	);
};

export default ContactProperty;
