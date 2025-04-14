"use client"
import React, { useState } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        loginEmail: '',
        loginPassword: '',
        registerEmail: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='w-full bg-[#1b1b1b] text-white min-h-screen pb-10'>
            {/* Header Section */}
            <div className='w-full py-12 md:py-16 flex items-center justify-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>My Account</h1>
            </div>
            
            {/* Login/Register Container */}
            <div className='w-full flex items-center justify-center px-4'>
                <div className='w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-8'>
                    {/* Login Section */}
                    <div className='w-full lg:w-[45%] p-6 bg-[#252525] rounded-lg flex flex-col gap-6'>
                        <h2 className='text-2xl md:text-3xl font-bold text-center'>Login</h2>
                        
                        <div className='w-full bg-[#333333] p-3 rounded'>
                            <input 
                                name="loginEmail"
                                placeholder='Email Address *'
                                className='w-full outline-none bg-transparent text-white placeholder-gray-400'
                                type="email"
                                value={formData.loginEmail}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='w-full flex items-center justify-between bg-[#333333] p-3 rounded'>
                            <input 
                                name="loginPassword"
                                placeholder='Password *'
                                className='w-[90%] outline-none bg-transparent text-white placeholder-gray-400'
                                type={showPassword ? "text" : "password"}
                                value={formData.loginPassword}
                                onChange={handleChange}
                            />
                            <button 
                                onClick={togglePasswordVisibility}
                                className='text-gray-400 hover:text-white transition-colors'
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                        
                        <div className='w-full flex items-center gap-3'>
                            <input 
                                type="checkbox" 
                                id="rememberMe"
                                className='accent-green-500'
                            />
                            <label htmlFor="rememberMe" className='cursor-pointer'>Remember me</label>
                        </div>
                        
                        <button className='w-full h-12 rounded-full bg-gradient-to-r from-green-500 to-lime-300
                         hover:from-green-600 hover:to-lime-400 text-white font-bold cursor-pointer transition-all 
                         duration-300'>
                            Log In
                        </button>
                        
                        <p className='text-green-400 hover:text-green-300 cursor-pointer text-center transition-colors'>
                            Lost Your Password?
                        </p>
                    </div>

                    {/* Register Section */}
                    <div className='w-full lg:w-[45%] p-6 bg-[#252525] rounded-lg flex flex-col gap-6'>
                        <h2 className='text-2xl md:text-3xl font-bold text-center'>Register</h2>
                        
                        <div className='w-full bg-[#333333] p-3 rounded'>
                            <input 
                                name="registerEmail"
                                placeholder='Email Address *'
                                className='w-full outline-none bg-transparent text-white placeholder-gray-400'
                                type="email"
                                value={formData.registerEmail}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <p className='text-gray-300 text-sm'>
                            A link to set a new password will be sent to your email address.
                        </p>
                        
                        <p className='text-gray-300 text-sm'>
                            Your personal data will be used to support your experience throughout this website, 
                            to manage access to your account, and for other purposes described in our privacy policy.
                        </p>
                        
                        <button className='w-full h-12 rounded-full bg-gradient-to-r from-green-500 to-lime-300
                         hover:from-green-600 hover:to-lime-400 text-white font-bold cursor-pointer transition-all 
                         duration-300'>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page