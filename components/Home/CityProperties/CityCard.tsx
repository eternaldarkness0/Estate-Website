import Image from 'next/image';
import React from 'react'

type cityData = {
    item: {
        id: number,
        image: string,
        cityName: string,
        numberOfProperties: number,
    }
};

const CityCard = ({ item }: cityData) => {
  return (
    <div className='relative rounded-lg overflow-hidden m-2'>
        <Image
        className='rounded-lg w-full h-[450px] object-cover' 
        src={item.image} alt="City-Image" width={700} height={700}/>

        <div className='absolute inset-0 bg-black opacity-40'></div>
        <div className='absolute p-4 top-4'>
            <h2 className='text-lg font-semibold text-white'>{item.cityName}</h2>
            <p className='text-gray-200'>{item.numberOfProperties} Properties</p>
        </div>
    </div>
  )
}

export default CityCard