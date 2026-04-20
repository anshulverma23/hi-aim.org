import React, { useEffect, useMemo, useState } from 'react'

const Seventh = () => {
  const feedbacks = useMemo(
    () => [
      {
        name: 'Charu Singh',
        role: 'President - Tourism Finance Corporation Of India Ltd.',
        avatar: '/fpf1.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Vandana Dhawan Saxena',
        role: 'Design Principal - Studio IV',
        avatar: '/fpf2.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Reema Diwan',
        role: 'Director - Design & Technical Services (India & South Asia) - Accor Hotels',
        avatar: '/pf3.webp',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Arun Mehta',
        role: 'Founder - Hospitality Design Forum',
        avatar: '/pf1.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Nisha Kapoor',
        role: 'VP Operations - Premium Stays Group',
        avatar: '/pf2.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Sanjay Verma',
        role: 'Consultant - Hotel Development & Planning',
        avatar: '/pf4.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Priya Nair',
        role: 'Regional Director - Guest Experience',
        avatar: '/pf5.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Rahul Bose',
        role: 'Head - Corporate Partnerships',
        avatar: '/pf6.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Meera Thomas',
        role: 'Architect - Hospitality & Leisure Projects',
        avatar: '/pf7.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
    []
  )

  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const perPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(feedbacks.length / perPage)
  const pagedItems = useMemo(() => {
    const pages = []
    for (let i = 0; i < feedbacks.length; i += perPage) {
      pages.push(feedbacks.slice(i, i + perPage))
    }
    return pages
  }, [feedbacks, perPage])

  const goToPrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const goToNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(Math.max(totalPages - 1, 0))
    }
  }, [page, totalPages])

  useEffect(() => {
    if (totalPages <= 1) return undefined

    const timer = window.setInterval(() => {
      setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
    }, 3500)

    return () => window.clearInterval(timer)
  }, [totalPages])

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-4">
        <h2 className="text-center text-[38px] font-semibold uppercase tracking-[0.08em] text-[#131722]">
          Feedbacks
        </h2>

        <div className="mt-10 flex items-start justify-center gap-3 md:gap-5">
          <button
            type="button"
            aria-label="Previous feedback slide"
            onClick={goToPrev}
            className="mt-20 md:mt-24 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c7ccd3] bg-white text-[#253a65] transition hover:bg-[#eef2f8]"
          >
            &#8249;
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pagedItems.map((items, pageIndex) => (
                <div key={`feedback-slide-${pageIndex + 1}`} className="w-full shrink-0">
                  <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                    {items.map((item) => (
                      <article key={item.name} className="relative">
                        <div className="border border-[#c9c9c9] bg-[#f6f6f6] px-3 pb-5 pt-3">
                          <div className="border-[3px] border-[#1d1d1d] bg-black">
                            <div className="relative w-full pt-[56.25%]">
                              <iframe
                                className="absolute inset-0 h-full w-full"
                                src={item.videoUrl}
                                title={`${item.name} feedback`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>

                        <div className="relative ml-4 mt-4 h-6 w-6 bg-[#464646] [clip-path:polygon(0_0,100%_0,0_100%)]" />

                        <div className="px-2">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-20 w-20 rounded-full border-2 border-[#d9be5c] object-cover"
                          />
                          <h3 className="mt-3 text-[28px] font-semibold leading-tight text-[#d2b44e]">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-[21px] leading-snug text-[#111111]">{item.role}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next feedback slide"
            onClick={goToNext}
            className="mt-20 md:mt-24 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c7ccd3] bg-white text-[#253a65] transition hover:bg-[#eef2f8]"
          >
            &#8250;
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const isActive = idx === page
            return (
              <button
                key={`feedback-page-${idx + 1}`}
                type="button"
                aria-label={`Go to feedback page ${idx + 1}`}
                onClick={() => setPage(idx)}
                className={[
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  isActive ? 'bg-[#0d3d97]' : 'bg-[#c7ccd3]',
                ].join(' ')}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Seventh
