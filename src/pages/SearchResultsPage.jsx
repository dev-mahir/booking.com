import React from 'react'
import PropertyCard from '../components/Property/PropertyCard';
import Filter from '../components/Search/Filter';
import Header from '../components/Header/Header';
import SearchDestination from '../components/Home/SearchDestination';
import { data } from '../data/db';


const SearchResultsPage = () => {
  const searchParams = new URLSearchParams(location.search);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const destination = searchParams.get('destination');
  const adults = searchParams.get('adults');
  const children = searchParams.get('children');
  const room = searchParams.get('room');






  return (
    <>

      <Header className="pb-32" />
      <div className='container  -mt-14'>
        <SearchDestination />
      </div>
      <div className="container mt-10">
        <div className='flex gap-x-3'>
          <div className='basis-[250px]'>
            <Filter />
          </div>
          <div className='flex-grow'>
            <PropertyCard data={data} />
          </div>
        </div>
      </div>
    </>

  )
}

export default SearchResultsPage