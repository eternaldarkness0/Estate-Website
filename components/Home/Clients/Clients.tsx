import Heading from '@/components/Helper/Heading'
import React from 'react'
import ClientsSlider from './ClientsSlider'

const Clients = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fef7f6]'>
        <div className='w-[80%] mx-auto'>
            <Heading heading='Clients Reviews'/>
            <div className='mt-14'>
                <ClientsSlider />
            </div>
        </div>
    </div>
  )
}

export default Clients