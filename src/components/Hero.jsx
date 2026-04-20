import React, { useEffect, useMemo, useState } from 'react'

function Hero() {
  const [scrolled, setScrolled] = useState(false)

  return (

    <>
    
  <section className='h-screen w-full'>

<video
        className='absolute inset-0 w-full h-full object-cover ' autoPlay muted loop
        src='/cover-video.mp4'
        alt='Conference background'
        
      />


      
      </section>

      
        <div className='w-2/6 h-36 absolute  top-1/2 left-8 transform -translate-y-1/2 flex items-center justify-center'>
        <h1 className='text-yellow-500 relative text-5xl font-bold'>A Premier Platform for Hospitality Leaders, Architects & Innovators to Shape the Future of Design.</h1>
      </div>
      

      </>


    

      
  )
}



export default Hero
