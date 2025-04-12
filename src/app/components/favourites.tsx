"use client"
import React from 'react'
import Image from 'next/image'
import { FiBatteryCharging } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiPowerLightning } from "react-icons/gi";

const Favourites = () => {
    const items = [
        {
            img: "/product-3.jpg",
            name: "Electric Scooter",
            subName: "Folding E-Scooter",
            batery: "57KWH",
            range: "16 KM",
            Emission: "0.72g/km"
        },
        {
            img: "/product-1.jpg",
            name: "VeloWave M5",
            subName: "Portable E-Scooter",
            batery: "98KWH",
            range: "38 KM",
            Emission: "0.17g/km"
        },
        {
            img: "/product-2.jpg",
            name: "Segway-Ninebot",
            subName: "Electric Kick Scooters",
            batery: "54KWH",
            range: "42 KM",
            Emission: "0.7g/km"
        },
    ]
  return (
    <div className='w-full flex items-center justify-center bg-[#1b1b1b] lg:pt-30 pt-20 pb-30'>
        <div className='w-[95%] flex flex-col gap-10'>
            <div className='w-full flex flex-col items-center justify-center text-white'>
                <p className='text-green-600 font-bold'>Our Favorites</p>
                <p className='lg:text-[40px] text-[25px] font-bold hidden lg:flex'>Explore Customer Favorites</p>
                <p className='lg:text-[40px] text-[25px] font-bold lg:hidden'>Upgrade Your Ride with</p>
                <p className='lg:text-[40px] text-[25px] font-bold lg:hidden'>Electric Energy</p>
                <p className='text-gray-300 font-semibold mt-3'>Quis leo ullamcorper, ornare purus sed,</p>
                <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between lg:bg-[#1b1b1b] bg-[#252525]'>
                {
                    items.map((e,i)=>(
                        <div className='lg:w-[32%] w-full' key={i}>
                        <div className='w-full h-[350px] relative'>
                            <Image className='w-full h-full object-contain lg:object-cover' src={e.img} priority fill sizes='fill' alt='image'/>
                            <div className='absolute w-full flex'></div>
                        </div>
                        <div className='bg-[#252525] w-full p-5 text-white flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold text-[20px]'>{e.name}</p>
                                <p className='font-semibold'>{e.subName}</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-3'>
                                    <FiBatteryCharging size={30} color='green'/>
                                    <div>
                                        <p>Battery</p>
                                        <p className='text-[18px] font-bold '>{e.batery}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <RiLightbulbFlashLine size={30} color='green'/>
                                    <div>
                                        <p>Range</p>
                                        <p className='text-[18px] font-bold '>{e.range}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-3'>
                                    <GiPowerLightning size={30} color='green'/>
                                    <div>
                                        <p>Emission</p>
                                        <p className='text-[18px] font-bold '>{e.Emission}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Favourites