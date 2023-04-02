import React from "react";
import Image from "next/image";

const Trending = [
  {
    id : "1",
    name: "Puma Cali Sneaker",
    price: "Rp.1.250.000",
    discountPrice: "Rp.1.500.000",
    image1: "/puma2.png",
    image2: "/puma1.png",
  },
  {
    id : "2",
    name: "Schematics Hoodie",
    price: "Rp.3.250.000",
    discountPrice: "Rp.3.500.000",
    image1: "/hoodie1.png",
    image2: "/hoodie2.png",
  },
];

const HottestProduct = () => {
  return (
    <section>
      <div className="container xl:mx-auto xl:max-w-screen-xl max-w-screen-sm">
        <div className="rounded-lg mx-2 bg-blue-300 text-white p-8 mt-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
          <div className="flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10">
            <h4 className="text-3xl xl:text-6xl text-center md:text-left font-bold text-white md:pb-2">
              Trending Products Of The Week
            </h4>
            <p className="text-center md:text-left text-white opacity-70 md:pb-6">
              Get Your Hands on This Weeks Hottest Trending Products - Shop
              Now!
            </p>
          </div>
          <div className="absolute bottom-0 right-20 hidden xl:block z-10">
            <Image
              alt="sepatu"
              src="/girlshopping1.png"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bg-blue-400 opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
        </div>
      </div>
      <section className="mx-auto max-w-screen-x py-0 text-black xl:py-0">
        <div className="mx-auto px-6 xl:px-12">
          <div className="row-gap-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mt-10 lg:pl-10">
              <div className="text-white">
                <div className="group relative mb-4 overflow-hidden rounded-md border bg-gray-500 py-10 px-8 shadow-lg transition-all duration-200 ease-in-out">
                  <h3 className="text-xs uppercase">Puma</h3>
                  <p className="mt-2 font-sans text-3xl font-bold">
                    Cali Sneaker
                  </p>
                  <p className="mt-4">
                    A little white cant hurt anybody, right?
                  </p>
                  <div className="absolute top-4 right-2 xl:right-5">
                    <Image
                      alt="sepatu"
                      src="/sepatuputih.png"
                      width={160}
                      height={100}
                      className="w-24 h-22 xl:w-40 xl:h-40 "
                    />
                  </div>
                  <div className="absolute top-0 left-0 right-20 flex h-full w-full items-center justify-center bg-white px-10 text-black opacity-0 transition group-hover:opacity-100">
                    <Image
                      className="absolute h-full w-full object-cover"
                      src="/hoversepatu.png"
                      width={900}
                      height={600}
                      alt="sch"
                    />
                  </div>
                </div>

                <div className="group relative overflow-hidden  rounded-md border bg-black shadow-lg transition-all duration-200 ease-in-out">
                  <Image
                    className="absolute h-full w-full object-cover"
                    src="/sch1.png"
                    width={900}
                    height={800}
                    alt="sch"
                  />
                  <div className="text-white lg:w-1/2">
                    <div className="bg-blue-600 bg-opacity-50 p-8 opacity-90 backdrop-blur-lg xl:p-12">
                      <h3 className="text-xs uppercase">SCHEMATICS 2022</h3>
                      <h2 className="font-sans text-3xl font-bold">
                        Unleash The Soul With Our Merch
                      </h2>
                      <a
                        href="#"
                        className="mt-6 -mb-7 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600"
                      >
                        {" "}
                        Explore{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap xl:flex-col xl:gap-8 mt-8">
              <div className="flex flex-row mx-auto xl:mr-8 xl:ml-0 xl:flex-row gap-5 justify-center">
                {Trending.map((Trending) => (
                  <div className="group xl:my-10 mx-auto flex xl:w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={Trending.id}>
                    <a
                      className="relative mx-3 mt-3 flex h-32 w-3/3 xl:h-60 xl:w-11/12  rounded-xl"
                      href="#"
                    >
                      <Image
                        className="peer absolute top-0 right-0 h-full w-full object-cover"
                        src={Trending.image1}
                        alt="product image"
                        width={400}
                        height={400}
                      />
                      <Image
                        className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                        src={Trending.image2}
                        alt="product image"
                        width={400}
                        height={400}
                      />
                    </a>
                    <div className="mt-4 px-5 pb-5 lg:pb-5">
                      <a href="#">
                        <h5 className="xl:text-xl tracking-tight text-slate-900">
                          {Trending.name}
                        </h5>
                      </a>
                      <div className="mt-2 mb-3 xl:mb-5 flex items-center justify-between">
                        <p>
                          <span className="xl:text-2xl font-bold text-slate-900">
                            {Trending.price}
                          </span>
                          <span className="text-sm ml-1 hidden xl:inline-flex text-slate-900 line-through">
                            {Trending.discountPrice}
                          </span>
                        </p>
                      </div>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md bg-slate-900 px-2 xl:px-5 py-2 xl:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Add to cart
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HottestProduct;
