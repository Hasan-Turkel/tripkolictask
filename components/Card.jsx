import React from "react";
import { HeartIcon } from '@heroicons/react/24/outline'

const Card = ({sale}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src="/beach.jpg" // Turun gerçek görseli buraya gelecek
          alt="Tour"
        />
        <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs font-bold py-1 px-2 rounded">
          30% OFF
        </div>
        <div className="absolute bottom-2 left-2 bg-primary-500 text-white text-xs font-bold py-1 px-2 rounded">
         {sale?.type}
        </div>
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow  ">
        <HeartIcon aria-hidden="true" className="size-6" />
        </button>
      </div>
      <div className="px-2 py-3">
        <div className="flex items-center text-primary-500 text-sm font-semibold">
          ★ 4.3 (20)
          <span className="text-gray-500 text-xs ml-2">{sale?.location}</span>
        </div>
        <p className="font-semibold text-gray-800 mt-1">
          Name...
        </p>
        <div className="mt-2 flex items-center">
          <span className="line-through text-gray-400 text-sm mr-2">THB {Number(sale?.price)+1500}</span>
          <span className="text-primary-500 font-bold text-lg">THB {sale?.price}</span>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <a href="#" className="text-sm text-primary-400">Details →</a>
          <button className="bg-primary-600 text-white px-4 py-2 text-sm rounded-lg shadow">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
