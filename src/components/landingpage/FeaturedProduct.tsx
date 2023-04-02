import React from "react";
import Image from "next/image";
import { TbShoppingCartPlus } from "react-icons/tb";

const FeaturedProduct = () => {
  const Product1 = [
    {
      src: "/hoodieee.png",
      alt: "Hoodie",
      title: "Hoodie",
      productCount: "1.000+ Product",
    },
    {
      src: "/shirtttt.png",
      alt: "Shirt",
      title: "Shirt",
      productCount: "1.000+ Product",
    },
    {
      src: "/hattt.png",
      alt: "Hat",
      title: "Hat",
      productCount: "1.000+ Product",
    },
  ];

  const Product2 = [
    {
      src: "/lanyard.png",
      alt: "Lanyard",
      title: "Lanyard",
      productCount: "1.000+ Product",
    },
    {
      src: "/tumbler.png",
      alt: "Tumbler",
      title: "Tumbler",
      productCount: "1.000+ Product",
    },
    {
      src: "/Sticker.png",
      alt: "Sticker",
      title: "Sticker",
      productCount: "1.000+ Product",
    },
    {
      src: "/Mug.png",
      alt: "Mug",
      title: "Mug",
      productCount: "1.000+ Product",
    },
  ];

  return (
    <main>
      <div>
        <div className="rounded-br-[4rem] sm:rounded-br-[8rem] relative shadow px-4 text-blue-800 xl:pt-20 py-10">
          <div className="relative mx-auto ml-4 mt-10 xl:mt-0 xl:ml-20 max-w-screen-lg">
            <h2 className="text-3xl font-bold sm:text-5xl">Featured Product</h2>
            <p className="text-xl mt-4 ml-1 sm:text-2xl">
              <a
                href="/"
                aria-label=""
                className="group inline-flex items-center text-blue-800"
              >
                Explore Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-2  mt-2 ml-2 h-6 w-6 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-bl-[4rem] sm:rounded-bl-[8rem] relative shadow px-4 text-blue-800 xl:pt-10 xl:py-10">
        <div className="bg-gray-100 w-full mt-10 gap-2 flex flex-col xl:flex-wrap xl:flex-row rounded-bl-[4rem] justify-center items-center">
          <div className="w-80 mb-5 mx-2 bg-white rounded-xl shadow-lg hover:shadow-2xl">
            <Image
              className="h-100 object-contain rounded-xl transition-transform duration-300 hover:transform hover:scale-105"
              src="/trend.png"
              alt=""
              width={600}
              height={100}
            />
          </div>
          <div className="flex xl:flex-row flex-col">
            {Product1.map((item) => (
              <div className="w-80 p-2 mx-2 mb-5 bg-white rounded-xl shadow-lg hover:shadow-2xl">
                <Image
                  className="h-60 object-contain rounded-xl transition-transform duration-300 hover:transform hover:scale-105"
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={100}
                />
                <div className="p-2">
                  <h2 className="font-bold text-xl mb-1 mx-2">{item.title}</h2>
                  <p className="text-m text-gray-600 mx-2">
                    {item.productCount}
                  </p>
                </div>
                <div className="m-2 flex">
                  <button className="lg:mx-0 bg-gray-800 text-white text-sm font-bold rounded-lg py-3 px-6  transform transition hover:scale-110 duration-300 ease-in-out">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex xl:flex-row flex-col">
            {Product2.map((item) => (
              <div className="w-80 p-2 mx-2 mb-5 bg-white rounded-xl shadow-lg hover:shadow-2xl">
                <Image
                  className="h-60 object-contain rounded-xl transition-transform duration-300 hover:transform hover:scale-105"
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={100}
                />
                <div className="p-2">
                  <h2 className="font-bold text-xl mb-1 mx-2">{item.title}</h2>
                  <p className="text-m text-gray-600 mx-2">
                    {item.productCount}
                  </p>
                </div>
                <div className="m-2 flex">
                  <button className="lg:mx-0 bg-gray-800 text-white text-sm font-bold rounded-lg py-3 px-6 transform transition hover:scale-110 duration-300 ease-in-out">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProduct;
