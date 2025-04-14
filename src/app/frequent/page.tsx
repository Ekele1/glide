"use client"
import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Page = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    
    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const faqs = [
        {
            question: "Can E-Scooters Be Used For Long Distance Travel?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero corrupti ab natus voluptatum distinctio nam nulla quam consectetur officiis consequuntur nemo eum, dolores, quasi dolore? Rem ad eveniet possimus?"
        },
        {
            question: "What is the weight of an e-scooter?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero corrupti ab natus voluptatum distinctio nam nulla quam consectetur officiis consequuntur nemo eum, dolores, quasi dolore? Rem ad eveniet possimus?"
        },
        {
            question: "How can I unlock an e-scooter for rental?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero corrupti ab natus voluptatum distinctio nam nulla quam consectetur officiis consequuntur nemo eum, dolores, quasi dolore? Rem ad eveniet possimus?"
        },
        {
            question: "How much does an e-scooter cost?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero corrupti ab natus voluptatum distinctio nam nulla quam consectetur officiis consequuntur nemo eum, dolores, quasi dolore? Rem ad eveniet possimus?"
        },
        {
            question: "How do I check the tire pressure on my e-scooter?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero corrupti ab natus voluptatum distinctio nam nulla quam consectetur officiis consequuntur nemo eum, dolores, quasi dolore? Rem ad eveniet possimus?"
        },
        {
            question: "How do I maintain the battery of my e-scooter?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero corrupti ab natus voluptatum distinctio nam nulla quam consectetur officiis consequuntur nemo eum, dolores, quasi dolore? Rem ad eveniet possimus?"
        },
        {
            question: "How often should I replace the e-scooter's battery?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero corrupti ab natus voluptatum distinctio nam nulla quam consectetur officiis consequuntur nemo eum, dolores, quasi dolore? Rem ad eveniet possimus?"
        },
    ]

    return (
        <div className='w-full bg-[#1b1b1b] text-white'>
            {/* Header Section */}
            <div className='w-full py-16 flex items-center justify-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>FAQ</h1>
            </div>
            
            {/* FAQ Accordion */}
            <div className='w-full max-w-4xl mx-auto divide-y divide-gray-600'>
                {faqs.map((faq, index) => (
                    <div key={index} className='py-4 px-4 md:px-6'>
                        <button
                            className='w-full flex justify-between items-center text-left'
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`faq-${index}`}
                        >
                            <h3 className='text-lg md:text-xl font-semibold'>
                                <span className='text-green-400 mr-2'>{index + 1}.</span>
                                {faq.question}
                            </h3>
                            {activeIndex === index ? (
                                <FiChevronUp className='text-green-400 text-xl' />
                            ) : (
                                <FiChevronDown className='text-green-400 text-xl' />
                            )}
                        </button>
                        
                        <div
                            id={`faq-${index}`}
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                activeIndex === index ? 'max-h-96 pt-4' : 'max-h-0'
                            }`}
                        >
                            <p className='text-gray-300'>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page