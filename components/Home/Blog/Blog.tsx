import Heading from '@/components/Helper/Heading'
import { blogs } from '@/data/data'
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div id='blog' className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%] mx-auto'>
            <Heading heading='Our Blogs'/>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center'>
                {blogs.map((item, i) => {
                    return (
                        <div
                        data-aos='zoom-out'
                        data-aos-delay= {`${i * 150}`}
                        data-aos-anchor-placement = 'top-center'
                        key={item.id}>
                            <BlogCard item = {item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Blog