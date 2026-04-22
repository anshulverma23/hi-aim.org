import React from "react";

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden pt-28">
    
      <div className="absolute inset-0 bg-gradient-to-r from-[#03050c]/90 via-[#050912]/70 to-[#04050a]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,177,107,0.2),transparent_35%)]" />

      <div className="section-shell relative z-10 pb-20 md:pb-28">
        <p className="gold-text text-sm font-semibold uppercase tracking-[0.45em] md:text-base">HI AIM 2027</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          A Premium Convergence for Hospitality Leaders, Architects, and Design Innovators.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
          Join a curated two-day experience where influential decision-makers shape the future of luxury hospitality,
          hotel development, and experiential interiors.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#program"
            className="rounded-full border border-[#d7b775] bg-gradient-to-r from-[#8f6d2d] via-[#d6b372] to-[#8f6d2d] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#111522]"
          >
            View Program
          </a>
          <a
            href="#overview"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
          >
            Explore Event
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
