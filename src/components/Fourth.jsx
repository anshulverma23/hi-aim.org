import React from 'react'

const Fourth = () => {
  return (
    <div className="w-full py-16 px-4 flex flex-col items-center justify-center bg-white">
      
      {/* Target Title Block */}
      <div className="relative w-full max-w-[1100px] mb-12 flex justify-center">
        {/* Shadow Div Behind */}
        <div className="absolute inset-0 bg-gray-500 blur-sm translate-y-3 translate-x-3 w-[98%] mx-auto"></div>
        {/* Orange Banner */}
        <div className="relative w-full bg-[#ff9900] py-4 text-center">
          <h2 className="text-[#2c3440] text-[38px] md:text-[44px] font-bold tracking-tight">
            Who should attend?
          </h2>
        </div>
      </div>

      {/* Roles Text block */}
      <div className="max-w-[1100px] text-center space-y-2 mb-16 text-[15px] md:text-base text-gray-500 px-4">
        <p>
          <span className="font-bold text-gray-500 pb-1">Hotel</span> - Owners,Developers,Architects,Interior Designers,Hotel Brand's Tech Services Professionals
        </p>
        <p>
          <span className="font-bold text-gray-500 pb-1">Consultants</span> - MEP Feasibility, Structural Engineering, Facility Planning, Project Management, Landscape, Lighting &amp; Acoustics, Life Safety, Security Systems
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white border-2 border-gray-100 p-4 flex flex-col">
           <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800" 
              alt="Delegates" 
              className="w-full h-[220px] object-cover"
           />
           <div className="pt-8 pb-4 px-2 flex flex-col flex-grow items-center text-center">
             <h3 className="text-[17px] text-gray-700 mb-5 uppercase tracking-wide">Delegates</h3>
             <p className="text-[#888888] text-[13px] leading-relaxed mb-8">
               We expect to host a wide gamut of Hospitality industry tycoons, entrepreneurs and professionals.
             </p>
             <div className="mt-auto">
                <button className="bg-[#1e3a8a] text-white px-8 py-2.5 rounded-full font-medium text-[13px] hover:bg-blue-800 transition">
                  SHOW MORE
                </button>
             </div>
           </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-2 border-gray-100 p-4 flex flex-col">
           <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" 
              alt="Exposition" 
              className="w-full h-[220px] object-cover"
           />
           <div className="pt-8 pb-4 px-2 flex flex-col flex-grow items-center text-center">
             <h3 className="text-[17px] text-gray-700 mb-5 uppercase tracking-wide">Exposition</h3>
             <p className="text-[#888888] text-[13px] leading-relaxed mb-8">
               Exhibiting companies will cover a wide range of products and services:
             </p>
             <div className="mt-auto">
                <button className="bg-[#1e3a8a] text-white px-8 py-2.5 rounded-full font-medium text-[13px] hover:bg-blue-800 transition">
                  SHOW MORE
                </button>
             </div>
           </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-gray-100 p-4 flex flex-col">
           <img 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" 
              alt="Hi AiM 2027" 
              className="w-full h-[220px] object-cover"
           />
           <div className="pt-8 pb-4 px-2 flex flex-col flex-grow items-center text-center">
             <h3 className="text-[17px] text-gray-700 mb-5">Hi AiM 2027</h3>
             <p className="text-[#888888] text-[13px] leading-relaxed mb-8">
               Sponsors &amp; Venue
             </p>
             <div className="mt-auto">
                <button className="bg-[#1e3a8a] text-white px-8 py-2.5 rounded-full font-medium text-[13px] hover:bg-blue-800 transition">
                  SHOW MORE
                </button>
             </div>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Fourth
