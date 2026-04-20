import React from 'react'

const Sixth = () => {
  const videos = [
    {
      title: 'Hi AiM 2023 Awards & Accolades',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Hi AiM 2022 Awards & Accolades',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ]

  return (
    <section className="w-full bg-white py-32">
      <div className="mx-auto w-full max-w-[1180px] px-4">
        <div className="mx-auto mb-6 w-full max-w-[980px] bg-[#f9a400] py-3 shadow-[6px_8px_6px_rgba(0,0,0,0.3)]">
          <h2 className="text-center text-[36px] leading-none font-semibold uppercase tracking-[0.04em] text-[#1e2430]">
            HI-AIM HIGHLIGHTS
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[980px] grid-cols-1 gap-3 md:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.title}
              className="border-[3px] border-black bg-black"
            >
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sixth
