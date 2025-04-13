import React from 'react'
import Image from 'next/image'
import { FiBatteryCharging } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiPowerLightning } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
// import {  } from "react-icons/io";

const Quantum = () => {
  return (
    <div className='w-full bg-[#1b1b1b] pt-10 pb-10 flex items-center justify-center'>
        <div className='w-[95%] flex flex-col lg:flex-row bg-[#252525]'>
            <div className='lg:w-[50%] w-full lg:h-[600px] h-[300px] relative'>
                <Image className='w-full h-full object-cover' src="/Product-15.jpg" priority fill sizes='fill' alt='image'/>
            </div>
            <div className='lg:w-[50%] w-full p-5 text-white'>
                <p className='lg:text-[40px] text-[25px] font-bold'>QuantumGlide Z3</p>
                <p>Folding E-Scooters</p>
                <p className='text-[20px] font-bold mt-3'>$240.00-$380.00</p>
                <div className='w-full flex items-center gap-7 pt-7 pb-7 border-b-[1px] border-white'>
                    <div className='flex items-center gap-3'>
                        <FiBatteryCharging size={40} color='green'/>
                        <div>
                            <p>Battery</p>
                            <p className='font-bold '>90KWH</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiLightbulbFlashLine size={40} color='green'/>
                        <div>
                            <p>Range</p>
                            <p className='font-bold '>176KM</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <GiPowerLightning size={40} color='green'/>
                        <div>
                            <p>Emission</p>
                            <p className='font-bold '>0.52g/km</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 pt-10'>
                    <div className='w-full flex flex-col gap-4'>
                        <p>Color:</p>
                        <div className='w-full flex gap-2'>
                            <div title='blue' className='w-[30px] h-[30px] flex items-center justify-center rounded-4xl border-1 border-gray-400'>
                                <FaCircle color='blue' size={25}/>
                            </div>
                            <div title='green' className='w-[30px] h-[30px] flex items-center justify-center rounded-4xl border-1 border-gray-400'>
                                <FaCircle color='green' size={25}/>
                            </div>
                            <div title='red' className='w-[30px] h-[30px] flex items-center justify-center rounded-4xl border-1 border-gray-400'>
                                <FaCircle color='red' size={25}/>
                            </div>
                            <div title='yellow' className='w-[30px] h-[30px] flex items-center justify-center rounded-4xl border-1 border-gray-400'>
                                <FaCircle color='yellow' size={25}/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <p>Power:</p>
                        <div className='w-full flex gap-3'>
                            <div className='w-[100px] rounded-3xl p-2 flex items-center justify-center bg-[#333333]'>
                                <p>100W</p>
                            </div>
                            <div className='w-[100px] rounded-3xl p-2 flex items-center justify-center bg-[#333333]'>
                                <p>200W</p>
                            </div>
                            <div className='w-[100px] rounded-3xl p-2 flex items-center justify-center bg-[#333333]'>
                                <p>250W</p>
                            </div>
                            <div className='w-[100px] rounded-3xl p-2 flex items-center justify-center bg-[#333333]'>
                                <p>300W</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-5'>
                        <div className='flex items-center justify-center rounded-2xl bg-[#333333] gap-4 w-[100px]'>
                            <p>1</p>
                            <div className='flex flex-col justify-between'>
                                <IoMdArrowDropup className='cursor-pointer' size={30}/>
                                <IoMdArrowDropdown className='cursor-pointer' size={30}/>
                            </div>
                        </div>
                        <button className='
                            px-6 py-3 
                            rounded-lg 
                            font-medium 
                            text-white 
                            bg-gradient-to-r 
                            from-green-400 
                            via-green-500 
                            to-green-600 
                            hover:from-green-500 
                            hover:via-green-600 
                            hover:to-green-700 
                            transition-all 
                            duration-300
                            shadow-lg
                            hover:shadow-xl
                            cursor-pointer
                        '>Add To Cart</button>
                    </div>
                    <div className='w-full flex gap-5'>
                    <button className='
                        px-6 py-3 
                        rounded-lg 
                        font-medium 
                        text-white 
                        bg-gradient-to-r 
                        from-green-400 
                        via-green-500 
                        to-green-600 
                        hover:from-green-500 
                        hover:via-green-600 
                        hover:to-green-700 
                        transition-all 
                        duration-300
                        shadow-lg
                        hover:shadow-xl
                        cursor-pointer
                    '>Add To Wishlist</button>
                    <button className='
                        px-6 py-3 
                        rounded-lg 
                        font-medium 
                        text-white 
                        bg-gradient-to-r 
                        from-green-400 
                        via-green-500 
                        to-green-600 
                        hover:from-green-500 
                        hover:via-green-600 
                        hover:to-green-700 
                        transition-all 
                        duration-300
                        shadow-lg
                        hover:shadow-xl
                        cursor-pointer
                    '>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quantum