import React from "react";

type Pricing = {
  subtotal: string;
  shipping: string;
  total: string;
};

const Pricing = ({ subtotal, shipping, total }: Pricing) => {
  return (
    <div>
      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">{subtotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">{shipping}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">{total}</p>
      </div>
    </div>
  );
};

export default Pricing;
