import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-screen relative'>
        <Image className='w-full h-full' src="/glidex-home-1.jpg" priority fill sizes='fill' alt='image'/>
        <div className='w-full h-full absolute flex items-center justify-center'>
            <div className='w-[95%] flex flex-col items-center lg:items-start justify-center text-white'>
                <p className='text-green-600 font-bold'>Travel Green</p>
                <p className='lg:text-[40px] text-[25px] font-bold hidden lg:flex'>Electric Scooters: The Stylish Way </p>
                <p className='lg:text-[40px] text-[25px] font-bold lg:hidden'>Electric Scooters: </p>
                <p className='lg:text-[40px] text-[25px] font-bold hidden lg:flex'>To Travel Green And Smart</p>
                <p className='lg:text-[40px] text-[25px] font-bold lg:hidden'>The Stylish Way To</p>
                <p className='lg:text-[40px] text-[25px] font-bold lg:hidden'>Travel Green And</p>
                <p className='lg:text-[40px] text-[25px] font-bold lg:hidden'>Smart</p>
                <p className='text-gray-300 font-semibold mt-3'>Quis leo ullamcorper, ornare purus sed,</p>
                <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
                <div className='w-full flex items-center justify-center lg:justify-between mt-10'>
                    <button className='pl-10 pr-10 h-[50px] rounded-[20px] bg-[#23c744] cursor-pointer'>Book today</button>
                </div>
                <div className="relative w-full h-[100px] mt-5 flex items-center">
                    <p className="text-[25px] font-bold">
                        The Stylish Way To Travel
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeroPage