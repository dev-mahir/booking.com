import React from "react";
import { Link } from "react-router-dom";

const UserDropdown = () => {
	return (
		<div className="bg-white  py-3 rounded-sm shadow_1 min-w-[200px] absolute top-10 right-0">
			<Link
				to=""
				className="flex items-center gap-x-3 px-4 duration-300 py-1 hover:bg-gray-100">
				<i className="text-lg bx bx-user"></i>
				My account
			</Link>
			<Link
				to=""
				className="flex items-center gap-x-3 px-4 duration-300 py-1 hover:bg-gray-100">
				<i className="text-lg bx bx-bookmark"></i>
				Booking list
			</Link>
			<Link
				to=""
				className="flex items-center gap-x-3 px-4 duration-300 py-1 hover:bg-gray-100">
				<i className="text-lg bx bx-heart"></i>
				Saved
			</Link>
			<Link
				to=""
				className="flex items-center gap-x-3 px-4 duration-300 py-1 hover:bg-gray-100">
				<i className="bx text-lg bx-log-out-circle"></i>
				Logout
			</Link>
		</div>
	);
};

export default UserDropdown;
