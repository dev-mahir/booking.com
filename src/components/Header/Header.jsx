import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

const Header = ({ className }) => {
	const [modalShow, setModalShow] = useState(false);

	const auth = true;

	const toggleModal = () => {
		setModalShow((prevModalShow) => !prevModalShow); // Toggle the modal state
	};

	return (
		<header className={`py-5  bg-[#003b95] ${className}`}>
			<div className="container flex justify-between">
				<div>
					<Link
						to="/"
						className="text-white font-primaryFont text-xl font-semibold">
						Booking.com
					</Link>
				</div>
				<div className="flex gap-x-3">
					{!auth && (
						<>
							<button className="btn">Register</button>
							<button className="btn">Sign in</button>
						</>
					)}
					{auth && (
						<div className="relative" onClick={toggleModal}>
							<button className="flex items-center gap-x-2">
								<img
									className="w-8 h-8 border-2 border-yellow-500 object-cover rounded-full cursor-pointer"
									src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
									alt=""
								/>
								<p className="text-white">Md Mahir</p>
							</button>
							{modalShow &&  <UserDropdown/>}
						</div>
					)}
					<button className="hidden">
						<i className="bx bx-menu text-3xl"></i>
					</button>
				</div>
<<<<<<< HEAD
				
=======
>>>>>>> bed4b0ce0fade2f9a6f2ed96180500eb60e7e1c6
			</div>
		</header>
	);
};

export default Header;
