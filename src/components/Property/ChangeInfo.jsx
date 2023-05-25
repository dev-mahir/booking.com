import React, { useState } from 'react'
import { BsCalendar2Date } from 'react-icons/bs';
import { Calendar } from 'react-date-range';
import moment from 'moment/moment';
import RoomAdultsCount from '../RoomAdultsCount/RoomAdultsCount';

const ChangeInfo = () => {
  const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
  const [showStartDate, setShowStartDate] = useState(false);
  const [showRoom, setShowRoom] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const startDate = `${moment(bookingInfo.startDate).format('dddd')}, ${moment(bookingInfo.startDate).format("MMM D YYYY")}`

  const endDate = `${moment(bookingInfo.endDate).format('dddd')}, ${moment(bookingInfo.endDate).format("MMM D YYYY")}`


  const [search, setSearch] = useState({
    startDate: startDate,
    endDate: endDate,
    room: bookingInfo.room,
    children: bookingInfo.children,
    adults: bookingInfo.adults,
  })


  const handleChangeStartDate = (date) => {
    setSearch((prevState) => ({
      ...prevState,
      startDate: `${moment(date).format('dddd')}, ${moment(date).format("MMM D YYYY")}`
    }))
    setShowStartDate(!showStartDate);
  }

  const handleChangeEndDate = (date) => {
    setSearch((prevState) => ({
      ...prevState,
      endDate: `${moment(date).format('dddd')}, ${moment(date).format("MMM D YYYY")}`
    }))
    setShowEndDate(!showEndDate);
  }



  return (

    <div className='bg-yellow-500 px-3 py-2 rounded-md  flex gap-2 flex-col'>


      <div className='relative'>
        <label htmlFor="" className='text-xs mb-1 block'>Check-in date</label>
        <button onClick={() => setShowStartDate(!showStartDate)} className='rounded-md bg-white h-8 justify-between  px-3 w-full flex items-center focus:ring-2 ring-blue-500'>
          <div className='flex items-center gap-2'>
            <BsCalendar2Date size={20} />
            {search.startDate ? <span className='text-[13px]'>{search.startDate}</span> : <span className='text-[13px]'>{`${moment(Date.now()).format('dddd')}, ${moment(Date.now()).format("MMM D YYYY")}`}</span>}
          </div>
          <i className='bx text-lg bx-chevron-down'></i>
        </button>

        {showStartDate && <div className='absolute top-10 left-0 z-50'>
          <Calendar
            date={new Date(search.startDate)}
            className='rounded-md shadow-md'
            onChange={handleChangeStartDate}
          />
        </div>
        }


      </div>

      <div className='relative'>
        <label htmlFor="" className='text-xs mb-1 block'>Check-out date</label>
        <button onClick={() => setShowEndDate(!showEndDate)} className='rounded-md bg-white h-8 justify-between  px-3 w-full flex items-center focus:ring-2 ring-blue-500'>
          <div className='flex items-center gap-2'>
            <BsCalendar2Date size={20} />
            {search.endDate ? <span className='text-[13px]'>{search.endDate}</span> : <span className='text-[13px]'>{`${moment(Date.now()).format('dddd')}, ${moment(Date.now()).format("MMM D YYYY")}`}</span>}
          </div>
          <i className='bx text-lg bx-chevron-down'></i>
        </button>

        {showEndDate && <div className='absolute top-10 left-0'>
          <Calendar
            date={new Date(search.endDate)}
            className='rounded-md shadow-md'
            onChange={handleChangeEndDate}
          />
        </div>
        }


      </div>


      <div className='relative'>
        <label htmlFor="" className='text-xs mb-1 block'>1-night stay</label>
        <button onClick={() => setShowRoom(!showRoom)} className='rounded-md bg-white h-8 justify-between  px-3 w-full flex items-center focus:ring-2 ring-blue-500'>
          <div className='flex items-center gap-2'>
            <span className='text-[13px]'>{search.adults} adults • {search.children} • children • {search.room} room</span>
          </div>
          <i className='bx text-lg bx-chevron-down'></i>
        </button>


        {showRoom && <div className='absolute  top-14 left-0'>
          <RoomAdultsCount
            setSearch={setSearch}
            search={search}
            className="w-[300px]"
            hide={setShowRoom}
          />
        </div>}

      </div>
      <button className='btn btn-primary'>Search </button>
    </div>
  )
}

export default ChangeInfo