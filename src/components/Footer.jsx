import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#070c17]">
      <div className="section-shell grid gap-8 py-14 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#d5b673]">Organised by</p>
          <h3 className="mt-4 text-4xl text-white md:text-5xl">Hi Aim Conference Pvt. Ltd.</h3>
          <p className="mt-4 max-w-xl text-slate-300">
            Delivering premium platforms for dialogue, partnerships, and innovation in the hospitality ecosystem.
          </p>
        </div>

        <div className="premium-card rounded-2xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#d5b673]">Stay Connected</p>
          <p className="mt-3 text-2xl text-white">Hi Aim Conference + Exposition</p>
          <p className="mt-2 text-sm text-slate-400">Follow for updates, speaker reveals, and registration announcements.</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        <span>© Designed and Developed by Mind Source | </span>
        <a className="text-[#d9be85] hover:underline" href="#!">
          HTML MAIL
        </a>
        <span> | </span>
        <a className="text-[#d9be85] hover:underline" href="#!">
          WEB MAIL
        </a>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Go to home"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#d7b775] bg-[#111827] text-[#f3dba3] shadow-lg transition hover:brightness-110"
      >
        ?
      </button>
    </footer>
  );
};

export default Footer;
