"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Apartment from './Apartment/Apartment'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import Building from './Building/Building'
import Clients from './Clients/Clients'
import Blog from './Blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 700,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Apartment />
      <Properties />
      <CityProperties />
      <Building />
      <Clients />
      <Blog />
    </div>
  )
}

export default Home