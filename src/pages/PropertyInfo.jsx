import React from 'react'
import Gallery from '../components/Property/Gallery';
import { useParams } from 'react-router-dom';
import ChangeInfo from '../components/Property/ChangeInfo';
import Header from '../components/Header/Header';
import { MdLocationOn } from 'react-icons/md'
import Facilities from '../components/Property/Facilities';
import CheckAvailability from '../components/Property/CheckAvailability';
import { data } from '../data/db';



const PropertyInfo = () => {
  const { hotel_name } = useParams();

  const singleHotel = data.find(item => item.id == "0")
 
  return (
    <>
      <Header />
      <div className="container mt-10">
        <div className='flex gap-7'>
          <div className='basis-[260px] shrink-0 space-y-5'>
            <ChangeInfo />
            <Facilities />
          </div>
          <div className='flex-grow'>
            <h3>Studio apartment-Bashundhara R/A- Airport 5 KM</h3>
            <div className='flex gap-x-2 items-center pb-3'>
              <MdLocationOn className='text-xl text-primaryColor' />
              <span>iat Road, Dhaka, Banglade - </span>
              <button className='text-primaryColor font-semibold'> Show map  </button>
            </div>
            <Gallery />
          </div>
        </div>
        <div className='mt-20 pb-20'>
          <h3>Select your room</h3>
          
          <CheckAvailability data={singleHotel} />

        </div>
      </div>
    </>
  )
}


export default PropertyInfo;