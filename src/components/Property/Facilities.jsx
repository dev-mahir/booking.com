import React from 'react';
import { AiOutlineEye } from 'react-icons/ai'
import { FaSwimmer } from 'react-icons/fa'

const Facilities = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <div className='flex  items-center border border-borderColor rounded-md  px-5 py-2 gap-2'>
        <AiOutlineEye size={20} />
        <p>View</p>
      </div>

      <div className='flex  items-center border border-borderColor rounded-md  px-5 py-2 gap-2'>
        <i className='text-lg bx bxs-florist'></i>
        <p>Garden</p>
      </div>

      <div className='flex  items-center border border-borderColor rounded-md  px-5 py-2 gap-2'>
        <FaSwimmer size={20} />
        <p>Swimming pool</p>
      </div>

      <div className='flex  items-center border border-borderColor rounded-md  px-5 py-2 gap-2'>
        <i className='text-xl bx bx-wifi' ></i>
        <p>Free wifi</p>
      </div>
      <div className='flex  items-center border border-borderColor rounded-md  px-5 py-2 gap-2'>
        <i className='text-xl bx bx-wifi' ></i>
        <p>Air conditioning</p>
      </div>
    </div>
  )
}

export default Facilities