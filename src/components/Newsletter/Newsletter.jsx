<<<<<<< HEAD
import React, { useState, useRef } from "react";
import { checkEmail } from "../../utilis/validation";
import toast from "react-hot-toast";

const Newsletter = () => {
	const [email, setEmail] = useState("");
	const inputRef = useRef(null);

	const handleSubscribe = () => {
		if (!email) {
			toast.error("Please enter a valid email");
		} else {
			if (checkEmail(email)) {
				toast.success("Subscribed");
				setEmail("");
			} else {
				toast.error("Please enter a valid email");
			}
		}
	};

	return (
		<div className="bg-darkblue py-14">
			<div className="flex flex-col items-center">
				<h3 className="text-white font-normal">
					Save time, save money!
				</h3>
				<p className="text-gray-300 pb-5 ">
					Sign up and we'll send the best deals to you
				</p>
				<div className="flex flex-col items-start">
					<div className="flex">
						<input
							ref={inputRef} // corrected ref attribute
							type="text"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							className="w-[300px] rounded-tl-md rounded-bl-md"
							placeholder="Your email address"
						/>
						<button
							onClick={handleSubscribe}
							className="btn btn-primary rounded-tr-md rounded-br-md">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
=======
import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-darkblue py-14'>
      <div className='flex flex-col items-center'>
        <h3 className='text-white font-normal'>Save time, save money!</h3>
        <p className='text-gray-300 pb-5 '> Sign up and we'll send the best deals to you </p>
        <div className='flex '>
          <input type="text" className='w-[300px] rounded-tl-md rounded-bl-md' placeholder='Your email address' />
          <button className='btn btn-primary rounded-tr-md rounded-br-md'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
>>>>>>> bed4b0ce0fade2f9a6f2ed96180500eb60e7e1c6
