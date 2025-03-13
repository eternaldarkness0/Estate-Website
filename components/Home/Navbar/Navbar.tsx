"use client"
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void;
}


const Navbar = ({ openNav } : Props) => {

    const [navbarBg, setNavbarBg] = useState(false);

    useEffect(() => {
        const handle = () => {
            if(window.scrollY >= 90) setNavbarBg(true);
            if(window.scrollY < 90) setNavbarBg(false);
        };

        window.addEventListener('scroll', handle);
        return () => {
            window.removeEventListener('scroll', handle);
        }

    }, []);

  return (
    <div className={`${navbarBg ? 'bg-black' : ''} fixed h-[10vh] z-[10000] w-full transition-all duration-200`}>
        <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>

            <div className='flex items-center space-x-2'>
                <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
                    <FaHouse/>
                </div>
                <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
            </div>

            <div className='hidden lg:flex items-center space-x-14 text-white'>
                {navLinks.map((item) => {
                    return (
                        <Link key={item.id} href={item.url}>
                            <p className='font-medium transition-all duration-200 hover:text-red-400'>{item.label}</p>
                        </Link>
                    );
                })}
            </div>

            <div className='flex items-center space-x-4'>
                <div className='flex items-center cursor-pointer rounded-full text-white space-x-2 hover:text-red-400 transition-all duration-200'>
                    <FaUserCircle className='w-5 h-5'/>
                    <p className='font-bold text-xs sm:text-base'>Login / Register</p>
                </div>

                <HiBars3BottomRight 
                onClick={openNav}
                className='sm:w-8 sm:h-8 text-white cursor-pointer h-6 w-6 lg:hidden'/>
            </div>


        </div>
    </div>
  )
}

export default Navbar