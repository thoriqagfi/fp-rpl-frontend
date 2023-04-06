import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import ListSideBar from "@/components/dashboardadmin/ListSideBar";
import DropDownSidebar from "@/components/dashboardadmin/DropdownSidebar";
import ListAdminProfile from "@/components/dashboardadmin/ListAdminProfile";

import {
  AiFillAppstore,
  AiTwotoneShop,
  AiOutlineShop,
  AiOutlineShopping,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill, BsFilterRight, BsPeople } from "react-icons/bs";
import { FaUserCircle, FaCrown } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineHelp, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";

import UserProfile from "public/user-profile.jpeg";
import PlayStore from "public/playstore.png";

function DashbaordAdmin() {
  const [open, setOpenDropdown] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setShowSideBar(!showSideBar)}
                className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <HiMenuAlt2 className="w-6 h-6" />
              </button>
              <Link href="#" className="flex ml-2 md:mr-24">
                <Image
                  src={PlayStore}
                  className="h-8 w-8 mr-3"
                  alt="Company Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  FP RPL
                </span>
              </Link>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    className="flex text-sm bg-gray-800 rounded-full hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-600"
                    onClick={() => setShowProfile(!showProfile)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      src={UserProfile}
                      className="w-8 h-8 rounded-full"
                      alt="user photo"
                    ></Image>
                  </button>
                </div>
                <div
                  className={`z-50 absolute right-4 top-[50px] ${
                    showProfile ? "block" : "hidden"
                  } text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                      neil.sims@fp-rpl.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <ListAdminProfile href="#" name="Dashboard" />
                    <ListAdminProfile href="#" name="Settings" />
                    <ListAdminProfile href="#" name="Earnings" />
                    <ListAdminProfile href="#" name="Sign Out" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          showSideBar ? "-translate-x-full" : "translate-x-0"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <ListSideBar
              href="#"
              icon={MdOutlineSpaceDashboard}
              name="Dashboard"
            />
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <AiTwotoneShop />
                <span
                  sidebar-toggle-item
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                >
                  E-commerce
                </span>
                <IoIosArrowDown
                  onClick={() => setOpenDropdown(!open)}
                  className={`duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <ul
                id="dropdown-example"
                className={`${open ? "block" : "hidden"} py-2 space-y-2`}
              >
                <DropDownSidebar name="Product" />
                <DropDownSidebar name="Billing" />
                <DropDownSidebar name="Invoice" />
              </ul>
            </li>
            <ListSideBar href="#" icon={AiFillAppstore} name="Kanban" />
            <ListSideBar href="#" icon={RiInboxArchiveFill} name="Inbox" />
            <ListSideBar href="#" icon={FaUserCircle} name="Users" />
            <ListSideBar href="#" icon={BsFillBagCheckFill} name="Products" />
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <ListSideBar href="#" icon={FaCrown} name="Upgrade to Pro" />
            <ListSideBar href="#" icon={TbNotes} name="Documentation" />
            <ListSideBar href="#" icon={MdOutlineHelp} name="Help" />
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-gray-200 min-h-screen">
        <div className="p-4 mt-14">
          <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-4">
            <span className="flex items-center justify-center h-24 rounded-md bg-white shadow-lg">
              <AiOutlineShopping className="fill-orange-600 w-1/2 h-1/2" />
              <span className="w-full h-full text-gray-900 flex flex-col items-start justify-center px-4">
                <h4 className="text-sm">Total Sales</h4>
                <h2 className="text-xl">Rp 3.198.000,-</h2>
              </span>
            </span>
            <span className="flex items-center justify-center h-24 rounded-md bg-white shadow-lg">
              <AiOutlineShop className="fill-purple-600 w-1/2 h-1/2" />
              <span className="w-full h-full text-gray-900 flex flex-col items-start justify-center px-4">
                <h4 className="text-sm">Total Expenses</h4>
                <h2 className="text-xl">Rp 2.709.000,-</h2>
              </span>
            </span>
            <span className="flex items-center justify-center h-24 rounded-md bg-white shadow-lg">
              <BsPeople className="fill-blue-600 w-5/12 h-[41.67%]" />
              <span className="w-full h-full text-gray-900 flex flex-col items-start justify-center px-4">
                <h4 className="text-sm">Total Visitors</h4>
                <h2 className="text-xl">2023</h2>
              </span>
            </span>
            <span className="flex items-center justify-center h-24 rounded-md bg-white shadow-lg">
              <BsFilterRight className="fill-green-600 w-1/2 h-1/2" />
              <span className="w-full h-full text-gray-900 flex flex-col items-start justify-center px-4">
                <h4 className="text-sm">Total Order</h4>
                <h2 className="text-xl">1717</h2>
              </span>
            </span>
          </div>

          <div className="mt-8 flex items-center justify-between pb-4">
            <div>
              <button
                id="dropdownRadioButton"
                className="inline-flex gap-2 items-center text-gray-500 bg-white border border-gray-300 hover:bg-gray-100  font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                type="button"
              >
                <AiOutlineClockCircle />
                Last 30 days
                <IoIosArrowDown
                  onClick={() => setOpenTime(!openTime)}
                  className={`duration-300 ${
                    openTime ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownRadio"
                className={`z-10 absolute ${
                  openTime ? "block" : "hidden"
                } w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownRadioButton"
                >
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-1"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        Last day
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-2"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        Last 7 days
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-3"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        Last 30 days
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-4"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        Last month
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-5"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        Last year
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <label className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>

          <div className="h-full w-full rounded-lg bg-red-50 text-black relative overflow-x-auto shadow-lg">
            <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Google Pixel Phone
                  </th>
                  <td className="px-6 py-4">Gray</td>
                  <td className="px-6 py-4">Phone</td>
                  <td className="px-6 py-4">$799</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Google Pixel Phone
                  </th>
                  <td className="px-6 py-4">Gray</td>
                  <td className="px-6 py-4">Phone</td>
                  <td className="px-6 py-4">$799</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashbaordAdmin;
