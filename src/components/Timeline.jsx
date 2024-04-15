import React from "react";

const Timeline = () => {
  return (
    <div className=" mt-20 w-full max-w-4xl">
      <ul className="relative flex">
        <li className="mb-8 ">
          <div className="mb-4 flex items-center">
            <div className="h-20 w-36 rounded-r-full bg-red-500"></div>
            <div className="-ml-12 -mt-12 h-14 w-36  -rotate-45 rounded-full bg-blue-500"></div>
            {/* depart */}
          </div>
        </li>
        <li className="-ml-32 mb-8">
          <div className="mb-4 flex items-center">
            <div className="h-20 w-36 rounded-full bg-red-500"></div>
            <div className="-ml-12 -mt-12 h-14 w-36  -rotate-45 rounded-full bg-blue-500"></div>
            {/* haut */}
          </div>
        </li>
        <li className="-ml-32 mb-8">
          <div className="mb-4 flex items-center">
            <div className="h-20 w-36 rounded-full bg-red-500"></div>
            <div className="-mb-12 -ml-12 h-14 w-36  rotate-45 rounded-full bg-blue-500"></div>
            {/* bas */}
          </div>
        </li>
        <li className="-ml-32 mb-8">
          <div className="mb-4 flex items-center">
            <div className="h-20 w-36 rounded-full bg-red-500"></div>
            <div className="-ml-12 -mt-12 h-14 w-36  -rotate-45 rounded-full bg-blue-500"></div>
          </div>
        </li>
        <li className="-ml-32 mb-8">
          <div className="mb-4 flex items-center">
            <div className="h-20 w-36 rounded-full bg-red-500"></div>
            <div className="-ml-12 -mt-12 h-14 w-36  -rotate-45 rounded-full bg-blue-500"></div>
          </div>
        </li>

        <li className="-ml-32 mb-8">
          <div className="mb-4 flex items-center">
            <div className="h-20 w-36 rounded-full bg-red-500"></div>
            <div className="-ml-12 -mt-12 h-14 w-36  -rotate-45 rounded-full bg-red-500"></div>
            <div className="-ml-36 -mt-12 h-14 w-36  rotate-45 rounded-full bg-red-500"></div>
            {/* fleche */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
