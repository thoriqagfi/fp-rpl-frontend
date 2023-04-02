import React from "react";

const Newsletter = () => {
  return (
    <div className="flex xl:bg-white ">
      <div className="border-white/20 relative mx-auto my-5 w-full max-w-sm xl:max-w-4xl rounded-lg border bg-gradient-to-b from-cyan-400 to-indigo-600 shadow-lg">
        <div className="p-8 md:p-12 lg:px-16">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Subscribe to stay ahead
            </h2>

            <p className="hidden text-white sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              temporibus dicta mollitia!
            </p>
          </div>

          <div className="mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label className="sr-only">Email</label>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-indigo-200 bg-white p-3 text-indigo-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center rounded-md bg-blue-400 px-5 py-3 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200"
              >
                <span className="text-sm font-medium"> Sign Up </span>
                <svg
                  className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
