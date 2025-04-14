import React from 'react'
import { FaStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Reviews = () => {
    const review = [
        {
            name: "John Mathew",
            occupation: "Designer",
        },
        {
            name: "Rober Alford",
            occupation: "Engineer",
        },
        {
            name: "Edward King",
            occupation: "Professor",
        },
        {
            name: "David Lawrence",
            occupation: "Teacher",
        },
        {
            name: "Johny Deep",
            occupation: "Lawyer",
        },
    ]
  return (
    <div className='w-full flex items-center justify-center pt-20 px-4 sm:px-0'>
        <div className='w-full max-w-6xl flex flex-col items-center justify-center'>
            <p className='text-green-600 font-bold text-center'>Trusted Reviews</p>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4'>What Our Customers Are Saying</h2>
            <p className='text-gray-300 font-semibold text-center'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
            <p className='text-gray-300 font-semibold text-center'>Quis leo ullamcorper, ornare purus sed,</p>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
                {review.map((e,i) => (
                    <div className='w-full p-5 flex flex-col gap-3 bg-[#252525] rounded-lg' key={i}>
                        <div className='w-full flex gap-5'>
                            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-green-500 flex-shrink-0'>
                                <FiUser size={24} color='white'/>
                            </div>
                            <div className='flex flex-col justify-center gap-1 sm:gap-2'>
                                <p className='font-bold text-lg sm:text-xl'>{e.name}</p>
                                <p className='text-sm sm:text-base'>{e.occupation}</p>
                            </div>
                        </div>
                        <div className='w-full flex gap-1 text-gray-400'>
                            <FaStar color='yellow'/>
                            <FaStar color='yellow'/>
                            <FaStar color='yellow'/>
                            <FaStar color='yellow'/>
                            <FaStar />
                        </div>
                        <div className='w-full'>
                            <p className='text-sm sm:text-base'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, laudantium cum illo 
                                sint architecto est veritatis quae voluptate distinctio necessitatibus molestiae, 
                                eveniet natus voluptatibus amet odio unde assumenda modi iusto?
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reviews