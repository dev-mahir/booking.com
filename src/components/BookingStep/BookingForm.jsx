import React from 'react'

const BookingForm = () => {
  return (
    <div className='border border-borderColor rounded-md p-5 mt-5 bg-gray-50'>
      <form action="">
        <div className='flex gap-x-2 mb-3'>
          <div className='w-full'>
            <label htmlFor="" className='font-medium mb-1'>First Name </label>
            <input type="text" className='py-2 rounded-md' />
          </div>
          <div className='w-full'>
            <label htmlFor="" className='font-medium mb-1'>Last Name </label>
            <input type="text" className='py-2 rounded-md' />
          </div>
        </div>
        <div className='flex gap-x-2 mb-3'>
          <div className='w-full'>
            <label htmlFor="" className='font-medium mb-1'>Email </label>
            <input type="email" className='py-2 rounded-md' />
          </div>
          <div className='w-full'>
            <label htmlFor="" className='font-medium mb-1'>Phone </label>
            <input type="phone" className='py-2 rounded-md' />
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="" className='font-medium mb-1'>Phone </label>
          <input type="text" className='py-2 rounded-md' />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default BookingForm;