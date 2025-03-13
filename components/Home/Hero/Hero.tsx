import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden bg-[url("/images/hero.jpg")] bg-cover bg-center'>

        <div className='absolute bg-black inset-0 opacity-70'></div>

        <div className='relative z-10 flex items-center justify-center flex-col w-[95%] sm:w-[80%] h-full mx-auto'>
            <h2 
            data-aos='fade-left'
            className='text-white opacity-90 text-center text-base font-medium sm:text-lg uppercase'>
                The Best Way To
            </h2>

            <h1
            data-aos='fade-right'
            data-aos-delay= '150'
            className='text-center font-bold text-white text-3xl sm:text-5xl mt-4'>
                Find Your Dream Home
            </h1>

            <p
            data-aos='fade-up'
            data-aos-delay= '300' 
            className='text-center mt-4 text-sm sm:text-base text-gray-200'>
                We’ve more than 745,000 apartments, place & plot.
            </p>

            <div
            data-aos='zoom-in'
            data-aos-delay= '450'
            className='w-full mt-12'>
                <SearchBox />
            </div>

        </div>

    </div>
  )
}

export default Hero