import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import ListSideBar from "@/components/ListSideBar";
import DropDownSidebar from "@/components/DropdownSidebar";
import ListAdminProfile from "@/components/ListAdminProfile";
import useAuthStore from "@/store/AuthStore";
import { Auth } from "@/components/auth/Auth";

import { AiTwotoneShop } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineHelp, MdOutlineSpaceDashboard } from "react-icons/md";

import UserProfile from "public/user-profile.jpeg";
import PlayStore from "public/playstore.png";
import { getToken, removeToken } from "@/lib/token";
import { apiMock } from "@/lib/apiMock";
import Loading from "@/components/Loading";
import WithAuth from "@/components/auth/withAuth";


import AddProductCard from "@/components/DashboardSeller/AddProductCard";

export default function Seller() {
  const router = useRouter();
  WithAuth();
  const [open, setOpenDropdown] = React.useState(false);
  const [showSideBar, setShowSideBar] = React.useState(true);
  const [showProfile, setShowProfile] = React.useState(false);

  const { user, logout, isLoading } = useAuthStore();
  const { data, isLoading: isLoadingProduct } = useQuery(["products"], async () => {
    const res = await apiMock.get("https://fp-rpl-backend-api-production.up.railway.app");
    return res.data.data;
  })
  
  if(isLoading) return <Loading />

  // React.useEffect(() => {
  //   console.log(data)
  //   if(!user) {
  //     window.location.href = '/login';
  //   }
  // }, [data, user])


  return (
    <div className="min-h-screen w-full">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setShowSideBar(!showSideBar)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <HiMenuAlt2 className="w-6 h-6" />
              </button>
              <Link href="/" className="flex ml-2 md:mr-24 gap-x-2 items-center">
                <RiDashboardFill
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  {user?.role.toUpperCase()} ACCOUNT
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
                      {user?.first_name + " " + user?.last_name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                      {user?.email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <ListAdminProfile href="#" name="Dashboard" />
                    <ListAdminProfile href="#" name="Settings" />
                    <ListAdminProfile href="#" name="Earnings" />
                    <ListAdminProfile href="/" name="Sign Out" onClick={() => {
                      router.push('/')
                      logout();
                    }}/>
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
                onClick={() => setOpenDropdown(!open)}
              >
                <AiTwotoneShop />
                <span
                  sidebar-toggle-item
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                >
                  E-commerce
                </span>
                <IoIosArrowDown
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
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <ListSideBar href={'/'} onClick={() => {logout()}} icon={BiLogOut} name="Logout" />
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 min-h-screen bg-white pt-36 pl-20 text-black">
        <h1 className="text-3xl font-bold pb-5">Add Product</h1>
        {
          data?.map((data: any, key: number) => {
            return (
              <div key={key}>
                <AddProductCard data={data}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}