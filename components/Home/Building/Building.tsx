import Heading from '@/components/Helper/Heading'
import { buildings } from '@/data/data'
import React from 'react'
import BuildingCard from './BuildingCard'

const Building = () => {
  return (
    <div id='listing' className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%] mx-auto'>
            <Heading heading='Building Feature'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14'>
                {buildings.map((item, i) => {
                    return (
                        <div 
                        data-aos='fade-left'
                        data-aos-delay= {`${i * 150}`}
                        data-aos-anchor-placement = 'top-center'
                        key={item.id}>
                            <BuildingCard item = {item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Building