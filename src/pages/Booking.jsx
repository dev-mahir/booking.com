import React from 'react'
import Header from '../components/Header/Header'
import BookingDetails from '../components/BookingStep/BookingDetails'
import PropertyInfo from '../components/BookingStep/PropertyInfo'
import BookingForm from '../components/BookingStep/BookingForm'


const Booking = () => {
  return (
    <>
      <Header />
      <div className='container py-10'>
        <div className='flex  gap-5'>
          <div className='basis-[350px]'>
            <BookingDetails />
            <div className='border border-borderColor p-5 rounded-md mt-5'>
              <h5 className='font-semibold'>Your payment schedule</h5>
              <p className='text-xs text-emerald-600'>No payment today. You'll pay when you stay.</p>
            </div>
          </div>
          <div className='flex-grow'>
            <PropertyInfo />
            <BookingForm />
            <div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Booking