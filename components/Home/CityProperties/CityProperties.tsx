import Heading from '@/components/Helper/Heading'
import React from 'react'
import CitySlider from './CitySlider'

const CityProperties = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto'>
            <Heading heading='City Properties'/>
            <div className='mt-10 md:mt-16'>
                <CitySlider />
            </div>
        </div>
    </div>
  )
}

export default CityProperties