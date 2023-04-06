import * as React from "react";
import Image from "next/image";
import Layout from "@/Layout/Layout";
import Counter from "@/components/cart/counter";
import CounterInput from "@/components/cart/counter";
import CartCards, { cartItems } from "@/components/cart/CartCards";

export default function CartPage() {
  return (
    <>
      <Layout>
        <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
              <div>
                <ul className="relative flex  items-center justify-between space-x-2 sm:space-x-4">
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">1</a>
                    <span className="font-semibold text-gray-900">Cart</span>
                  </li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white" href="#" >2</a>
                    <span className="font-semibold text-gray-900">Shipping & Payment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto mt-2 max-w-full md:mt-2">
              <div className="bg-white shadow">
                <div>
                  <div className="px-4 py-6 sm:px-8 sm:py-10">
                    <div className="flow-root ">
                      <ul className="-my-8 ">
                      {cartItems.map(item => (
                        <CartCards
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            details={item.details}
                            price={item.price}
                        />
                        ))} 
                      </ul>
                    </div>
                    <div className="mt-12 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">Subtotal</p>
                        <p className="text-lg font-semibold text-gray-900">$399.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 px-9 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Total</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        <span className="text-xs font-normal text-gray-400">USD</span>{" "}408.00
                      </p>
                    </div>
                    <div className="mt-6 text-center">
                      <a href="checkout" className="group inline-flex w-1/2 items-center justify-center rounded-md bg-gray-900 px-6 py-2.5 mb-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">Checkout
                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path  stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
