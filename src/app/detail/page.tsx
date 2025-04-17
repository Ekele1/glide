"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FiBatteryCharging } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiPowerLightning } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Services from '../components/service';

type AccordionSection = {
  title: string;
  content: string;
};

const Page = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    
    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionSections: AccordionSection[] = [
        { 
            title: 'Description', 
            content: 'Ridiculus at nisi cras consectetur sollicitudin id magna. Libero mauris nisl scelerisque neque. Morbi quis leo ullamcorper, ornare purus sed, imperdiet nunc. Aenean mi purus, tristique sed lacus eu, condimentum fringilla erat. Cras vitae diam non quam aliquam molestie. Aliquam posuere, felis nec dapibus fermentum, diam magna consectetur libero, at imperdiet turpis mauris sed ligula. In porta, diam vel dictum porttitor.' 
        },
        { 
            title: 'Additional Details', 
            content: 'Ridiculus at nisi cras consectetur sollicitudin id magna. Libero mauris nisl scelerisque neque. Morbi quis leo ullamcorper, ornare purus sed, imperdiet nunc. Aenean mi purus, tristique sed lacus eu, condimentum fringilla erat. Cras vitae diam non quam aliquam molestie. Aliquam posuere, felis nec dapibus fermentum, diam magna consectetur libero, at imperdiet turpis mauris sed ligula. In porta, diam vel dictum porttitor.' 
        },
        { 
            title: 'Ratings and Reviews', 
            content: 'Ridiculus at nisi cras consectetur sollicitudin id magna. Libero mauris nisl scelerisque neque. Morbi quis leo ullamcorper, ornare purus sed, imperdiet nunc. Aenean mi purus, tristique sed lacus eu, condimentum fringilla erat. Cras vitae diam non quam aliquam molestie. Aliquam posuere, felis nec dapibus fermentum, diam magna consectetur libero, at imperdiet turpis mauris sed ligula. In porta, diam vel dictum porttitor.' 
        }
    ];

    return (
        <div className='w-full'>
            <div className='w-full py-12 md:py-16 flex items-center justify-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Product Details</h1>
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[95%]'>
                    <div className='w-full flex flex-col justify-between lg:flex-row'>
                        <div className='lg:w-[50%] w-full flex flex-col gap-5'>
                            <div className='w-full h-[600px] relative'>
                                <Image 
                                    className='w-full h-full object-cover' 
                                    src="/product-5.jpg"
                                    fill 
                                    sizes='(max-width: 768px) 100vw, 50vw'
                                    alt="product"
                                    priority
                                />
                            </div>
                            <div className='w-full flex justify-between'>
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className='w-[23%] h-[150px] relative'>
                                        <Image 
                                            className='w-full h-full object-cover' 
                                            src="/product-5.jpg" 
                                            fill 
                                            sizes='(max-width: 768px) 100vw, 50vw' 
                                            alt="product"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='lg:w-[48%] w-full lg:pl-5 flex flex-col gap-5 text-white'>
                            <p className='lg:text-[40px] text-[25px] font-bold'>QuantumGlide Z3</p>
                            <p>Folding E-Scooters</p>
                            <p className='text-[20px] font-bold'>$240.00-$380.00</p>
                            <div className='w-full flex items-center gap-7 border-b-[1px] border-white pb-4'>
                                {[
                                    { icon: <FiBatteryCharging size={40} color='green'/>, label: "Battery", value: "90KWH" },
                                    { icon: <RiLightbulbFlashLine size={40} color='green'/>, label: "Range", value: "176KM" },
                                    { icon: <GiPowerLightning size={40} color='green'/>, label: "Emission", value: "0.52g/km" }
                                ].map((item, index) => (
                                    <div key={index} className='flex items-center gap-3'>
                                        {item.icon}
                                        <div>
                                            <p>{item.label}</p>
                                            <p className='font-bold'>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='w-full flex flex-col gap-5'>
                                <div className='w-full flex flex-col gap-4'>
                                    <p>Color:</p>
                                    <div className='w-full flex gap-2'>
                                        {['blue', 'green', 'red', 'yellow'].map((color) => (
                                            <div 
                                                key={color}
                                                title={color} 
                                                className='w-[30px] h-[30px] flex items-center justify-center rounded-full border border-gray-400'
                                            >
                                                <FaCircle color={color} size={25}/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-full flex flex-col gap-4'>
                                    <p>Power:</p>
                                    <div className='w-full flex gap-3 flex-wrap'>
                                        {['100W', '200W', '250W', '300W'].map((power) => (
                                            <div 
                                                key={power}
                                                className='w-[100px] rounded-3xl p-2 flex items-center justify-center bg-[#333333]'
                                            >
                                                <p>{power}</p>
                                            </div>
                                        ))}
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
                                        px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-green-400 
                                        via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 
                                        transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer
                                    '>
                                        Add To Cart
                                    </button>
                                </div>
                                <div className='w-full flex gap-5'>
                                    <button className='
                                        px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-green-400 
                                        via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 
                                        transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer
                                    '>
                                        Add To Wishlist
                                    </button>
                                    <button className='
                                        px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-green-400 
                                        via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 
                                        transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer
                                    '>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-5'>
                                {accordionSections.map((section, index) => (
                                    <div key={index} className='w-full flex flex-col gap-3'>
                                        <div 
                                            onClick={() => toggleAccordion(index)} 
                                            className='w-full p-5 flex items-center justify-between bg-[#333333] rounded-2xl cursor-pointer'
                                        >
                                            <p className='font-bold text-[20px]'>{section.title}</p>
                                            {activeAccordion === index ? (
                                                <FiChevronUp className='text-green-400 text-xl'/>
                                            ) : (
                                                <FiChevronDown className='text-green-400 text-xl'/>
                                            )}
                                        </div>
                                        {activeAccordion === index && (
                                            <div className='w-full p-2'>
                                                <p>{section.content}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 items-center justify-center pt-20'>
                        <p className='text-green-600'>Related Products</p>
                        <p className='text-[40px] font-bold'>Shop Best Sellers</p>
                    </div>
                    <Services />
                </div>
            </div>
        </div>
    );
}

export default Page;