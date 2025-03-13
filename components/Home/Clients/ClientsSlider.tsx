"use client"
import { userReviewData } from '@/data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientsCard from './ClientsCard';

const responsive = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3
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

const ClientsSlider = () => {
  return (
    <Carousel 
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite 
        responsive={responsive}>

        {userReviewData.map((item) => {
            return (
                <div key={item.id}>
                    <ClientsCard item = {item}/>
                </div>
            )
        })}

    </Carousel>
  )
}

export default ClientsSlider