import React from 'react'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import TermsCondition from '../components/Terms&Condition/TermsCondition';
=======
>>>>>>> bed4b0ce0fade2f9a6f2ed96180500eb60e7e1c6

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center flex-col items-center h-[80vh]'>
        <div className='max-w-[350px]'>
          <div className='flex flex-col'>
            <h3>Sign in or create an account</h3>
            <div className='flex flex-col mt-6'>
              <label htmlFor="">Email address</label>
              <input type="text" className='rounded-md' />
              <button className='btn btn-primary rounded-md py-3 mt-5'>Continue with email</button>
            </div>
          </div>
          <div className='mt-5 flex flex-col items-center'>
            <div className="divider !w-[300px]"></div>
            <p className=' text-gray-500 mb-3 -mt-[12px] text-center bg-white inline-block mx-auto'>or use one of these options</p>
            <div className='flex gap-x-3'>
              <button className='border border-borderColor h-10 w-10 justify-center items-center flex rounded-md'><i className='text-xl bx bxl-facebook'></i></button>
              <button className='border border-borderColor h-10 w-10 justify-center items-center flex rounded-md'><i className='text-xl bx bxl-google'></i></button>
              <button className='border border-borderColor h-10 w-10 justify-center items-center flex rounded-md'><i className='text-xl bx bx-phone'></i></button>
            </div>
            <div className="divider mt-10">   </div>
<<<<<<< HEAD

            







            <TermsCondition/>
            
=======
            <p className='text-xs py-3 text-center'>By signing in or creating an account, you agree with our <Link to="#" className="text-primaryColor">Terms & Conditions</Link> and <Link to="#" className="text-primaryColor">Privacy Statement</Link> </p>
>>>>>>> bed4b0ce0fade2f9a6f2ed96180500eb60e7e1c6
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
