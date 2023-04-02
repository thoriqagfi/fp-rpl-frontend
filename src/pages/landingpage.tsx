import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Menu from "@/components/landingpage/Menu";
import TrendingProduct from "@/components/landingpage/TrendingProduct";
import FeaturedProduct from "@/components/landingpage/FeaturedProduct";
import Testimonial from "@/components/landingpage/Testimonial";
import Tabs from "@/components/landingpage/Tabs";
import Newsletter from "@/components/landingpage/Newsletter";
import ContentTab1 from "@/components/landingpage/ContentTab1";
import Partner from "@/components/landingpage/Partner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Commerce App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <main className="bg-gray-100">
          <section>
            <div className=" bg-blue-400 xl:mx-10 xl:my-4 rounded-b-3xl xl:rounded-3xl">
              <div className="mx-auto h-full py-5 md:pt-8 pb-24 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                  <div className="ml-5 xl:ml-10">
                    <div className="xl:mb-6 xl:max-w-xl">
                      <div className="mb-2">
                        <p className="bg-teal-accent-400 inline-block rounded-full bg-lime-400 xl:px-4 py-2 px-4 text-sm xl:text-xs font-semibold uppercase tracking-wider text-indigo-900">
                          25% off this summer
                        </p>
                      </div>
                      <h2 className="mb-0 max-w-lg font-extrabold text-slate-700 text-6xl xl:text-8xl sm:leading-snug">
                        All Your Style <br />
                        Are
                        <span className="rounded- abg-gradient-to-r inline-block px-2 font-bold text-white">
                          Here
                        </span>
                      </h2>
                      <p className="mx-auto hidden sm:block mt-2 max-w-5xl text-gray-800 sm:mt-2 sm:text-lg">
                        Discover a Wide Range of Cool Merchandise to Elevate
                        Your Lifestyle at Our Store
                      </p>
                    </div>
                    <div className="mt-4 xl:my-2 flex flex-col xl:items-center md:flex-row">
                      <a
                        href="#"
                        className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-blue-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                      >
                        {" "}
                        Explore Now{" "}
                      </a>
                      <a
                        href="#"
                        aria-label=""
                        className="group xl:inline-flex hidden items-center font-semibold text-white"
                      >
                        More About Us
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
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
                    </div>
                  </div>
                  <div className="relative lg:ml-32 lg:block lg:w-1/2">
                    <div className="w-fit hidden xl:block rounded-[2rem] mx-auto ">
                      <div className="carousel  mr-10 -ml-10">
                        <Image
                          className="mx-auto 2xl:-mb-14 pb-5 relative z-0 transition-transform duration-300 hover:carousel.pause"
                          alt="img"
                          src="/girl (3).png"
                          width={900}
                          height={900}
                        />
                        <Image
                          className="mx-auto mr-28 2xl:-mb-14 pb-5 relative z-0 transition-transform duration-300 hover:carousel.pause"
                          alt="img"
                          src="/girl 2.png"
                          width={900}
                          height={900}
                        />
                        <Image
                          className="mx-auto mr-28 2xl:-mb-14 pb-5 relative z-0 transition-transform duration-300 hover:carousel.pause"
                          alt="img"
                          src="/girl 3.png"
                          width={900}
                          height={900}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-24 right-5 xl:top-16 xl:right-32 floating">
                    <Image
                      className="mx-auto ml-10 2xl:-mb-14 pb-5 relative z-0 transition-transform duration-300 hover:transform hover:scale-110"
                      alt="img"
                      src="/sale.png"
                      width={120}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <Menu />
          </section>

          <section>
            <TrendingProduct />
          </section>

          <section>
            <FeaturedProduct />
          </section>

          <section>
            <Testimonial />
          </section>

          <section className="hidden xl:block">
            <Tabs />
          </section>

          <section className="block xl:hidden">
            <ContentTab1 />
          </section>

          <section className="block xl:hidden">
            <Partner />
          </section>

          <section className="block xl:hidden">
            <Newsletter />
          </section>
        </main>
      </section>
    </>
  );
}
