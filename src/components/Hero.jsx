import React, { useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const boxes = [
    { title: 'Innovation', description: 'Cutting-edge technology solutions' },
    { title: 'Quality', description: 'Premium service delivery' },
    { title: 'Support', description: '24/7 Customer assistance' },
    { title: 'Growth', description: 'Scalable business solutions' },
    { title: 'Security', description: 'Enterprise-level protection' },
    { title: 'Speed', description: 'Lightning-fast performance' }
  ]

  const boxesPerView = 3
  const maxIndex = Math.max(0, boxes.length - boxesPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 > maxIndex ? maxIndex : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1))
  }

  const visibleBoxes = boxes.slice(currentIndex, currentIndex + boxesPerView)

  return (
    <div className='relative w-full h-[650px] '>
        <img className='w-full h-[650px] object-cover blur-sm' src="/conference.avif" alt="Mountain landscape" />
        <div className='absolute top-0 w-full h-[650px] bg-black opacity-50 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-8 text-white text-center mb-8'>
                <h1 className='text-5xl font-bold'>Welcome to HI-AIM</h1>
                <p className='text-lg'>Your next adventure awaits</p>
            </div>
            
            <div className='flex items-center justify-center gap-6 w-full px-4'>
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className='bg-white bg-opacity-20 hover:bg-opacity-40 disabled:opacity-50 text-white p-3 rounded-full transition-all duration-300'
              >
                ❮
              </button>

              <div className='flex gap-4 justify-center'>
                {visibleBoxes.map((box, index) => (
                  <div
                    key={currentIndex + index}
                    className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 w-64 h-56 hover:bg-opacity-20 transition-all duration-300 flex flex-col justify-center'
                  >
                    <h3 className='text-xl font-semibold mb-2 text-white'>{box.title}</h3>
                    <p className='text-sm text-gray-200'>{box.description}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className='bg-white bg-opacity-20 hover:bg-opacity-40 disabled:opacity-50 text-white p-3 rounded-full transition-all duration-300'
              >
                ❯
              </button>
            </div>

            <div className='flex gap-2 mt-6'>
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Hero