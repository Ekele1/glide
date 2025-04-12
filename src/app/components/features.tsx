"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBullseye } from 'react-icons/fa';
const Slider = dynamic(() => import("react-slick"), { ssr: false }) as any;

const Features = () => {
    const carouselItems = [
        {
            img: "/home-1.jpg",
            title: "Digital Conectivity",
            subtitle: "Seamless Connection",
            desc1: "Exploring Smartphone Conectivity Options",
            desc2: "Provides real-time information of scooter"
        },
        {
            img: "/home-2.jpg",
            title: "Water-repellant barrier",
            subtitle: "Fear No Water",
            desc1: "Rain or shine, Your Protection is Prime",
            desc2: "battery is shielded from water exposure"
        },
        {
            img: "/home-3.jpg",
            title: "High-performance tyre",
            subtitle: "Drive Smart",
            desc1: "Tread With Confidence, Drive With Durability",
            desc2: "tyres are filled with puncture resistance materials"
        },
        {
            img: "/Home-4.jpg",
            title: "0-65 Kmph",
            subtitle: "Lightweight & Foldable",
            desc1: "in 4.6 Secs",
            desc2: "Enhanced batteries provides performance"
        },
    ]

    const carouselSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
      };

  return (
    <div className='w-full bg-[#1b1b1b] lg:pb-20 pb-10'>
        {/* <div className='w-[95%]'></div> */}
        <Slider {...carouselSettings}>
            {
                carouselItems.map((e,i)=>(
                    <div className='w-[100%] lg:h-[500px] h-[300px] relative' key={i}>
                    <Image className='w-full h-full object-cover' src={e.img} priority fill sizes='fill' alt='image'/>
                    <div className='absolute w-full h-full flex justify-end items-center'>
                        <div className='lg:w-[80%] w-full pl-4 lg:pl-0 flex flex-col lg:gap-50 gap-10 pr-5 text-white'>
                            <div>
                                <p className='text-green-600 text-[20px] font-semibold'>{e.subtitle}</p>
                                <p className='lg:text-[40px] text-[25px] font-bold'>{e.title}</p>
                                <p className='text-[20px] font-semibold'>{e.desc1}</p>
                            </div>
                            <div className='w-full flex items-center justify-end'>
                                <div className='p-2 bg-green-500 rounded-3xl'>
                                    <p>{e.desc2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </Slider>

        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
                <tbody className="flex">
                {/* Row 1 - Smartphone Connectivity */}
                <tr className="w-[25%] min-w-[250px] p-5 text-white flex flex-col gap-3 group cursor-pointer border-l-[1px] border-white hover:border-green-600">
                    <td className="font-semibold text-[20px] group-hover:text-green-600">Smartphone Connectivity</td>
                    <td>imperdiet nunc. Aenean mi purus, tristique sed.</td>
                    <td className="font-bold text-[35px] text-gray-600">01</td>
                </tr>
                
                {/* Row 2 - Waterproof Protection */}
                <tr className="w-[25%] min-w-[250px] p-5 text-white flex flex-col gap-3 group cursor-pointer border-l-[1px] border-white hover:border-green-600">
                    <td className="font-semibold text-[20px] group-hover:text-green-600">Waterproof Protection</td>
                    <td>imperdiet nunc. Aenean mi purus, tristique sed.</td>
                    <td className="font-bold text-[35px] text-gray-600">02</td>
                </tr>
                
                {/* Row 3 - Durable Tyres */}
                <tr className="w-[25%] min-w-[250px] p-5 text-white flex flex-col gap-3 group cursor-pointer border-l-[1px] border-white hover:border-green-600">
                    <td className="font-semibold text-[20px] group-hover:text-green-600">Durable Tyres</td>
                    <td>imperdiet nunc. Aenean mi purus, tristique sed.</td>
                    <td className="font-bold text-[35px] text-gray-600">03</td>
                </tr>
                
                {/* Row 4 - Enhanced Battery */}
                <tr className="w-[25%] min-w-[250px] p-5 text-white flex flex-col gap-3 group cursor-pointer border-l-[1px] border-white hover:border-green-600">
                    <td className="font-semibold text-[20px] group-hover:text-green-600">Enhanced Battery</td>
                    <td>imperdiet nunc. Aenean mi purus, tristique sed.</td>
                    <td className="font-bold text-[35px] text-gray-600">04</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Features