import React from 'react'
import { rating } from "../../utilis/rating.js";
import { Link } from 'react-router-dom';



const PropertyCard = ({ data }) => {
  return (
    <>
      {
        data.map((item, index) => item.properties.map((property, index) =>
          <div key={index} className='flex  justify-between border border-borderColor p-5 rounded-md'>
            <div className='flex gap-x-4'>
              <img className='rounded-md w-[300px] h-[200px] object-cover' src={property.image} alt="" />
              <div>
                <h4 className='text-primaryColor'>{property.name}</h4>
                <div className='flex'>
                  {rating(2)}
                </div>
                <div className="flex flex-col items-start mt-2">
                  <button className="text-xs">{property.address}</button>
                  <button className="text-xs text-primaryColor underline"> Show on map</button>
                </div>
                <div className='border-l-2 border-borderColor pl-2 mt-4'>
                  {/* <p className='font-semibold'>Budget Double Room</p>
                  <p className='text-xs'>1 twin bed</p> */}
                  <p className='text-emerald-700 font-semibold text-xs mt-2
        '>Free cancellation • No prepayment needed</p>
                  <p className='text-emerald-700  text-xs 
        '>You can cancel later, so lock in this great price today</p>
                </div>
              </div>
            </div>
            <div className='text-end'>
              <div className='flex items-center gap-x-2 justify-end'>
                <div>
                  <p>Very Good</p>
                  <p className='text-xs' >{property.reviews} reviews</p>
                </div>
                <p className='text-white bg-darkblue p-[6px] rounded-tl-md rounded-tr-md rounded-br-md'>{property.rating}</p>
              </div>
              <p className='text-xs  mt-3'>1 night, 2 adults</p>
              <p className='text-xl'>BDT {property.newPrice}</p>
              <Link to={`/property/${property.name}`} className='btn btn-primary mt-3'>See availability</Link>
            </div>
          </div >
        ))
      }
    </>





  )
}

export default PropertyCard