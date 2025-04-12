import React from 'react'
import Image from 'next/image'

const TwoPic = () => {
  return (
    <div className='w-full flex items-center justify-center pb-20 bg-[#1b1b1b]'>
        <div className='w-[95%] flex flex-col lg:flex-row justify-between gap-5 lg:gap-0'>
            <div className='lg:w-[48%] w-full h-[400px] relative'>
                <Image className='w-full h-full object-cover' src="/imagebox1.jpg" priority fill sizes='fill' alt='image'/>
                <div className='absolute w-full h-full flex flex-col items-end text-white p-4'>
                    <p className='lg:text-[40px] text-[25px] font-bold'>New Elite VoltGlide</p>
                    <p className='lg:text-[40px] text-[25px] font-bold'>X1</p>
                    <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
                    <p className='text-gray-300 font-semibold mt-3'>Quis leo ullamcorper, ornare purus sed,</p>
                </div>
            </div>
            <div className='lg:w-[48%] w-full h-[400px] relative'>
                <Image className='w-full h-full object-cover' src="/imagebox2.jpg" priority fill sizes='fill' alt='image'/>
                <div className='absolute w-full h-full flex flex-col text-white p-4'>
                    <p className='lg:text-[40px] text-[25px] font-bold'>Gen-Next</p>
                    <p className='lg:text-[40px] text-[25px] font-bold'>Turboride+</p>
                    <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
                    <p className='text-gray-300 font-semibold mt-3'>Quis leo ullamcorper, ornare purus sed,</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TwoPic