"use client";

import React, { useState } from "react";

const Time = ({ filters, setFilters }) => {

  console.log(filters?.time)


  const handleTimeChange = (event) => {
    const [hours, minutes] = event.target.value.split(":").map(Number);
    setFilters ( {...filters, time:hours * 60 + minutes});
  };

  return (
    <div className="p-1  w-full">
      <div className="grid grid-cols-6 gap-2">
        <div className="relative w-full flex items-center col-span-4">
          <div className="w-4 h-4 border border-gray-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <input
            type="range"
            min="0"
            max="1439"
            step="15"
            value={filters?.time}
            onChange={(e) => setFilters({...filters, time:Number(e.target.value)})}
            className="w-full appearance-none bg-transparent absolute left-0"
            style={{
              background: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
            }}
          />
          <div className="w-4 h-4 border border-gray-500 rounded-full"></div>
        </div>
        <div className="col-span-2">
          <input
            type="time"
            className="w-full mt-2 p-1 border rounded text-center text-black"
            value={`${String(Math.floor(filters?.time / 60)).padStart(2, "0")}:${String(
              filters?.time % 60
            ).padStart(2, "0")}`}
            onChange={handleTimeChange}
          />
        </div>
      </div>
    
    </div>
  );
};

export default Time;
