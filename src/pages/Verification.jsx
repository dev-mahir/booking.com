import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TermsCondition from "../components/Terms&Condition/TermsCondition";

const Verification = () => {
	return (
		<>
			<Header />
			<div className="container py-14">
				<div className="flex justify-center items-center flex-col max-w-[400px] mx-auto">
					<h4>Check your inbox</h4>
					<p className="text-center py-5 text-[13px]">
						We just emailed a verification link to
						<b> mdmahir.ds@gmail.com</b>. Once it arrives, it will
						be valid for 10 minutes.
					</p>
					<button className="btn btn-primary-outline font-semibold w-full mb-5">
						Back to sign-in
					</button>
					<div className="divider"></div>
					<TermsCondition />
					<div className="divider"></div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Verification;
