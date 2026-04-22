import React, { useEffect, useMemo, useState } from "react";

const Seventh = () => {
  const feedbacks = useMemo(
    () => [
      {
        name: "Charu Singh",
        role: "President - Tourism Finance Corporation Of India Ltd.",
        avatar: "/fpf1.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        name: "Vandana Dhawan Saxena",
        role: "Design Principal - Studio IV",
        avatar: "/fpf2.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        name: "Reema Diwan",
        role: "Director - Design & Technical Services (India & South Asia) - Accor Hotels",
        avatar: "/pf3.webp",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        name: "Arun Mehta",
        role: "Founder - Hospitality Design Forum",
        avatar: "/pf1.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        name: "Nisha Kapoor",
        role: "VP Operations - Premium Stays Group",
        avatar: "/pf2.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        name: "Sanjay Verma",
        role: "Consultant - Hotel Development & Planning",
        avatar: "/pf4.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
    []
  );

  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const perPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(feedbacks.length / perPage);
  const pagedItems = useMemo(() => {
    const pages = [];
    for (let i = 0; i < feedbacks.length; i += perPage) {
      pages.push(feedbacks.slice(i, i + perPage));
    }
    return pages;
  }, [feedbacks, perPage]);

  useEffect(() => {
    if (totalPages <= 1) return undefined;

    const timer = window.setInterval(() => {
      setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="py-20">
      <div className="section-shell">
        <h2 className="text-center text-4xl text-white md:text-5xl">Video Feedback</h2>

        <div className="mt-10 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${page * 100}%)` }}>
            {pagedItems.map((items, pageIndex) => (
              <div key={`feedback-slide-${pageIndex + 1}`} className="w-full shrink-0">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                  {items.map((item) => (
                    <article key={item.name} className="premium-card rounded-2xl p-4">
                      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 pt-[56.25%]">
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={item.videoUrl}
                          title={`${item.name} feedback`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full border border-[#d6b675] object-cover" />
                        <div>
                          <h3 className="text-base text-[#f0d9a5]">{item.name}</h3>
                          <p className="text-xs text-slate-400">{item.role}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const isActive = idx === page;
            return (
              <button
                key={`feedback-page-${idx + 1}`}
                type="button"
                aria-label={`Go to feedback page ${idx + 1}`}
                onClick={() => setPage(idx)}
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

export default Seventh;
