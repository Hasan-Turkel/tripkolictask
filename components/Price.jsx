"use client";

import React, { useState } from "react";

const Price = ({ filters, setFilters }) => {


  const handlePriceChange = (event) => {
    setFilters({...filters, price:event.target.value});
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
            max="20000"
            step="100"
            value={filters?.price}
            onChange={handlePriceChange}
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
          className="mt-2 p-1 w-full border rounded-lg text-center text-black"
          value={filters?.price}
          onChange={handlePriceChange}
        />
        </div>
      </div>

     
    </div>
  );
};

export default Price;
