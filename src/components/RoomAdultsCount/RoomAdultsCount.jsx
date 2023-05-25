import React from 'react'

const RoomAdultsCount = ({ setSearch, search, className, hide }) => {
  return (
    <div className={`shadow-md bg-white rounded-md px-5 py-5 flex flex-col gap-2 ${className}`}>
      <div className='flex justify-between items-center'>
        <p>Rooms</p>
        <div className='flex border w-28 justify-between items-center border-borderColor rounded-md py-1'>
          <button disabled={search.room === 1} onClick={() => setSearch({ ...search, room: search.room - 1 })} className={`px-3 ${search.room === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}><i className='bx bx-minus text-xl'></i></button>
          <span className='px-2'>{search.room}</span>
          <button onClick={() => setSearch({ ...search, room: search.room + 1 })} className='px-3'><i className='bx bx-plus text-xl'></i></button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p>Adults</p>
        <div className='flex border w-28 justify-between items-center border-borderColor rounded-md py-1'>
          <button disabled={search.adults === 1} onClick={() => setSearch({ ...search, adults: search.adults - 1 })} className={`px-3 ${search.adults === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}><i className='bx bx-minus text-xl'></i></button>
          <span className='px-2'>{search.adults}</span>
          <button onClick={() => setSearch({ ...search, adults: search.adults + 1 })} className='px-3'><i className='bx bx-plus text-xl'></i></button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p>Childrens</p>
        <div className='flex w-28 border justify-between items-center border-borderColor rounded-md py-1'>
          <button disabled={search.children === 0} onClick={() => setSearch({ ...search, children: search.children - 1 })} className={`px-3 ${search.children === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}><i className='bx bx-minus text-xl'></i></button>
          <span className=''>{search.children}</span>
          <button onClick={() => setSearch({ ...search, children: search.children + 1 })} className='px-3'><i className='bx bx-plus text-xl'></i></button>
        </div>
      </div>


      <div className='mt-3'>
        <button onClick={() => hide(false)} className='btn btn-primary-outline w-full'> Done </button>
      </div>



    </div>
  )
}

export default RoomAdultsCount