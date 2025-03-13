import Heading from '@/components/Helper/Heading'
import { properties } from '@/data/data'
import React from 'react'
import PropertiesCard from './PropertiesCard'

const Properties = () => {
  return (
    <div id='property' className='pt-16 pb-16 bg-gray-100'>
      <div className='w-[80%] mx-auto'>
        <Heading heading='Discover Our Properties'/>
        <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
          {properties.map((item, i) => {
            return (
              <div 
              data-aos='fade-up'
              data-aos-delay= {`${i * 150}`}
              data-aos-anchor-placement = 'top-center'
              key={item.id}>
                <PropertiesCard item = {item}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Properties