import React from "react";
import CounterInput from "./counter";

type CheckoutCards = {
  image: string;
  name: string;
  details: string;
  price: string;
};

export const cartItems = [
  {
    id: "1",
    image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Nike Air 2019",
    details: "36EU White",
    price: "Rp.289.000",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Nike Air 2019",
    details: "36EU White",
    price: "Rp.289.000",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Nike Air 2019",
    details: "36EU White",
    price: "Rp.289.000",
  },
];

export const checkoutItems = [
  {
    id: "1",
    image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Nike Air 2019",
    details: "36EU White",
    price: "Rp.289.000",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Nike Air 2019",
    details: "36EU White",
    price: "Rp.289.000",
  },
];

const CheckoutCards = ({ image, name, details, price }: CheckoutCards) => {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={image}
        alt=""
      />

      <div className="flex w-full flex-col px-4 py-4">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-800">{name}</span>
          <button
            type="button"
            className="flex rounded text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
                className=""
              ></path>
            </svg>
          </button>
        </div>
        <span className="float-right text-gray-400">{details}</span>
        <div className="flex justify-between">
          <p className="mt-auto text-lg font-bold text-gray-800">{price}</p>
          <CounterInput />
        </div>
      </div>
    </div>
  );
};

export default CheckoutCards;
