import React, { useEffect, useMemo, useState } from 'react'

const testimonials = [
  {
    name: 'Mr. Dorje Gyaltsen Lama',
    title: 'Managing Director - Dusit Princess Kathmandu',
    quote: 'Hi AiM 11th edition was fantastic, and the discussions were really amazing.',
    image: '/pf1.jpg'
  },
  {
    name: 'Mr. Sunil Khemani',
    title: 'Founder And Principal Consultant - Aufait International Engineering Studio',
    quote: 'It was extremely good. In fact, I’m glad that I made the decision to come.',
    image: '/pf2.jpg'
  },
  {
    name: 'Mr. Amit Gupta',
    title: 'Founding Partner - Studio Symbiosis',
    quote: 'I have to say this experience is a little bit better than the earlier ones.',
    image: '/pf3.webp'
  },
  {
    name: 'Mr. K. B. Kachru',
    title: 'Chairman Emeritus & Principal Advisor (South Asia) - Radisson Hotel Group',
    quote: 'I think there is something special about Hi AiM, it’s not the biggest. ',
    image: '/pf4.jpg'
  },
  {
    name: 'Mr. Ajay Bakaya',
    title: 'Managing Director - Sarovar Hotels',
    quote: 'I have been attending this conference every year and look forward to it. ',
    image: '/pf5.jpg'
  },
  {
    name: 'Mr. Kiran Andicot',
    title: 'Regional Vice President, Hotel Development - Marriott International',
    quote: 'TFCI has been participating in Hi AiM since its inception and we are very proud to be associated with Hi AiM.',
    image: '/fpf1.jpg'
  },
  {
    name: 'Ms. Charu Singh',
    title: 'President - Tourism Finance Corporation Of India Ltd.',
    quote: 'Hi AiM 11th edition was fantastic, and the discussions were really amazing. The kind of knowledge we gained',
    image: '/fpf2.jpg'
  },
  {
    name: 'Mr. Nikhil Sharma',
    title: 'Regional Director Eurasia - Wyndham Hotels & Resorts',
    quote: 'Hi AiM 11th edition was fantastic, and the discussions were really amazing. ',
    image: '/pf6.jpg'
  },
  {
    name: 'Mr. Aniruddh Kumar',
    title: 'Vice President – Development, Accor Hotels',
    quote: 'I’ve been attending Hi AiM since its inception. It has been 11 wonderful years.',
    image: '/pf7.jpg'
  }
]

const Hero = () => {
  const [activePage, setActivePage] = useState(0)

  const pages = useMemo(() => {
    const pageList = []
    for (let i = 0; i < testimonials.length; i += 3) {
      pageList.push(testimonials.slice(i, i + 3))
    }
    return pageList
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [pages.length])

  const prevPage = () => {
    setActivePage((current) => (current - 1 + pages.length) % pages.length)
  }

  const nextPage = () => {
    setActivePage((current) => (current + 1) % pages.length)
  }

  return (
    <>
      <img
        className='absolute inset-0 w-full h-full object-cover '
        src='/conference.avif'
        alt='Conference background'
        
      />
    <section className='relative w-full h-[37rem] overflow-hidden'>
    
      <div className='absolute inset-0'></div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 '>

        <div className='overflow-hidden rounded-3xl   '>
          <div
            className='flex transition-transform duration-700 ease-in-out'
            style={{ width: `${pages.length * 100}%`, transform: `translateX(-${activePage * (100 / pages.length)}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className='flex-shrink-0 w-full flex justify-center gap-6 px-4 py-10' style={{ width: `${100 / pages.length}%` }}>
                {page.map((item, itemIndex) => (
                  <article
                    key={itemIndex}
                    className='relative w-full max-w-sm h-96 rounded-md border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl flex flex-col justify-between'
                  >
                    <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-10 w-20 rotate-45 bg-black/40'></div>
                    <div className='relative z-10 space-y-6'>
                      <div className='space-y-4'>
                        <p className='text-white text-base leading-relaxed'>
                          {item.quote}
                        </p>
                        <button className='text-yellow-400 font-semibold hover:text-yellow-300'>More</button>
                      </div>

                      <div className='flex flex-col items-center gap-4'>
                        <div className='relative rounded-full border-4 border-yellow-400 p-1'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='h-24 w-24 rounded-full object-cover'
                          />
                        </div>
                        <div className='text-center'>
                          <h3 className='text-xl font-bold text-yellow-300'>{item.name}</h3>
                          <p className='text-sm text-white/80'>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='mt-10 flex items-center justify-center gap-4'>
          <button
            onClick={prevPage}
            className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20'
          >
            ‹
          </button>

          <div className='flex gap-2'>
            {pages.map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => setActivePage(pageIndex)}
                className={`h-2 rounded-full transition-all ${
                  activePage === pageIndex ? 'w-10 bg-yellow-400' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20'
          >
            ›
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
