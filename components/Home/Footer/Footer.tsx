import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaHouse, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white'>
            <div>
              <div className='flex items-center space-x-2'>
                <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex  items-center justify-center flex-col'>
                  <FaHouse />
                </div>
                <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
              </div> 
                <p className='text-gray-300 mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, commodi?</p> 
                <p className='text-gray-300 mt-4 font-semibold'>example@gmail.com</p> 
                <p className='text-gray-300 mt-2 font-semibold'>+1 234 567 890</p>   

                <div className='flex items-center space-x-4 mt-6'>
                  <FaYoutube className='w-6 h-6 text-red-700'/>
                  <FaFacebook className='w-6 h-6 text-blue-600'/>
                  <FaXTwitter className='w-6 h-6 text-white'/>
                  <FaInstagram className='w-6 h-6 text-pink-600'/>
                </div>       
            </div>

            <div className='md:mx-auto'>
              <h1 className='footer-heading'>Popular Search</h1>
              <p className='footer-link'>Apartment for Rent</p>
              <p className='footer-link'>Apartment Low to Hide</p>
              <p className='footer-link'>Offices for Buy</p>
              <p className='footer-link'>Offices for Rent</p>
              <p className='footer-link'>Careers</p>
            </div>

            <div className='md:mx-auto'>
              <h1 className='footer-heading'>Quick Link</h1>
              <p className='footer-link'>Terms of Use</p>
              <p className='footer-link'>Privacy Policy</p>
              <p className='footer-link'>Our Services</p>
              <p className='footer-link'>Contact Support</p>
              <p className='footer-link'>FAQs</p>
            </div>

            <div className='md:mx-auto'>
              <h1 className='footer-heading'>Discover</h1>
              <p className='footer-link'>Miami</p>
              <p className='footer-link'>Los Angeles</p>
              <p className='footer-link'>Chicago</p>
              <p className='footer-link'>London</p>
              <p className='footer-link'>New York</p>
            </div>
        </div>
    </div>
  )
}

export default Footer