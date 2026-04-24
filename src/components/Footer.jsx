import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative border-t border-black/10 bg-[#f1f1ef]">
      <div className="section-shell grid gap-8 py-14 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <p className="section-kicker">Organised by</p>
          <h3 className="mt-4 text-4xl text-zinc-900 md:text-5xl">Hi Aim Conference Pvt. Ltd.</h3>
          <p className="mt-4 max-w-xl text-zinc-700">
            Delivering premium platforms for dialogue, partnerships, and innovation in the hospitality ecosystem.
          </p>
        </div>

        <div className="premium-card rounded-2xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-700">Stay Connected</p>
          <p className="mt-3 text-2xl text-zinc-900">Hi Aim Conference + Exposition</p>
          <p className="mt-2 text-sm text-zinc-600">Follow for updates, speaker reveals, and registration announcements.</p>
        </div>
      </div>

      <div className="border-t border-black/10 py-4 text-center text-sm text-zinc-600">
        <span>© Designed and Developed by Mind Source | </span>
        <a className="text-zinc-900 hover:underline" href="#!">
          HTML MAIL
        </a>
        <span> | </span>
        <a className="text-zinc-900 hover:underline" href="#!">
          WEB MAIL
        </a>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Go to home"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white text-zinc-900 shadow-lg transition hover:bg-zinc-100"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
