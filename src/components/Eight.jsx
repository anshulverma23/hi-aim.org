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
      <div className="section-shell rounded-3xl border border-white/10 bg-[#080e1a]/70 px-6 py-10 md:px-10">
        <h2 className="text-center text-4xl text-white md:text-5xl">Sponsors & Partners</h2>
        <div className="mt-10 space-y-4">
          {sponsorSections.map((title) => (
            <div key={title} className="premium-card rounded-xl px-6 py-5">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#d6b675]">{title}</h3>
              <p className="mt-2 text-slate-300">Announcements coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eight;
