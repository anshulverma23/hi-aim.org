import React from "react";

const cards = [
  {
    title: "Delegates",
    text: "Connect with hospitality investors, developers, owners, and operators driving premium properties across the region.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Exposition",
    text: "Explore curated showcases featuring technology, design systems, and solutions built for next-generation luxury hotels.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Sponsors & Partners",
    text: "Gain visibility among premium buyers and top-level stakeholders through integrated sponsorship opportunities.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
  },
];

const Fourth = () => {
  return (
    <section className="py-20" id="program">
      <div className="section-shell">
        <div className="text-center">
          <p className="section-kicker">Participation</p>
          <h2 className="mt-4 text-4xl text-zinc-900 md:text-5xl">Who Should Attend</h2>
          <p className="mx-auto mt-5 max-w-3xl text-zinc-700">
            Crafted for leaders shaping hospitality design and business outcomes across hotels, resorts, and mixed-use
            destinations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="premium-card overflow-hidden rounded-2xl">
              <img src={card.image} alt={card.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl text-zinc-900">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700">{card.text}</p>
                <button className="mt-6 rounded-full border border-black/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:bg-black/5">
                  Show More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fourth;
