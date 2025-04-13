import React from 'react'
import { MdSend } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#1b1b1b] pt-10'>
        <div className='w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white pt-10 pb-10 text-white'>
            {/* Company Info */}
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-3xl lg:text-[40px]'>GLIDE</p>
                <p className='text-sm lg:text-base'>Glidex Motocorp Limited, The Grand Plaza Plat, No: 58 A, East Madison Street, Baltimore, USA 4508</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>+(000) 1234 - 56789</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>support@example.com</p>
            </div>

            {/* Information Links */}
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-xl lg:text-[30px]'>Information</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>History</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Careers</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Press and Media</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Brand Partners</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Affiliates</p>
            </div>

            {/* Useful Links */}
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-xl lg:text-[30px]'>Useful Links</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Partner Program</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Affiliate Program</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>App Developers</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Investors</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Recent Blogs</p>
                <p className='cursor-pointer hover:text-green-600 text-sm lg:text-base'>Contact Us</p>
            </div>

            {/* Newsletter & Social */}
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-lg lg:text-[25px]'>Sign in for instant updates! Get 10% off on first order.</p>
                <div className='w-full flex items-center justify-between p-3 bg-[#333333] rounded'>
                    <input 
                        className='text-white outline-none w-[80%] border-none bg-transparent text-sm lg:text-base'
                        placeholder='Your Email'
                        type="email" 
                    />
                    <MdSend className='text-green-600 text-2xl'/>
                </div>
                <div className='w-full flex items-center gap-4'>
                    <p className='text-sm lg:text-base'>Follow Us:</p>
                    <span className='cursor-pointer hover:text-green-600 text-xl'><FaInstagram /></span>
                    <span className='cursor-pointer hover:text-green-600 text-xl'><SlSocialFacebook /></span>
                    <span className='cursor-pointer hover:text-green-600 text-xl'><FaXTwitter /></span>
                    <span className='cursor-pointer hover:text-green-600 text-xl'><PiTiktokLogoLight /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer