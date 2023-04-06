import React, { useState } from 'react';

const CounterInput = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const inputStyle = {
    WebkitAppearance: 'none',
    MozAppearance: 'textfield',
    appearance: 'textfield',
  };

  return (
    <div className="custom-number-input h-8 w-24 appearance-none">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button onClick={handleDecrement} className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input type="number" className="appearance-none focus:outline-none text-center w-full  bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={count}></input>
        <button onClick={handleIncrement} className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default CounterInput;
