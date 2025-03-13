import Heading from '@/components/Helper/Heading'
import React from 'react'
import ApartmentCard from './ApartmentCard'
import { apartmentTypeData } from '@/data/data'

const Apartment = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto'>
            <Heading heading='Apartment Types'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center'>
              {apartmentTypeData.map((item, i) => {
                return (
                <div key={item.id}
                data-aos='zoom-in'
                data-aos-delay= {`${i * 150}`}
                data-aos-anchor-placement = 'top-center'
                > 
                  <ApartmentCard item = {item}/>
                </div>
                );
              })}
            </div>
        </div>
    </div>
  )
}

export default Apartment