import React from "react";
import { Link } from "react-router-dom";

const TermsCondition = () => {
	return (
		<p className="text-xs py-3 text-center">
			By signing in or creating an account, you agree with our{" "}
			<Link to="#" className="text-primaryColor">
				Terms & Conditions
			</Link>
			and
			<Link to="#" className="text-primaryColor">
				Privacy Statement
			</Link>
		</p>
	);
};

export default TermsCondition;
