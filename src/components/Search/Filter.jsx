import React from 'react'

const Filter = () => {
  const rating = [1, 2, 3, 4, 5];
  const priceRange = [
    {
      min: 0,
      max: 5000
    },
    {
      min: 5000,
      max: 10000
    },
    {
      min: 10000,
      max: '10000+'
    },

  ]
  return (
    <div>
      <div className='border border-borderColor rounded-md'>
        <b className='px-3 py-2 block'>Filter by: </b>

        <div className='px-3 border-t border-borderColor pb-5'>
          <p className='font-semibold py-2'>Your Budget (per night)</p>
          <div className='flex flex-col gap-1 mt-2'>

            {priceRange.map((price, index) =>
              <div key={index} className='flex justify-between'>
                <div className='flex gap-x-2'>
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">BDT {price.min} - BDT {price.max}</label>
                </div>
                <p>163</p>
              </div>
            )}
          </div>
        </div>

        <div className='px-3 border-t border-borderColor pb-5'>
          <p className='font-semibold py-2'>Property rating</p>
          <div className='flex flex-col gap-1 mt-2'>

            {rating.map((rate,index)=>
              <div key={index} className='flex justify-between'>
                <div className='flex gap-x-2'>
                  <input type="checkbox" id={`rate-${rate}`} />
                  <label htmlFor={`rate-${rate}`} className='cursor-pointer'>{rate} start</label>
                </div>
                <p>5</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter