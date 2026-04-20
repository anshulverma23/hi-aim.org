import React, { useMemo, useState } from 'react'

const Fifth = () => {
  const videos = useMemo(
    () => [
      { title: 'Hi AIM 2024 Panel Discussion', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { title: 'Hi AIM Conference + Exposition', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { title: 'Panel Discussion - Tradition', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    []
  )

  const [active, setActive] = useState(0)

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-10 md:py-14">
        <h2 className="text-center text-[22px] md:text-[26px] font-semibold tracking-[0.22em] text-[#111111]">
          HI AIM 2024 PANEL DISCUSSION
        </h2>

        <div className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {videos.map((v, idx) => (
              <div key={v.title} className={idx === active ? 'block' : 'hidden md:block'}>
                <div className="w-full border border-[#2b2b2b] bg-black shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                  <div className="relative w-full pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={v.embedUrl}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            {videos.map((v, idx) => {
              const isActive = idx === active
              return (
                <button
                  key={v.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-label={`Go to video ${idx + 1}`}
                  className={[
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    isActive ? 'bg-[#0b2a75]' : 'bg-[#cfd3d6]',
                  ].join(' ')}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fifth
