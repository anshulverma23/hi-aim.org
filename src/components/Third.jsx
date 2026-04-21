import React from "react";

const Third = () => {
  return (
    <>
      <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#27272a] via-[#52525b] to-[#a1a1aa]">
        <div className="w-1/2 min-h-screen p-8">
          <h1 className="text-5xl font-bold text-yellow-500 pt-28">
            The 2-day event comprises a Conference-cum-Exposition
          </h1>
          <p className="text-gray-300 pt-16 text-xl">
            Hi-Aim provides an enriching opportunity for the convergence of
            Hoteliers, Hotel Brands and Hospitality related decision makers -
            Architects / Interior Designers on a common Knowledge Sharing
            platform to confer and exchange ideas on key issues and emerging
            trends in the hospitality industry.
          </p>
        </div>
        <div className="flex-col bg-gray-950 w-1/2 min-h-0.5">
          <div className="flex w-full h-1/2 bg"> 
            <div className="w-2/6 m-10 bg-gray-900"></div>
            <div className="w-2/6 m-10 bg-gray-800"></div>
          </div>
          <div className="flex w-full h-1/2 bg"> 
            <div className="w-2/6 m-10 bg-gray-900"></div>
            <div className="w-2/6 m-10 bg-gray-800"></div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Third;
