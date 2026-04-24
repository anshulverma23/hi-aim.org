import React from "react";

const metrics = [
  { label: "Delegates", value: "1200+" },
  { label: "Speakers", value: "90+" },
  { label: "Brands", value: "200+" },
];

const Third = () => {
  return (
    <section id="overview" className="py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="premium-card rounded-3xl p-8 md:p-10">
          <p className="section-kicker">Conference Overview</p>
          <h2 className="mt-4 text-3xl leading-tight text-zinc-900 md:text-5xl">
            An Exclusive 2-Day Conference & Exposition Experience
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-700 md:text-lg">
            Hi-Aim presents a distinguished platform where renowned hoteliers, prestigious brands, and visionary
            hospitality decision-makers converge. This refined gathering enables strategic dialogue, actionable
            insights, and collaborative thinking across architecture, design, and operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
          {metrics.map((item) => (
            <div key={item.label} className="premium-card rounded-2xl p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">{item.label}</p>
              <p className="mt-3 text-4xl font-semibold text-zinc-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Third;
