import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[650px] '>
        <img className='w-full h-[650px] object-cover blur-sm' src="/conference.avif" alt="Mountain landscape" />
        <div className='absolute top-0 w-full h-[650px] bg-black opacity-50 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-4 text-white text-center'>
                <h1 className='text-5xl font-bold'>Welcome to HI-AIM</h1>
                <p className='text-lg'>Your next adventure awaits</p>
            </div>
        </div>
    </div>
  )
}

export default Hero