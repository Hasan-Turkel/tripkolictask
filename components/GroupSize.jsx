"use client";

import React, { useState } from "react";

const GroupSize = ({ filters, setFilters }) => {
  

  const handleSizeChange = (event) => {
    setFilters({...filters, size:Number(event.target.value) } );
  };
  return (
    <div className="p-1 w-full">
      <div className="mb-6  w-full grid grid-cols-6 gap-2 ">
        <div className="relative w-full flex items-center col-span-4">
          <div className="w-4 h-4 border border-gray-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={filters?.size}
            onChange={handleSizeChange}
            className="w-full appearance-none bg-transparent absolute left-0 "
            style={{
              background: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
            }}
          />
          <div className="w-4 h-4 border-gray-500 border rounded-full"></div>
        </div>

        <div className="col-span-2">

        <input
          type="number"
          className="mt-2 p-1 w-full border rounded-lg text-center "
          value={filters?.size}
          onChange={handleSizeChange}
        />
        </div>
      </div>

      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 25px;
            height: 25px;
            background: #F2A945;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
          }
          input[type="range"]::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: #F2A945;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
          }
        `}
      </style>
    </div>
  );
};

export default GroupSize;
