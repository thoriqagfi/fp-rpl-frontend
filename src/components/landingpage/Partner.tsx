import React from "react";
import Image from "next/image";

const Partner = () => {
  const Partner = [
    {
      logo: "/partner1.png",
      name: "Nasa",
    },
    {
      logo: "/partner2.png",
      name: "Amazon",
    },
    {
      logo: "/partner3.png",
      name: "Nike",
    },
    {
      logo: "/partner4.png",
      name: "Ikea",
    },
  ];
  return (
    <div className="container pt-7 pb-0 xl:my-14 px-5 xl:px-20 mx-auto">
      <section className=" text-gray-800 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Trusted by 2,000,000+ <br />
              <u className="text-blue-500">event and merchant.</u>
            </h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              quas?
            </p>
            <a
              className="inline-block px-7 py-3 bg-blue-500 text-white font-medium text-sm uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              href="#!"
              role="button"
            >
              Partner Up
            </a>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="grid grid-cols-2 gap-6">
              {Partner.map((item) => (
                <div className="mb-12">
                  <Image
                    src={item.logo}
                    className="px-6"
                    alt={item.name + " - logo"}
                    height={300}
                    width={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
