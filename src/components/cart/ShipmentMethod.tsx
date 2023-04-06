import React from "react";

type ShipingMethod = {
  image: string;
  name: string;
  delivery: string;
};

const ShipingMethod = ({ image, name, delivery }: ShipingMethod) => {
  return (
    <div>
      <div className="relative">
        <input
          className="peer hidden"
          id="radio_1"
          type="radio"
          name="radio"
          checked
        />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4">
          <img className="w-14 object-contain" src={image} alt="" />
          <div className="ml-5">
            <span className="mt-2 text-gray-900 font-semibold">{name}</span>
            <p className="text-slate-500 text-sm leading-6">
              Delivery: {delivery} Days
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ShipingMethod;
