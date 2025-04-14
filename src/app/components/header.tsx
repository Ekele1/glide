"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Slider = dynamic(() => import("react-slick"), { ssr: false }) as any;

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

interface SubItem {
  label: string;
  href: string;
}

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const router = useRouter();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Pages",
      href: "#",
      subItems: [
        { label: "About Us", href: "/about" },
        { label: "Frequent QA's", href: "/frequent" },
        { label: "Login", href: "/login" },
        { label: "Store", href: "/store" },
      ],
    },
    { label: "Shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const carouselItems = [
    "Summer Sale! Save up to 25% on New Arrivals!",
    "Fall save! Save $200 On Black Models!",
    "Book And Get Free Test Drive Today!",
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  const handleMouseEnter = (itemLabel: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const toggleMobileItem = (itemLabel: string) => {
    setExpandedMobileItem(expandedMobileItem === itemLabel ? null : itemLabel);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const button = document.getElementById("hamburger-button");

      if (
        showMobileMenu &&
        menu &&
        !menu.contains(event.target as Node) &&
        button &&
        !button.contains(event.target as Node)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMobileMenu]);

  return (
    <div className="w-full bg-[#03360b] text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="w-full h-[50px] flex items-center justify-center bg-green-800">
        <div className="w-[95%] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaInstagram className="hover:opacity-80 cursor-pointer" size={18} />
            <FaXTwitter className="hover:opacity-80 cursor-pointer" size={18} />
          </div>
          <div className="w-[40%] md:w-[30%]">
            <Slider {...carouselSettings}>
              {carouselItems.map((text, index) => (
                <div key={index} className="text-center px-2">
                  <p className="text-sm truncate">{text}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-[60px]"></div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-[95%] mx-auto h-[80px] flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 font-medium">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-300 transition-colors">
                {item.subItems ? (
                  <span className="py-2">{item.label}</span>
                ) : (
                  <Link href={item.href} className="py-2 block">
                    {item.label}
                  </Link>
                )}
                {item.subItems && (
                  activeDropdown === item.label ? <IoIosArrowUp /> : <IoIosArrowDown />
                )}
              </div>
              {item.subItems && activeDropdown === item.label && (
                <div 
                  className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="text-[35px] font-bold">
          Glide
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <FiUser size={25} className="cursor-pointer hover:text-green-300" />
          <IoCartOutline size={25} className="cursor-pointer hover:text-green-300" />
          <div className="lg:hidden flex">
            <button id="hamburger-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {showMobileMenu ? <RxCross1 size={25} /> : <RxHamburgerMenu size={25} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`
          lg:hidden fixed inset-y-0 left-0 w-64 bg-[#03360b] z-50
          transform transition-transform duration-300 ease-in-out
          ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}
          border-r border-gray-700 shadow-xl
        `}
        style={{ top: "130px" }}
      >
        <div className="h-full overflow-y-auto py-4 px-6">
          {navItems.map((item) => (
            <div key={item.label} className="mb-3">
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => {
                  if (item.subItems) {
                    toggleMobileItem(item.label);
                  } else {
                    router.push(item.href);
                    setShowMobileMenu(false);
                  }
                }}
              >
                {item.subItems ? (
                  <span className="font-medium">{item.label}</span>
                ) : (
                  <Link href={item.href} className="font-medium" onClick={() => setShowMobileMenu(false)}>
                    {item.label}
                  </Link>
                )}
                {item.subItems && (
                  expandedMobileItem === item.label ? <IoIosArrowUp /> : <IoIosArrowDown />
                )}
              </div>

              {item.subItems && expandedMobileItem === item.label && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      onClick={() => {
                        setShowMobileMenu(false);
                        setExpandedMobileItem(null);
                      }}
                      className="block py-1 text-gray-300 hover:text-white"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          style={{ top: "130px" }}
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
};

export default Header;