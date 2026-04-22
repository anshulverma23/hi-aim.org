import React from "react";

const Sixth = () => {
  const videos = [
    {
      title: "Hi AiM 2023 Awards & Accolades",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Hi AiM 2022 Awards & Accolades",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section className="py-20">
      <div className="section-shell">
        <h2 className="text-center text-4xl text-white md:text-5xl">HI-AIM Highlights</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <div key={video.title} className="premium-card overflow-hidden rounded-2xl p-4">
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-sm text-slate-300">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sixth;
