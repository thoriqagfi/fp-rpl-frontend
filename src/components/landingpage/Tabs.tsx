import React, { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import type { RadioChangeEvent } from "antd";
import ContentTab1 from "@/components/landingpage/ContentTab1";
import Newsletter from "@/components/landingpage/Newsletter";
import Partner from "@/components/landingpage/Partner";

type TabPosition = "left" | "right" | "top" | "bottom";

const Tabs = () => {
  const [mode, setMode] = useState<TabPosition>("top");

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white mx-12 flex px-6 py-10 md:px-12 text-gray-800 text-center lg:text-left rounded-3xl mt-20">
      <div className="flex flex-col w-1/5 border-r">
        <button
          className={`py-4 px-0 flex justify-center ${
            activeTab === 0
              ? " text-gray 800 rounded-l-lg"
              : "bg-gray-300 bg-opacity-30 rounded-l-lg text-gray-700"
          }`}
          onClick={() => setActiveTab(0)}
        >
          <span className="text-2xl -ml-2 mr-2 hover:text-yellow-800">
            <GiShoppingBag />
          </span>
          Our Shop
        </button>
        <button
          className={`p-4 flex justify-center ${
            activeTab === 1
              ? " text-gray 800 rounded-l-lg"
              : "bg-gray-300 rounded-l-lg bg-opacity-30 text-gray-700"
          }`}
          onClick={() => setActiveTab(1)}
        >
          <span className="text-2xl -ml-2 mr-2 hover:text-yellow-800">
            <FaHandHoldingHeart />
          </span>
          Our Partners
        </button>
        <button
          className={`p-4 flex justify-center ${
            activeTab === 2
              ? " text-gray 800 rounded-l-lg"
              : "bg-gray-300 rounded-l-lg bg-opacity-30 text-gray-700"
          }`}
          onClick={() => setActiveTab(2)}
        >
          <span className="text-2xl -ml-2 mr-2 hover:text-yellow-800">
            <MdOutlineMarkEmailUnread />
          </span>
          Newsletter
        </button>
      </div>

      <div className="flex-1 p-4">
        {activeTab === 0 && <ContentTab1 />}

        {activeTab === 1 && <Partner />}

        {activeTab === 2 && <Newsletter />}
      </div>
    </div>
  );
};

export default Tabs;
