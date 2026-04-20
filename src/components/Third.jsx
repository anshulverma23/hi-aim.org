import React from 'react'

const Third = () => {
  return (
    <>
    
    <div 
      className="relative w-full py-24 px-4 flex items-center justify-center min-h-[500px]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center w-full">
         
         {/* Top Grid - 4 Columns */}
         <div className="grid grid-cols-1 md:grid-cols-4 w-full mb-20 gap-y-10">
            
            {/* Item 1: Location */}
            <div className="flex flex-col items-center text-center px-4 md:border-r border-white/20">
               {/* Location Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
               </svg>
               <h3 className="text-white font-bold text-[13px] tracking-widest uppercase mb-3">Location</h3>
               <p className="text-gray-300 text-[15px]">Coming soon...</p>
            </div>

            {/* Item 2: Date */}
            <div className="flex flex-col items-center text-center px-4 md:border-r border-white/20">
               {/* Calendar Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                 <rect x="7" y="11" width="2" height="2" fill="currentColor" />
                 <rect x="11" y="11" width="2" height="2" fill="currentColor" />
                 <rect x="15" y="11" width="2" height="2" fill="currentColor" />
                 <rect x="7" y="15" width="2" height="2" fill="currentColor" />
                 <rect x="11" y="15" width="2" height="2" fill="currentColor" />
                 <rect x="15" y="15" width="2" height="2" fill="currentColor" />
               </svg>
               <h3 className="text-white font-bold text-[13px] tracking-widest uppercase mb-3">Date</h3>
               <p className="text-gray-300 text-[15px]">Coming soon...</p>
            </div>

            {/* Item 3: Speakers */}
            <div className="flex flex-col items-center text-center px-4 md:border-r border-white/20">
               {/* Microphone Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
               </svg>
               <h3 className="text-white font-bold text-[13px] tracking-widest uppercase mb-3">Speakers</h3>
               <p className="text-gray-300 text-[15px]">Hospitality industry tycoons,<br/>entrepreneurs and professionals</p>
            </div>

            {/* Item 4: Registration */}
            <div className="flex flex-col items-center text-center px-4">
               {/* Wallet/Badge Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                 <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M7 14h1.01" />
               </svg>
               <h3 className="text-white font-bold text-[13px] tracking-widest uppercase mb-3">Registration</h3>
               <p className="text-gray-300 text-[15px]">150 People</p>
            </div>

         </div>

         {/* Bottom Text Area */}
         <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-[28px] md:text-[34px] text-white font-normal tracking-wide">
               The 2-day event comprises a Conference-cum-Exposition
            </h2>
            <p className="text-gray-300 leading-relaxed text-[15px] md:text-base px-4">
               Hi-Aim provides an enriching opportunity for the convergence of Hoteliers, Hotel Brands and Hospitality related decision makers - Architects / Interior Designers on a common Knowledge Sharing platform to confer and exchange ideas on key issues and emerging trends in the hospitality industry.
            </p>
         </div>

      </div>
    </div>
    </>
  )
}

export default Third
