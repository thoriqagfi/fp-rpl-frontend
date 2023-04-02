import React from "react";
import { BsSearch, BsShopWindow, BsFilter } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

const Menu = () => {
  const Category = [
    {
      title: "Location",
      icon: <MdLocationPin />,
      title2: "United States",
      title3: "Indonesia",
    },
    {
      title: "Product",
      icon: <TbCategory />,
      title2: "Merch",
      title3: "Another Product",
    },
  ];
  const Category2 = [
    {
      title: "Merchant",
      icon: <BsShopWindow />,
      title2: "Verified",
      title3: "Other",
    },
    {
      title: "Filter",
      icon: <BsFilter />,
      title2: "Filter 1",
      title3: "Filter 2",
    },
  ];

  return (
    <div className="-mt-20 xl:-mt-28 xl:p-6 mb-1 bg-white shadow-xl flex flex-col xl:flex-row mx-2 xl:mx-40 rounded-lg relative z-10">
      <div className="flex flex-row pt-2 pb-1 xl:py-4">
        {Category.map((category) => (
          <details className="group transition-all duration-150 h-10 open:h-32 overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-8 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-2xl">{category.icon}</span>

              <span className="ml-3 xl:text-2xl font-medium">
                {category.title}
              </span>

              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav className="mt-1.5 ml-8 flex flex-col transition-all duration-500">
              {category.title2 && (
                <a
                  href=""
                  className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium">
                    {category.title2}
                  </span>
                </a>
              )}

              {category.title3 && (
                <a
                  href=""
                  className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium">
                    {category.title3}
                  </span>
                </a>
              )}
            </nav>
          </details>
        ))}
      </div>
      <div className="flex flex-row pt-1 xl:py-4">
        {Category2.map((category) => (
          <details className="group transition-all duration-150 h-10 open:h-32 overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-8 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-2xl">{category.icon}</span>

              <span className="ml-3 xl:text-2xl font-medium">
                {category.title}
              </span>

              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav className="mt-1.5 ml-8 flex flex-col transition-all duration-500">
              {category.title2 && (
                <a
                  href=""
                  className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium">
                    {category.title2}
                  </span>
                </a>
              )}

              {category.title3 && (
                <a
                  href=""
                  className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium">
                    {category.title3}
                  </span>
                </a>
              )}
            </nav>
          </details>
        ))}
      </div>
      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-4 xl:px-8 xl:ml-8 py-3 my-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lime-400 group-hover:translate-x-0 ease">
          <BsSearch />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          Search
        </span>
        <span className="relative invisible">Button Text</span>
      </a>
    </div>
  );
};

export default Menu;
