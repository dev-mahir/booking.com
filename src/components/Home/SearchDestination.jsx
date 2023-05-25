import React, { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays, subDays } from "date-fns";
import moment from "moment";
import { destination } from '../../data/db';
import { useNavigate } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';



const SearchDestination = () => {
  const [showCalender, setShowCalender] = useState(false);
  const [showDestination, setShowDestination] = useState(false)
  const [showRoom, setShowRoom] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const locationRef = useRef(null);

  const [search, setSearch] = useState({
    destination: "",
    adults: 2,
    children: 0,
    room: 1,
    startDate: "",
    endDate: ""
  });



  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ]);

  const handleDestination = (location) => {
    setSearch({ ...search, destination: location.name })
    setShowDestination(false)
  }



  const handleSetDate = () => {
    setSearch((prevState) => ({
      ...prevState,
      startDate: state[0].startDate,
      endDate: state[0].endDate
    }))
    setShowCalender(false);
  }


  const handleSearch = () => {
    if (search.destination === "") {
      setError(true)
    } else {
      const baseUrl = '/searchresults';
      const searchParams = new URLSearchParams({
        startDate: moment(state[0].startDate).format(),
        endDate: moment(state[0].endDate).format(),
        destination: search.destination,
        adults: search.adults,
        children: search.children,
        room: search.room
      });
      const url = `${baseUrl}?${searchParams}`;
      localStorage.setItem('bookingInfo', JSON.stringify(search))
      navigate(url);
    }
  }



  return (
    <>
      <div>
        <div className='flex items-center gap-x-1 mt-5 bg-yellow-400 rounded-md px-2 py-1'>

          {/* destination  */}
          <div ref={locationRef} className='flex-grow relative'>
            <div onClick={() => setShowDestination(!showDestination)} className='border  cursor-pointer  border-borderColor flex items-center py-[6px] pl-2  bg-f5 rounded-md'>
              <i className='text-2xl bx bx-bed text-gray '></i>
              {search.destination === "" ? <p className='px-3 text-gray select-none'>Where are you going?</p> : <p className='px-3 text-gray select-none'>{search.destination}</p>}

            </div>
            {error && <div className='absolute top-10 left-2'>
              <p className='__tooltip text-[12px] bg-red-500 text-white px-3 py-1 rounded-sm'>Enter a destination to start searching</p>
            </div>}

            {showDestination &&
              <div  className='shadow-md bg-white rounded-md   divide-y divide-lightGray absolute top-[46px] w-full left-0'>
              {
                destination.map((item, index) =>
                  <button key={index} onClick={() => handleDestination(item)} className='flex items-center gap-x-3 font-medium w-full cursor-pointer py-3 duration-300 px-5 hover:bg-lightGray '>
                    <MdOutlineLocationOn className='text-xl' />
                    {item.name}
                  </button>
                )
              }
            </div>}

          </div>


          <div onClick={() => setShowCalender(!showCalender)} className='bg-f5 rounded-md border cursor-pointer flex-grow  border-borderColor flex items-center py-[6px] pl-2'>
            <i className='bx bx-calendar text-2xl text-gray' ></i>

            {search.startDate === "" ? <p className='px-3 text-gray'>Check-in Date -- Check-out Date</p> : <p className='px-3 text-gray'>{moment(state[0].startDate).format('LL')} --  {moment(state[0].endDate).format('LL')} </p>}

          </div>
          <div className='flex-grow relative'>
            <div onClick={() => setShowRoom(!showRoom)} className='bg-f5 rounded-md  border cursor-pointer flex-grow  border-borderColor flex items-center py-[6px] pl-2'>
              <i className='bx bx-calendar text-2xl text-gray' ></i>
              <p className='px-3 text-gray' >{search.room} room  ∙  {search.adults} adults ∙  {search.children} Children</p>
            </div>
            {showRoom &&
              <div className='shadow-md bg-white rounded-md  absolute top-[46px] w-full left-0 px-10 py-5 space-y-2'>

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

            </div>
            }
          </div>
          <div>
            <button onClick={handleSearch} className='btn btn-primary rounded-md py-[13px] font-semibold'>Search</button>
          </div>
        </div>
      </div>

      {showCalender &&
        <div className=''>
          <div className='mx-auto w-auto'>
            <DateRangePicker
              onChange={item => setState([item.selection])}
              showSelectionPreview={true}
              months={2}
              ranges={state}
              direction="horizontal"
            />
            <div className=" gap-x-3 flex">
              <button onClick={handleSetDate} className='font-semibold text-blue-600'>
                Done
              </button>
              <button className='font-semibold  text-red-600'>
                Clear
              </button>
            </div>
          </div>
        </div>
      }


    </>

  )
}

export default SearchDestination