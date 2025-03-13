import Image from 'next/image';
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi';
import { BsHeart, BsPlusSquare } from 'react-icons/bs';
import { FaBath, FaBed, FaSquare } from 'react-icons/fa';
import { MdElectricBolt } from 'react-icons/md';

type propData = {
    item: {
        id: number,
        propertyName: string,
        bedrooms: number,
        bathrooms: number,
        location: string,
        size: number,
        price: number,
        imageUrl: string,
    },
};

const PropertiesCard = ({ item }: propData) => {
  return (
    <div className='bg-white overflow-hidden rounded-lg cursor-pointer shadow-lg group'>
        <div className='relative'>
            <Image
            className='w-full object-cover group-hover:scale-110 transition-all duration-300'
            src={item.imageUrl} alt={item.propertyName} width={300} height={300}/>
            <h1 className='absolute px-6 bottom-4 left-4 py-1.5 text-sm bg-black w-fit text-white rounded-lg'>
                <span className='text-base font-bold'>{item.price}$</span> / mo
            </h1>

            <div className='absolute flex items-center space-x-1 px-6 py-2 top-4 left-4 text-sm bg-rose-600 w-fit text-white rounded-md font-bold'>
                <MdElectricBolt />
                <span>Featured</span>
            </div>
        </div>

        <div className='p-5'>
            <h1 className='mt-4 group-hover:underline text-gray-900 font-bold text-lg'>
                {item.propertyName}
            </h1>
            <p className='text-sm text-gray-500 mt-3'>{item.location}</p>

            <div className='flex items-center justify-between mt-6 w-full lg:w-[80%]'>

                <div className='flex items-center space-x-2'>
                    <FaBed className='text-rose-500'/>
                    <p className='text-xs text-gray-600'>{item.bedrooms} Beds</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <FaBath className='text-rose-500'/>
                    <p className='text-xs text-gray-600'>{item.bathrooms} Bath</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <FaSquare className='text-rose-500'/>
                    <p className='text-xs text-gray-600'>{item.size} sqrt</p>
                </div>

            </div>

            <div className='w-full h-[1.2px] mt-4 mb-4 bg-gray-500 opacity-15'></div>

            <div className='flex items-center justify-between'>
                <h2 className='text-xs text-gray-600'>For Rent</h2>
                <div className='flex items-center space-x-4 text-gray-500'>
                    <BiLinkExternal />
                    <BsPlusSquare />
                    <BsHeart />
                </div>
            </div>

        </div>

    </div>
  )
}

export default PropertiesCard