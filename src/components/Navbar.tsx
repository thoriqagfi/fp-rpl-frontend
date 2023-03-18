import React from "react";
import Image from "next/image";
import DropdownsStart from "./DropdownsStart";

const Navbar = () => {
  return (
    
<nav className="bg-white px-2 sm:px-4 py-1.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
      <div className="flex items-center">
        <Image src="https://flowbite.com/docs/images/logo.svg" className="h-12 mr-3 sm:h-12" alt="Flowbite Logo" height={30} width={30}/>
        <span className="self-center text-xl font-semibold whitespace-nowrap hidden sm:inline">Ecommerce</span>
        <div className="lg:ml-4 md:ml-4 sm:ml-0">              
        <div className="relative pt-1">
          <div className="absolute inset-y-0 left-0 pt-1 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>      </div>
            <input type="text" id="search-navbar" className="block xl:w-full w-40 px-3 py-1.5 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className="flex md:order-2">
        <div>
          <DropdownsStart />
        </div>
      </div>
      <div className="items-center justify-center hidden w-full mr-32 md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 mr-10 border border-gray-100 rounded-lg mx-auto bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Product</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Support</a>
          </li>
        </ul>
      </div>
  </div>
</nav>

  );
};

export default Navbar;