"use client"
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
import { FiBatteryCharging } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiPowerLightning } from "react-icons/gi";
import {items} from '../components/product';

type SortOption = 'latest' | 'popularity' | 'low price' | 'high price';


const categories: string[] = [
  "Accessories",
  "Electric Kick Scooters",
  "Folding E-Scooters",
  "Luxury E-Scooters",
  "Portable E-Scooters"
];

type Product = {
    img: string;
    name: string;
    subName: string;
    batery: string;
    range: string;
    Emission: string;
    category: string;
  };

const tags: string[] = ["Home Audio", "Ride Green", "Smart Scooter", "VR Games"];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className='w-full bg-[#252525] rounded-lg overflow-hidden'>
    <div className='w-full h-[450px] relative'>
      <Image 
        className='w-full h-full object-cover' 
        src={product.img} 
        fill 
        sizes='(max-width: 768px) 100vw, 50vw'
        alt={product.name}
      />
    </div>
    <div className='p-5 text-white flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <p className='font-bold text-[20px]'>{product.name}</p>
        <p className='font-semibold'>{product.subName}</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <FiBatteryCharging size={30} color='green'/>
          <div>
            <p>Battery</p>
            <p className='text-[18px] font-bold'>{product.batery}</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <RiLightbulbFlashLine size={30} color='green'/>
          <div>
            <p>Range</p>
            <p className='text-[18px] font-bold'>{product.range}</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <GiPowerLightning size={30} color='green'/>
          <div>
            <p>Emission</p>
            <p className='text-[18px] font-bold'>{product.Emission}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortOption>('latest');
  const productsPerPage = 10;

  // Filter products based on search and categories
  const filteredProducts = items.filter((product: Product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.subName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                          selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a: Product, b: Product) => {
    switch(sortOption) {
      case 'popularity':
        // Add popularity logic if available
        return 0;
      case 'low price':
        // Add price comparison if available
        return 0;
      case 'high price':
        // Add price comparison if available
        return 0;
      case 'latest':
      default:
        return 0;
    }
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortOption(e.target.value as SortOption);
    setCurrentPage(1);
  };

  return (
    <div className='w-full bg-[#1b1b1b] pb-10'>
      <div className='w-full py-12 md:py-16 flex items-center justify-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Shop</h1>
      </div>
      
      <div className='w-full flex items-center justify-center px-4'>
        <div className='w-full max-w-7xl flex flex-col lg:flex-row gap-8'>
          {/* Sidebar */}
          <div className='lg:w-1/4 w-full bg-[#333333] p-5 flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <p className='font-bold text-[20px]'>Search</p>
              <div className='w-full h-[2px] bg-gray-400 mb-2'>
                <div className='w-[30%] h-full bg-green-500 rounded-2xl'></div>
              </div>
              <div className='w-full h-[40px] flex items-center pr-2 justify-between bg-[#1d1c1c]'>
                <input 
                  className='w-[80%] h-full pl-2 outline-none bg-transparent text-white'
                  type="search" 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <IoSearch color='green'/>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <p className='font-bold text-[20px]'>Category</p>
              <div className='w-full h-[2px] bg-gray-400 mb-2'>
                <div className='w-[30%] h-full bg-green-500 rounded-2xl'></div>
              </div>
              <div className='w-full flex flex-col gap-3'>
                {categories.map((category, index) => (
                  <div key={index} className='w-full flex items-center gap-3'>
                    <input 
                      className='accent-green-500'
                      type="checkbox" 
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <p>{category}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <p className='font-bold text-[20px]'>Tags</p>
              <div className='w-full h-[2px] bg-gray-400 mb-2'>
                <div className='w-[30%] h-full bg-green-500 rounded-2xl'></div>
              </div>
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className='px-3 py-1 bg-[#1d1c1c] hover:bg-green-600 rounded-2xl text-sm cursor-pointer'
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full h-[300px] relative mt-4'>
              <Image 
                className='w-full h-full object-cover' 
                src="/ad-banner.jpg" 
                fill 
                alt='Advertisement'
              />
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:w-3/4 w-full flex flex-col gap-8'>
            <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4'>
              <select 
                className='w-full md:w-1/3 h-[40px] p-2 outline-none bg-[#333333] text-white'
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="latest">Sort By Latest</option>
                <option value="popularity">Sort By Popularity</option>
                <option value="low price">Sort By Price low-high</option>
                <option value="high price">Sort By Price high-low</option>
              </select>
              <p className='text-gray-300'>
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} results
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {currentProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className='w-full flex items-center justify-center gap-3 text-white'>
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className='px-4 py-2 bg-[#333333] rounded disabled:opacity-50'
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-green-500' : 'bg-[#333333]'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className='px-4 py-2 bg-[#333333] rounded disabled:opacity-50'
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;