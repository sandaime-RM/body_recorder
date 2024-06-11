import React from 'react'
import { Link } from 'react-router-dom'

const SpeedMenuButton = ({text, icon}) => {

  return (
    <div className='px-3 mb-4'>
      <Link to="record/" >
        <button className='w-full rounded-lg bg-white p-4  shadow text-center hover:bg-gray-50'>
          <div className='text-5xl text-lime-500 mb-2'>
            <i className={'bi bi-' + icon}></i>
          </div>
          <div className='text-slate-500 text-sm'>{text}</div>
        </button>
      </Link>
    </div>
    
  )
}

export default SpeedMenuButton