"use client"
import React, { useState, useRef, useEffect } from 'react';

const Calculate: React.FC = () => {
  const [kmsPerDay, setKmsPerDay] = useState<number>(15);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const minKm: number = 15;
  const maxKm: number = 150;

  // Base costs for 15km/day
  const basePetrolCost = 13.50;
  const baseElectricCost = 8.58;
  const baseMonthlySavings = 4.92;

  // Calculate current costs based on kmsPerDay
  const calculateCosts = () => {
    const ratio = kmsPerDay / 15; // Ratio compared to base 15km
    const petrolCost = (basePetrolCost * ratio).toFixed(2);
    const electricCost = (baseElectricCost * ratio).toFixed(2);
    const monthlySavings = (baseMonthlySavings * ratio).toFixed(2);
    const annualSavings = (parseFloat(monthlySavings) * 12).toFixed(2);
    
    return {
      petrolCost,
      electricCost,
      monthlySavings,
      annualSavings
    };
  };

  const { petrolCost, electricCost, monthlySavings, annualSavings } = calculateCosts();

  const handleMove = (clientX: number) => {
    if (!sliderRef.current || !thumbRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    let newPosition = clientX - sliderRect.left;
    
    // Constrain position within slider bounds
    newPosition = Math.max(0, Math.min(newPosition, sliderRect.width));
    
    // Calculate percentage and corresponding KM value
    const percentage = (newPosition / sliderRect.width) * 100;
    const newKm = Math.round(minKm + (maxKm - minKm) * (percentage / 100));
    
    // Update position and value
    thumbRef.current.style.left = `${percentage}%`;
    setKmsPerDay(newKm);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      e.preventDefault(); // Prevent scrolling while dragging
      handleMove(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // Initialize thumb position based on initial kmsPerDay value
  useEffect(() => {
    if (thumbRef.current) {
      const percentage = ((kmsPerDay - minKm) / (maxKm - minKm)) * 100;
      thumbRef.current.style.left = `${percentage}%`;
    }
  }, []);

  return (
    <div className='w-full flex items-center justify-center bg-[#1b1b1b] pt-10 pb-10'>
      <div className='lg:w-[85%] w-[95%] flex flex-col items-center justify-center text-white'>
        <p className='text-green-600 text-[20px] font-semibold'>Calculate Expenses</p>
        <p className='lg:text-[40px] text-[25px] font-bold'>Ev Savings Calculator</p>
        <p className='text-gray-300 font-semibold'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
        <p className='text-gray-300 font-semibold mt-3'>Quis leo ullamcorper, ornare purus sed,</p>
        <div className='w-full flex flex-col lg:flex-row justify-between pt-10 gap-5 lg:gap-0'>
          <div className='lg:w-[48%] w-full'>
            <p className='text-[20px] font-semibold'>KMS Per Day: <span className='text-green-600 font-semibold'>{kmsPerDay}KMS</span></p>
            <div 
              ref={sliderRef}
              className='w-full h-[5px] rounded-2xl bg-gray-300 mt-5 relative cursor-pointer'
            >
              <div 
                ref={thumbRef}
                className='w-[20px] h-[20px] bg-green-600 absolute rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 cursor-grab active:cursor-grabbing'
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              />
            </div>
            <div className='w-full flex items-center justify-between mt-2'>
              <p className='font-semibold'>Min: <span className='font-semibold'>{minKm}KM</span></p>
              <p className='font-semibold'>Max: <span className='font-semibold'>{maxKm}KM</span></p>
            </div>
            <div className='w-full flex mt-5 pb-7 border-b-[1px] border-white'>
                <p>Note: <span>For calculations, The Fuel Price is Considered To Be: $0.9/ Litre</span></p>
            </div>
            <div className='w-full pt-5'>
                <p className='text-sm'>
                    **Disclaimer:  The savings estimates generated by the EV Savings Calculator are intended for 
                    informational purposes only and are approximate in nature. Actual savings may differ based on 
                    various factors, including your driving habits, road conditions, maintenance routines, vehicle 
                    efficiency, and more. We recommend using this tool as a guideline and seeking personalized advice 
                    from professionals for tailored recommendations. We do not guarantee the accuracy or completeness 
                    of the results and disclaim any liability for discrepancies or decisions made based on this information.**
                </p>
            </div>
          </div>
          <div className='lg:w-[48%] w-full bg-[#252525] p-8 flex flex-col gap-4'>
            <div className='w-full flex flex-col md:flex-row lg:flex-row gap-5 lg:gap-0 border-b-[1px] border-white pb-4'>
                <div className='lg:w-[50%] w-full md:w-[50%] text-white border-r-[1px] border-white'>
                    <p className='text-green-600'>Petrol Bike/Scooter</p>
                    <p className='font-bold text-[20px]'>Monthly Petrol cost: ${petrolCost}</p>
                </div>
                <div className='lg:w-[50%] w-full md:w-[50%] text-white lg:pl-3 pl-0'>
                    <p className='text-green-600'>Glidex E-bike</p>
                    <p className='font-bold text-[20px]'>Monthly Electricity cost: ${electricCost}</p>
                </div>
            </div>
            <p className='text-green-600'>Your Savings on Glidex E-bike</p>
            <div className='w-full p-5 bg-[#333333] flex justify-between'>
                <p className='text-[20px] font-bold'>Monthly Savings:</p>
                <p className='text-[20px] font-bold'>${monthlySavings}</p>
            </div>
            <div className='w-full p-5 bg-[#333333] flex justify-between'>
                <p className='text-[20px] font-bold'>Anual Savings:</p>
                <p className='text-[20px] font-bold'>${annualSavings}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;