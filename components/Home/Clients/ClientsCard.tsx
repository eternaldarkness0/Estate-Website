import Image from 'next/image';
import React from 'react'
import { FaQuoteRight, FaStar } from 'react-icons/fa';

type userData = {
    item: {
        id: number,
        name: string,
        profession: string,
        review: string,
        userImage : string,
    },
};

const ClientsCard = ({ item }: userData) => {
  return (
    <div className='relative bg-white rounded-lg m-3 p-6'>
        <FaQuoteRight className='absolute h-8 w-8 top-4 right-4 text-red-600 opacity-20'/>
        <div className='flex items-center mt-6'>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
        </div>
        <p className='mt-6 text-base text-gray-600 font-medium'>{item.review}</p>
        <div className='w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6'></div>

        <div className='flex items-center space-x-4'>
            <Image 
            className='rounded-full'
            src={item.userImage} alt={item.name} width={50} height={50}/>

            <div>
                <h2 className='font-bold text-gray-800'>{item.name}</h2>
                <p className='text-sm text-gray-500'>{item.profession}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ClientsCard