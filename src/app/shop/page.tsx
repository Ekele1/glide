import React from 'react'
import { IoSearch } from "react-icons/io5";
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-full bg-[#1b1b1b] pb-10'>
        <div className='w-full py-12 md:py-16 flex items-center justify-center'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Shop</h1>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className='w-[95%] flex justify-between'>
                <div className='w-[25%] bg-[#333333] p-5 flex flex-col gap-4'>
                    <p className='font-bold text-[20px]'>Search</p>
                    <div className='w-full h-[2px] bg-gray-400'>
                        <div className='w-[30%] h-full bg-green-500 rounded-2xl'></div>
                    </div>
                    <div className='w-full h-[40px] flex items-center pr-2 justify-between bg-[#1d1c1c]'>
                        <input 
                        className='w-[80%] h-full pl-2 outline-none bg-transparent text-white'
                        type="search" />
                        <IoSearch color='green'/>
                    </div>
                    <p className='font-bold text-[20px]'>Category</p>
                    <div className='w-full h-[2px] bg-gray-400'>
                        <div className='w-[30%] h-full bg-green-500 rounded-2xl'></div>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <div className='w-full flex items-center gap-4'>
                            <input 
                            className='accent-green-500'
                            type="checkbox" />
                            <p>Accessories</p>
                        </div>
                        <div className='w-full flex items-center gap-4'>
                            <input 
                            className='accent-green-500'
                            type="checkbox" />
                            <p>Electric Kick Scooters</p>
                        </div>
                        <div className='w-full flex items-center gap-4'>
                            <input 
                            className='accent-green-500'
                            type="checkbox" />
                            <p>Folding E-Scooters</p>
                        </div>
                        <div className='w-full flex items-center gap-4'>
                            <input 
                            className='accent-green-500'
                            type="checkbox" />
                            <p>Luxury E-Scooters</p>
                        </div>
                        <div className='w-full flex items-center gap-4'>
                            <input 
                            className='accent-green-500'
                            type="checkbox" />
                            <p>Portable E-Scooters</p>
                        </div>
                    </div>
                    <p className='font-bold text-[20px]'>Tags</p>
                    <div className='w-full h-[2px] bg-gray-400'>
                        <div className='w-[30%] h-full bg-green-500 rounded-2xl'></div>
                    </div>
                    <div className='w-full flex gap-3'>
                        <div className='flex justify-between w-full'>
                            <div className='p-2 bg-[#1d1c1c] hover:bg-green-600 rounded-2xl text-sm cursor-pointer'>Home Audio</div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className='p-2 bg-[#1d1c1c] hover:bg-green-600 rounded-2xl text-sm cursor-pointer'>Ride Green</div>
                        </div>
                    </div>
                    <div className='w-full flex gap-3'>
                        <div className='flex justify-between w-full'>
                            <div className='p-2 bg-[#1d1c1c] hover:bg-green-600 rounded-2xl text-sm cursor-pointer'>Smart Scooter</div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className='p-2 bg-[#1d1c1c] hover:bg-green-600 rounded-2xl text-sm cursor-pointer'>VR Games</div>
                        </div>
                    </div>
                    <div className='w-full h-[400px] relative'>
                        <Image className='w-full h-full' src="/ad-banner.jpg" priority fill sizes='fill' alt='image'/>
                    </div>
                </div>
                <div className='w-[72%]'>
                    <div className='w-full flex items-center justify-between'>
                        <select className='w-[30%] h-[40px] p-2 outline-none bg-[#333333]' name="category" id="category">
                            <option value="latest">Sort By Latest</option>
                            <option value="popularity">Sort By Popularity</option>
                            <option value="low price">Sort By Price low-high</option>
                            <option value="high price">Sort By Price high-low</option>
                        </select>
                        <p>Showing 1-10 0f 18 results</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page