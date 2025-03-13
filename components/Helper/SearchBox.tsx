import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'

const SearchBox = () => {
  return (
    <div className='flex flex-col justify-center w-full md:w-[80%] mx-auto bg-white h-[4rem] sm:h-[5rem] px-4 sm:px-8 rounded-lg'>
        
        <div className='flex items-center justify-center h-full'>
            <input 
            className='sm:flex-[0.8] h-[60%] bg-gray-100 rounded-lg outline-none px-4 placeholder:text-sm'
            type="text" placeholder='Enter an address, city or ZIP to buy'/>

            <div className='flex items-center flex-[0.2] ml-8 space-x-6'>
                <div className='hidden lg:flex items-center cursor-pointer space-x-2'>
                    <HiAdjustmentsHorizontal className='text-gray-700 h-6 w-6'/>
                    <p className='text-gray-700 font-semibold'>Advanced</p>
                </div>

                <div className='w-12 h-12 bg-rose-600 hover:bg-rose-700 transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer'>
                    <FaSearch className='text-white w-4 h-4'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SearchBox