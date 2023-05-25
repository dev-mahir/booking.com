import React from 'react'

const Gallery = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <div className='w-[49%]'>
        <img className='w-full' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/455559906.jpg?k=1c22a465eacb4cfc6a69926ca0aba0c9e93ece2d76cb4ca90a2e0e90a9e912a0&o=&hp=1" alt="" />
      </div>
      <div className='w-[49%]'>
        <img className='w-full' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/455559906.jpg?k=1c22a465eacb4cfc6a69926ca0aba0c9e93ece2d76cb4ca90a2e0e90a9e912a0&o=&hp=1" alt="" />
      </div>
      <div className='flex flex-wrap gap-x-2'>
        <img className='w-[170px]' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/455559906.jpg?k=1c22a465eacb4cfc6a69926ca0aba0c9e93ece2d76cb4ca90a2e0e90a9e912a0&o=&hp=1" alt="" />
        <img className='w-[170px]' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/455559906.jpg?k=1c22a465eacb4cfc6a69926ca0aba0c9e93ece2d76cb4ca90a2e0e90a9e912a0&o=&hp=1" alt="" />
        <img className='w-[170px]' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/455559906.jpg?k=1c22a465eacb4cfc6a69926ca0aba0c9e93ece2d76cb4ca90a2e0e90a9e912a0&o=&hp=1" alt="" />
      </div>
    </div>
  )
}

export default Gallery