import React from "react";
import Image from "next/image";
import DropdownsAccount from "./DropdownAccount";
import { HiHeart } from "react-icons/hi";

const Navbar = () => {
  return (
    
<nav className="bg-white px-2 sm:px-4 py-1.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
      <div className="flex items-center">
        <Image src="/shop.png" className="h-12 mr-3 sm:h-12" alt="logo" height={10} width={50}/>
        <span className="self-center text-xl font-semibold whitespace-nowrap hidden sm:inline">Ecommerce</span>
        <div className="lg:ml-4 md:ml-4 sm:ml-0">              
        <div className="relative pt-1">
          <div className="absolute inset-y-0 pt-1 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>      </div>
            <input type="text" id="search-navbar" className="block xl:w-full w-40 px-3 py-1.5 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className="flex md:order-2">
        <button type="button" className="text-gray-900 hover:text-gray-800 duration-200 cursor-pointer focus:ring-gray-300 font-medium rounded-lg text-sm py-1.5 mr-1 px-1 text-center inline-flex items-center">
          <span aria-hidden="true" className="w-6 h-6 text-3xl mb-2 sm:ml-0 sm:mr-0"><HiHeart/></span>
        </button>
        <button type="button" className="text-gray-900 hover:text-gray-800 duration-200 cursor-pointer lg:px-3 focus:ring-gray-300 font-medium rounded-lg text-sm py-1.5 px-2.5 text-center inline-flex items-center mr-1">
          <svg aria-hidden="true" className="w-7 h-7 mt-1 sm:ml-0 sm:mr-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        </button>
        <div>
          <DropdownsAccount />
        </div>
      </div>
      <div className="items-center justify-center hidden w-full mr-32 md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 border mr-16 border-gray-100 rounded-lg mx-auto bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:text-gray-800 duration-200 md:hover:bg-transparent md:hover:text-gray-800 md:p-0">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:text-gray-800 duration-200 md:hover:bg-transparent md:hover:text-gray-800 md:p-0">Product</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:text-gray-800 duration-200 md:hover:bg-transparent md:hover:text-gray-800 md:p-0">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:text-gray-800 duration-200 md:hover:bg-transparent md:hover:text-gray-800 md:p-0">Support</a>
          </li>
        </ul>
      </div>
  </div>
</nav>

  );
};

export default Navbar;