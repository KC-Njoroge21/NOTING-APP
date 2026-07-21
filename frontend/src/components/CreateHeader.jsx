import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const CreateHeader = () => {
  return (
    <header className='p-4 flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <Link to={'/'}>
          <button className='flex items-center gap-2 cursor-pointer '>
          <IoIosArrowRoundBack size={20} />
          Back
        </button>
        </Link>

        <button className='bg-gray-200 p-2 rounded-md cursor-pointer'>Save note</button>
      </div>
      <div className='flex gap-3 '>
        <button className='p-0.5 bg-gray-200 rounded-lg text-sm'>Research</button>
        <button className='p-0.5 bg-gray-200  rounded-lg text-sm'>Work</button>
        <button className='p-0.5 bg-gray-200  rounded-lg text-sm'>Personal</button>
        <button className='p-0.5 bg-gray-200  rounded-lg text-sm'>Ideas</button>
        <button className='p-0.5 bg-gray-200  rounded-lg text-sm'>Reading</button>
      </div>
    </header>
  )
}

export default CreateHeader