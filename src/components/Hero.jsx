import React from "react";

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f3]/92 via-[#f0f0ee]/70 to-[#ececea]/86" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,0,0,0.07),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.22),rgba(244,244,242,0.85))]" />

      <div className="section-shell relative z-10 pb-20 md:pb-28">
        <p className="section-kicker">Hi Aim 2027</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-zinc-900 md:text-6xl">
         The 2-day event comprises a Conference-cum-Exposition
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
          Hi-Aim provides an enriching opportunity for the convergence of Hoteliers, Hotel Brands and Hospitality related decision makers - Architects / Interior Designers on a common Knowledge Sharing platform to confer and exchange ideas on key issues and emerging trends in the hospitality industry.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#program"
            className="rounded-full border border-black/25 bg-zinc-900 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-zinc-700"
          >
            View Program
          </a>
          <a
            href="#overview"
            className="rounded-full border border-black/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900 transition hover:bg-black/5"
          >
            Explore Event
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
