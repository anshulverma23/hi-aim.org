import React, { useEffect, useMemo, useState } from "react";

const articles = [
  {
    name: "Mr. Dorje Gyaltsen Lama",
    title: "Managing Director - Dusit Princess Kathmandu",
    quote: "Hi AiM 11th edition was fantastic, and the discussions were really amazing.",
    image: "/pf1.jpg",
  },
  {
    name: "Mr. Sunil Khemani",
    title: "Founder And Principal Consultant - Aufait International Engineering Studio",
    quote: "It was extremely good. In fact, I am glad that I made the decision to come.",
    image: "/pf2.jpg",
  },
  {
    name: "Mr. Amit Gupta",
    title: "Founding Partner - Studio Symbiosis",
    quote: "I have to say this experience is a little bit better than the earlier ones.",
    image: "/pf3.webp",
  },
  {
    name: "Mr. K. B. Kachru",
    title: "Chairman Emeritus & Principal Advisor (South Asia) - Radisson Hotel Group",
    quote: "There is something special about Hi AiM - intimate, focused, and truly valuable.",
    image: "/pf4.jpg",
  },
  {
    name: "Mr. Ajay Bakaya",
    title: "Managing Director - Sarovar Hotels",
    quote: "I have been attending this conference every year and look forward to it.",
    image: "/pf5.jpg",
  },
  {
    name: "Ms. Charu Singh",
    title: "President - Tourism Finance Corporation Of India Ltd.",
    quote: "The quality of participants and discussions has made Hi AiM consistently relevant.",
    image: "/fpf2.jpg",
  },
];

const Testimonial = () => {
  const [activePage, setActivePage] = useState(0);

  const pages = useMemo(() => {
    const pageList = [];
    for (let i = 0; i < articles.length; i += 3) {
      pageList.push(articles.slice(i, i + 3));
    }
    return pageList;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [pages.length]);

  const prevPage = () => {
    setActivePage((current) => (current - 1 + pages.length) % pages.length);
  };

  const nextPage = () => {
    setActivePage((current) => (current + 1) % pages.length);
  };

  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="text-center">
          <p className="section-kicker"></p>
          <h2 className="mt-4 text-4xl text-zinc-900 md:text-5xl">Conference Speaker</h2>
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ width: `${pages.length * 100}%`, transform: `translateX(-${activePage * (100 / pages.length)}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="grid w-full flex-shrink-0 gap-6 px-1 md:grid-cols-3" style={{ width: `${100 / pages.length}%` }}>
                {page.map((item) => (
                  <article key={item.name} className="premium-card rounded-2xl p-6">
                    <p className="text-sm leading-relaxed text-zinc-700">"{item.quote}"</p>
                    <div className="mt-6 flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full border border-black/20 object-cover" />
                      <div>
                        <h3 className="text-lg text-zinc-900">{item.name}</h3>
                        <p className="text-xs text-zinc-600">{item.title}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={prevPage} className="h-10 w-10 rounded-full border border-black/20 text-zinc-800 hover:bg-black/5">
            ‹
          </button>
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePage(index)}
              className={`h-2.5 rounded-full transition-all ${activePage === index ? "w-8 bg-zinc-900" : "w-2.5 bg-black/30"}`}
            />
          ))}
          <button onClick={nextPage} className="h-10 w-10 rounded-full border border-black/20 text-zinc-800 hover:bg-black/5">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
