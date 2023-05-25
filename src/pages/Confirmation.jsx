import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import ContactProperty from "../components/Confirmation/ContactProperty";
import ConfirmInfo from "../components/Confirmation/ConfirmInfo";

const Confirmation = () => {
	return (
		<>
			<Header />
			<div className="container py-14 flex gap-10">
				<div className="w-[70%]">
					<p className="text-emerald-800 py-3">Confirmed</p>
					<h3>Your booking in Cox's Bazar is confirmed.</h3>
					<div className="flex items-center gap-x-2">
						<i className="bx bx-check"></i>
						<p>
							Your confirmation is on its way to
							mdmahir.ds@gmail.com
						</p>
					</div>
					<div>
						<button className="btn btn-primary font-semibold mt-5">
							Print full version
						</button>
					</div>
					<div className="mt-5">
						<h4>Your booking summary</h4>
						<div className="mt-2 flex gap-5 border border-gray-200  shadow_1 rounded-md p-5 ">
							<img
								className="w-24 h-24 rounded-md"
								src="https://cf.bstatic.com/xdata/images/hotel/max300/283183777.webp?k=b9917a38d5b9cfb6149ae84ba04e4c87350cebee2a268d0d9c48c2827c305877&o="
								alt=""
							/>
							<div>
								<h5 className="font-semibold text-lg mb-2">
									Long Beach Hotel
								</h5>
								<div>
									<div className="flex gap-x-3 items-center">
										<i className="text-xl  bx bx-purchase-tag-alt"></i>
										<p>Total price: approx. BDT 7,991</p>
									</div>
									<div className="flex gap-x-3 items-center">
										<i className="text-xl  bx bx-purchase-tag-alt"></i>
										<p>
											Fri, May 26, 2023 - Sun, May 28,
											2023 , 2 nights
										</p>
									</div>
									<div className="flex gap-x-3 items-center">
										<i className="text-xl bx bx-bed"></i>
										<p> Premier Twin Room</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="w-[30%]">
                    <ConfirmInfo/>
					<ContactProperty/>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</>
	);
};

export default Confirmation;
