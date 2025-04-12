import React from 'react'
import Image from 'next/image'

const LimitedOffer = () => {
  return (
    <div className='w-full bg-[#1b1b1b] flex items-center justify-center pb-20'>
        <div className='w-[95%] bg-[#252525] flex flex-col md:flex-col lg:flex-row gap-5 lg:gap-0 pt-5 pb-5'>
            <div className='lg:w-[30%] w-full lg:h-[300px] h-[400px] relative'>
                <Image className='w-full h-full object-contain' src="/countdown.png" priority fill sizes='fill' alt='image'/>
            </div>
            <div className='lg:w-[70%] w-full flex flex-col md:flex-row lg:flex-row gap-5 md:gap-0 lg:gap-0 text-white'>
                <div className='lg:w-[60%] w-full md:w-[60%] flex flex-col gap-3 pl-4 lg:pl-0'>
                    <p className='text-green-600 font-bold'>Hurry Up...!</p>
                    <p className='lg:text-[40px] text-[25px] font-bold'>Limited Offer Upto 20%</p>
                    <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
                    <p className='text-gray-300 font-semibold'>Quis leo ullamcorper, ornare purus sed,</p>
                    <button className='lg:w-[200px] w-[200px] bg-white text-black rounded-[50px] h-[40px] cursor-pointer relative overflow-hidden group'>
                        <span className='relative z-10 text-[15px] font-bold '>Book a Test Ride</span>
                        <div className='absolute top-0 left-0 w-full h-0 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                    </button>
                </div>
                <div className='lg:w-[40%] w-full md:w-[40%] pr-3'>
                    <div className='w-full h-[150px] flex border-[1px] border-white'>
                        <div className='w-[50%] h-full flex flex-col items-center justify-center border-r-[1px] border-white text-white'>
                            <p className='text-[28px] font-bold'>130</p>
                            <p>Days</p>
                        </div>
                        <div className='w-[50%] h-full flex flex-col items-center justify-center text-white'>
                            <p className='text-[28px] font-bold'>19</p>
                            <p>Hrs</p>
                        </div>
                    </div>
                    <div className='w-full h-[150px] flex border-[1px] border-white'>
                        <div className='w-[50%] h-full flex flex-col items-center justify-center border-r-[1px] border-white text-white'>
                            <p className='text-[28px] font-bold'>13</p>
                            <p>Mins</p>
                        </div>
                        <div className='w-[50%] h-full flex flex-col items-center justify-center text-white'>
                            <p className='text-[28px] font-bold'>130</p>
                            <p>Secs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LimitedOffer