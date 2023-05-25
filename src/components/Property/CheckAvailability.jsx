import { tr } from 'date-fns/locale';
import React from 'react'

const CheckAvailability = ({ data }) => {

  const rooms = data.properties.map(item => item.rooms[0])


  return (
    <div class="relative overflow-x-auto mt-2">
      <table class="w-full text-sm text-left border border-borderColor">
        <thead class="text-sm   bg-primaryColor/75 text-white px-3">
          <tr>
            <th className='py-3 px-3 border border-borderColor'> Apartment Type </th>
            <th className='py-3 px-3 border border-borderColor'> Today's Price  </th>
            <th className='py-3 px-3 border border-borderColor'>  	Your Choices  </th>
            <th className='py-3 px-3 border border-borderColor'>  Select  </th>
          </tr>
        </thead>
        <tbody>

          {
            rooms.map((room, index) =>
              <tr key={index}>
                <td className='border border-borderColor px-3 py-3'>
                  <h4 className='text-base'>{room.name}</h4>
                  <p className='text-xs'>{room.bed}</p>
                </td>
                <td className='border border-borderColor px-3 py-3'>
                  <p className='font-semibold'>BDT {room.newPrice}</p>
                </td>
                <td className='border border-borderColor px-3 py-3'>
                  <div>
                    <p className='text-emerald-600 text-xs flex items-center gap-x-2'>
                      <i className='text-xl bx bx-check'></i> <b>Free cancellation</b> before May 25, 2023 </p>
                    <p className='text-emerald-600 text-xs flex items-center gap-x-2'>
                      <i className='text-xl bx bx-check'></i>
                      {room.payment} </p>
                  </div>
                </td>
                <td className='border border-borderColor px-3 py-3'>
                  <button className='btn btn-primary-outline'>Reserve</button>
                </td>
              </tr>
            )
          }



        </tbody>
      </table>
    </div>
  )
}

export default CheckAvailability