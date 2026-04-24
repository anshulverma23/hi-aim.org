import React from "react";

const sponsorSections = [
  "Title Sponsor",
  "Patron Sponsor",
  "Platinum Sponsor",
  "Gold Sponsors",
  "Associate Sponsors",
  "Exhibitors",
  "Hi Tea Sponsor",
];

const Eight = () => {
  return (
    <section className="py-20">
      <div className="section-shell rounded-3xl border border-black/10 bg-white/70 px-6 py-10 md:px-10">
        <p className="section-kicker text-center">Network</p>
        <h2 className="text-center text-4xl text-zinc-900 md:text-5xl">Sponsors & Partners</h2>
        <div className="mt-10 space-y-4">
          {sponsorSections.map((title) => (
            <div key={title} className="premium-card rounded-xl px-6 py-5">
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-900">{title}</h3>
              <p className="mt-2 text-zinc-700">Announcements coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eight;
