"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = dynamic(() => import("react-slick"), { ssr: false }) as any;

const ZoomInto = () => {
    const carouselItems = [
        "/vehicle-1.jpg",
        "/vehicle-2.jpg",
        "/vehicle-3.jpg",
        "/vehicle-4.jpg",
        "/vehicle-5.jpg",
        "/vehicle-6.jpg",
        "/vehicle-7.jpg",
        "/vehicle-8.jpg",
    ]

    const carouselSettings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
    };
    
    return (
        <div className='w-full flex items-center justify-center bg-[#1b1b1b] pt-10 pb-10'>
            <div className='w-[90%] flex flex-col items-center justify-center text-white'>
                <p className='lg:text-[40px] text-[25px] font-bold hidden lg:flex'>Zoom Into The Future With</p>
                <p className='lg:text-[40px] text-[25px] font-bold hidden lg:flex'>Electric Power</p>
                <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
                <p className='text-gray-300 font-semibold mt-3'>Quis leo ullamcorper, ornare purus sed,</p>

                <div className='w-full pt-10'>
                    <Slider {...carouselSettings}>
                        {carouselItems.map((e,i) => (
                            <div key={i} className='px-2'>
                                <div className='relative h-[400px] w-full'>
                                    <Image 
                                        src={e} 
                                        alt={`Vehicle ${i+1}`}
                                        fill
                                        // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                        sizes='fill'
                                        className='object-cover'
                                        priority={i < 3}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ZoomInto