"use client"
import { cities } from '@/data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CityCard from './CityCard';

const responsive = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4
    },
    tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1
    },
};

const CitySlider = () => {
  return (
    <Carousel 
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite 
        responsive={responsive}>

        {cities.map((item) => {
            return (
                <div key={item.id}>
                    <CityCard item = {item}/>
                </div>
            )
        })}

    </Carousel>
  );
}

export default CitySlider