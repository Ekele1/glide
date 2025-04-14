import React from 'react'
import Image from 'next/image'
import VideoPlayer from '../components/videoPlayer'
import Reviews from '../components/reviews'

const Page = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[200px] flex items-center justify-center'>
            <p className='text-[40px] font-bold'>About Us</p>
        </div>
        <div className='w-full'>
            <div className='w-full bg-[#1b1b1b] flex items-center justify-center'>
                <div className='w-[95%] flex flex-col gap-10'>
                    <div className='w-full lg:h-[400px] h-[300px] hidden lg:flex md:flex relative'>
                        <Image className='lg:w-full lg:h-full object-contain lg:object-cover' src="/filler-img.jpg" priority fill sizes='fill' alt='image'/>
                    </div>
                    <Image className='md:hidden lg:hidden' src="/filler-img.jpg" width={400} height={400} priority alt='image'/>
                    <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-0 text-white'>
                        <div className='lg:w-[50%] w-full flex items-center justify-around'>
                            <div className='flex flex-col items-center justify-center'>
                                <Image className='w-auto h-auto' src='/speed.png' alt='controller' width={70} height={60}/>
                                <p className='font-bold lg:text-[40px] md:text-[30px] text-[25px]'>70mph</p>
                                <p>4-speed Mode</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <Image className='w-auto h-auto' src='/distance.png' alt='controller' width={70} height={60}/>
                                <p className='font-bold lg:text-[40px] md:text-[30px] text-[25px]'>160mi</p>
                                <p>Km Range</p>
                            </div>
                        </div>
                        <div className='lg:w-[50%] w-full flex items-center justify-around'>
                            <div className='flex flex-col items-center justify-center'>
                                <Image className='w-auto h-auto' src='/weight.png' alt='controller' width={70} height={60}/>
                                <p className='font-bold lg:text-[40px] md:text-[30px] text-[25px]'>415 lbs</p>
                                <p>Frame Weight</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <Image className='w-auto h-auto' src='/battery.png' alt='controller' width={70} height={60}/>
                                <p className='font-bold lg:text-[40px] md:text-[30px] text-[25px]'>30 Kw</p>
                                <p>Per Charge</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <p className='text-gray-300 font-semibold'>Mus magnis et sed aliquam vivamus parturient facilisi. Tortor donec id potent. Vestibulum dictum congue</p>
                        <p className='text-gray-300 font-semibold'>lorem vel varius. Integer sollicitudin pellentesque euismod.</p>
                    </div>
                    <div className=" my-4 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gray-300"></div>
                    <div className='flex flex-col lg:flex-row items-center gap-5'>
                        <button className='lg:w-[200px] w-[200px] bg-[#23c744] text-white rounded-[50px] h-[40px] cursor-pointer relative overflow-hidden group'>
                            <span className='relative z-10 text-[15px] font-bold '>Book a Test Ride</span>
                            <div className='absolute top-0 left-0 w-full h-0 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                        </button>
                        <button className='lg:w-[200px] w-[200px] bg-white text-black rounded-[50px] h-[40px] cursor-pointer relative overflow-hidden group'>
                            <span className='relative z-10 text-[15px] font-bold '>Find a Store</span>
                            <div className='absolute top-0 left-0 w-full h-0 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                        </button>
                    </div>
                    <div className="w-full h-[1px] bg-gray-300"></div>
                </div>
                </div>
            </div>
        </div>
        <div className='w-full mt-5'>
            <VideoPlayer src='/videosample.mp4'/>
        </div>
        <Reviews />
    </div>
  )
}

export default Page