import React from 'react'
import Image from 'next/image'

const Blog = () => {
    const blogPost = [
        {
            img: "/blog-1.jpg",
            title: "How To Maintain Traction  And Stability When E-Biking In Winter"
        },
        {
            img: "/blog-2.jpg",
            title: "Eco-Friendly Commuting: Why Escooters Are A Great Choice"
        },
        {
            img: "/blog-3.jpg",
            title: "Understanding eScooter Specifications: Key Features..."
        },
    ]
  return (
    <div className='w-full flex items-center justify-center bg-[#1b1b1b] lg:pt-30 pt-20 pb-30'>
        <div className='w-[95%] flex flex-col gap-10'>
            <div className='w-full flex flex-col items-center justify-center text-white'>
                <p className='text-green-600 font-bold'>Most Recent News</p>
                <p className='lg:text-[40px] text-[25px] font-bold hidden lg:flex'>Chech Out The Recent Blogs</p>
                <p className='text-gray-300 font-semibold mt-3'>Quis leo ullamcorper, ornare purus sed,</p>
                <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 text-white'>
                {
                    blogPost.map((e,i)=>(
                        <div className='lg:w-[32%] w-full flex flex-col gap-3 cursor-pointer' key={i}>
                            <div className='w-full h-[300px] relative'>
                                <Image className='w-full h-full object-cover' src={e.img} priority fill sizes='fill' alt='image'/>
                            </div>
                            <div className='w-full flex items-center gap-5'>
                                <p>By Developer</p>
                                <p>1 Comment</p>
                            </div>
                            <p className='text-[20px] font-bold'>{e.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog