import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { IoBatteryCharging } from "react-icons/io5";
import { IoIosCheckbox } from "react-icons/io";

const Services = () => {
  return (
    <div className='w-full pt-10 pb-10 flex items-center justify-center bg-[#1b1b1b]'>
      <div className='w-[95%] lg:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        <div className='p-4 bg-[#333333] flex flex-col gap-3 text-white'>
            <TbTruckDelivery className='text-4xl text-green-600'/>
            <p className='text-lg md:text-xl font-bold'>Express Shipping</p>
            <p className='text-sm md:text-base'>Get your products delivered quickly to your doorstep.</p>
        </div>
        <div className='p-4 bg-[#333333] flex flex-col gap-3 text-white'>
            <GrTransaction className='text-4xl text-green-600'/>
            <p className='text-lg md:text-xl font-bold'>Safe Transactions</p>
            <p className='text-sm md:text-base'>Enjoy most secure payments with peace of mind.</p>
        </div>
        <div className='p-4 bg-[#333333] flex flex-col gap-3 text-white'>
            <BiSupport className='text-4xl text-green-600'/>
            <p className='text-lg md:text-xl font-bold'>Endless Support</p>
            <p className='text-sm md:text-base'>Our team is here to assist you 24/7 with any queries.</p>
        </div>
        <div className='p-4 bg-[#333333] flex flex-col gap-3 text-white'>
            <IoIosCheckbox className='text-4xl text-green-600'/>
            <p className='text-lg md:text-xl font-bold'>Trust Worthy</p>
            <p className='text-sm md:text-base'>We ensure a top-notch customer experience.</p>
        </div>
        <div className='p-4 bg-[#333333] flex flex-col gap-3 text-white'>
            <IoBatteryCharging className='text-4xl text-green-600'/>
            <p className='text-lg md:text-xl font-bold'>10K KM Warranty</p>
            <p className='text-sm md:text-base'>Drive with confidence for 10,000 kilometers.</p>
        </div>
      </div>
    </div>
  )
}

export default Services