import React from 'react'


const Second = () => {
  return (
    <>
    <section className='w-full h-24 bg-white'>
    </section>
      {/* Showcase Banner Section */}
      <section className='relative w-full h-96 overflow-hidden'>
        
        <img
          className='absolute inset-0 w-full h-full object-cover'
          src='/corporate.webp'
          alt='Conference attendees'
        />
        <div className='absolute inset-0 bg-black/50'></div>

        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-12 max-w-3xl'>
            Opportunity to showcase your product and services to attendees
          </h2>

          <div className='flex gap-6 flex-wrap justify-center'>
            <button className='px-10 py-3 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition'>
              REGISTER NOW
            </button>
            <button className='px-10 py-3 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-100 transition'>
              KNOW MORE
            </button>
          </div>
        </div>
      </section>

      {/* Conference Details Section */}
      <section className='w-full bg-white py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Info */}
            <div>
              <h3 className='text-5xl font-bold text-gray-900 mb-8'>
                Hi AiM<br />Conference
              </h3>

              <div className='space-y-6 mb-8'>
                <div>
                  <p className='text-lg font-semibold text-gray-900'>Date : <span className='font-normal'>Coming soon..</span></p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-900'>Venue : <span className='font-normal'>Coming soon..</span></p>
                </div>
              </div>

              <button className='px-8 py-3 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition'>
                REGISTER NOW
              </button>
            </div>

            {/* Right Column - Empty or Future Content */}
            <div className='flex items-center justify-center'>
              <div className='w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center'>
                <p className='text-gray-500 text-center'>Additional Content Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Second