import React from "react";

type Input = {
  label: string;
  placeholder: string;
  path: string;
};

const InputData = ({ label, placeholder, path }: Input) => {
  return (
    <div>
      <label className="mt-4 mb-2 block text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id="{label}"
          name="{label}"
          className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          placeholder={placeholder}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d={path} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputData;
