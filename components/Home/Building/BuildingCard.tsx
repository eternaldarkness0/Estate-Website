"use client"
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

type buildData = {
    item: {
        id: number,
        title: string,
        description: string,
        image: string,
    },
};

const BuildingCard = ({ item }: buildData) => {
  return (
    <Tilt className='rounded-lg shadow-md p-4 bg-white'>
        <div className='w-16 h-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full'>
            <Image src={item.image} alt={item.title} width={40} height={40}/>
        </div>

        <div className='p-2'>
            <p className='mt-6 text-red-600 font-bold text-xl'>0{item.id}</p>
            <p className='text-lg text-gray-700 font-bold mt-2 mb-2'>{item.title}</p>
            <p className='text-sm opacity-70 text-gray-700'>{item.description}</p>
        </div>
    </Tilt>
  )
}

export default BuildingCard