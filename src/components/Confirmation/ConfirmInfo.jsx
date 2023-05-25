import React from 'react'

const ConfirmInfo = () => {
  return (
      <div className='border border-green-300 rounded-sm p-3 bg-green-100'>
			<p className='flex items-center gap-3 mb-1'>
				Confirmation number: <b>2154477</b> <i className=" cursor-pointer  bx bx-copy"></i>
			</p>
			<p className='flex items-center gap-3'>
				PIN: <b>7547</b> <i className="cursor-pointer bx bx-copy"></i>
			</p>
		</div>
  );
}

export default ConfirmInfo