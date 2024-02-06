"use client";
import { IoSearchSharp } from "react-icons/io5";
import { VscTerminalPowershell } from "react-icons/vsc";
import { CiMenuKebab } from "react-icons/ci";
import Image from "next/image";
import logo from "../../assests/cloud-logo.svg";
import man from "../../assests/man.png";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="fixed top-0 w-full z-10">
      <nav className="bg-white p-3 border-b border-gray-600">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-black font-bold flex">
            <div className="md:hidden">
              <button onClick={toggleDropdown}>
                <svg
                  className="h-6 w-6 fill-current text-black"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6h18v2H3V6zM3 11h18v2H3v-2zM3 16h18v2H3v-2z"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-300 mt-1 py-2 w-full">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Overview
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Solutions
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Products
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Pricing
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Resources
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Docs
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Support
                  </button>
                </div>
              )}
            </div>
            <Image src={logo} alt="" />
          </div>

          {/* Toggle button for small screens */}
          <div className="md:hidden flex gap-3 items-center">
            <div className="text-xl">
              <IoSearchSharp />
            </div>
            <button className="h-8 w-8 rounded-full bg-white border border-black flex items-center justify-center">
              <CiMenuKebab className="text-center" />
            </button>
            <button className="h-8 w-8 rounded-full bg-white border border-black flex items-center justify-center">
              <Image
                src={man}
                alt=""
                className="object-contain h-full w-full rounded-full"
              />
            </button>
          </div>

          {/* Navigation items for large screens */}
          <div className="hidden md:flex space-x-6">
            {/* Dropdowns */}
            <div className="relative text-left flex gap-8">
              <button className="inline-flex justify-center w-full text-sm font-medium text-gray-500">
                Overview
              </button>
              <button className="inline-flex justify-center w-full text-sm font-medium text-gray-500">
                Solutions
              </button>
              <button className="inline-flex justify-center w-full text-sm font-medium text-gray-500">
                Products
              </button>
              <button className="inline-flex justify-center w-full text-sm font-medium text-gray-500">
                Pricing
              </button>
              <button className="inline-flex justify-center w-full text-sm font-medium text-gray-500">
                Resources
              </button>
            </div>
            {/* Add more navigation items as needed */}
          </div>

          {/* Additional icons and buttons */}
          <div className="hidden md:flex items-center space-x-6 text-black">
            {/* Search bar icon */}
            <div className="h-6 w-6 text-lg flex items-center justify-center">
              <IoSearchSharp />
            </div>
            {/* Cloud shell icon */}
            <div className="h-6 w-6 text-lg flex items-center justify-center">
              <VscTerminalPowershell />
            </div>
            {/* Text buttons */}
            <button className="text-black text-sm">Docs</button>
            <button className="text-black">Cloud</button>
            {/* Button with icon and dropdown */}
            <div className="relative inline-block text-left">
              <button className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                Language
                {/* Language dropdown icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                </svg>
              </button>
            </div>
            {/* More button */}
            <button className="text-blue-500 hover:bg-blue-200 rounded-md px-4 py-2">
              Console
            </button>
            {/* Kebab menu buttons */}
            <button className="h-8 w-8 rounded-full bg-white border border-black flex items-center justify-center">
              <CiMenuKebab className="text-center" />
            </button>
            <button className="h-8 w-8 rounded-full bg-white border border-black flex items-center justify-center">
              <Image
                src={man}
                alt=""
                className="object-contain h-full w-full rounded-full"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* second */}
      <nav className="bg-white p-3 shadow-b shadow-lg flex justify-between items-center">
        {/* Buttons */}
        <div className="hidden md:flex flex-grow justify-end gap-4">
          {/* Button 1 */}
          <button className="bg-white hover:bg-blue-200 text-blue-600  py-1 px-5 border border-gray-400 rounded shadow mr-2">
            Contact Us
          </button>
          {/* Button 2 */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 border border-gray-400 rounded shadow">
            Start Free
          </button>
        </div>

        {/* Centered buttons for small screens */}
        <div className="md:hidden flex justify-center flex-grow">
          {/* Button 1 */}
          <button className="bg-white hover:bg-blue-200 text-blue-600  py-1 px-5 border border-gray-400 rounded shadow mr-2">
            Contact Us
          </button>
          {/* Button 2 */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 border border-gray-400 rounded shadow">
            Start Free
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
