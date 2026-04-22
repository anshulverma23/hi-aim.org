import React, { useMemo, useState } from "react";

const Fifth = () => {
  const videos = useMemo(
    () => [
      { title: "Hi AIM 2024 Panel Discussion", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Hi AIM Conference + Exposition", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Panel Discussion - Tradition", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section className="py-20">
      <div className="section-shell rounded-3xl border border-white/10 bg-[#090f1d]/80 px-6 py-12 md:px-10">
        <h2 className="text-center text-3xl text-white md:text-4xl">Featured Conversations</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          Highlights from thought-provoking sessions featuring renowned voices across hospitality, architecture, and design.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((v, idx) => (
            <div key={v.title} className={idx === active ? "block" : "hidden md:block"}>
              <div className="overflow-hidden rounded-2xl border border-[#d6b675]/30 bg-black">
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
              <p className="mt-3 text-sm text-slate-300">{v.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
          {videos.map((v, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={v.title}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Go to video ${idx + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  isActive ? "w-8 bg-[#d6b675]" : "w-2.5 bg-white/40",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fifth;
