import React from 'react'

const BookingDetails = () => {
  return (
    <div className='border border-borderColor p-5 rounded-md'>
      <h5 className='font-semibold text-lg'>Your booking details</h5>
      <div className='flex justify-between mb-4 mt-2'>
        <div>
          <p>Check-in</p>
          <p className='font-semibold'>Fri, May 26, 2023</p>
        </div>
        <div>
          <p>Check-in</p>
          <p className='font-semibold'>Fri, May 26, 2023</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <p className='text-xs'>Total length of stay:</p>
          <p className='font-semibold'>1 day</p>
        </div>
        <div>
          <p className='text-xs'>Total price:</p>
          <p className='font-semibold'>BDT 4000</p>
        </div>
     </div>
      <div className="divider my-2"></div>
      <p className='font-semibold'>You selected:</p>
      <p className='text-xs'>2 x One-Bedroom Apartment </p>

      <button className='text-primaryColor mt-3'>Change your selection</button>

    </div>
  )
}

export default BookingDetails