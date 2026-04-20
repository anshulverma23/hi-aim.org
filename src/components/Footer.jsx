import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-[1180px] flex-col justify-between gap-8 px-6 py-10 md:flex-row md:items-center md:gap-10 md:py-14">
          <div>
            <p className="text-[18px] text-[#2f2f2f]">organised by</p>
            <h3 className="mt-2 text-[52px] font-semibold leading-tight text-[#1f2530]">
              Hi Aim Conference Pvt. Ltd.
            </h3>
          </div>

          <div className="w-full max-w-[470px] border border-[#dcdcdc] bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border border-[#c8c8c8] bg-[#f6f6f6] text-[12px] font-semibold text-[#224b8f]">
                Hi AIM
              </div>
              <div>
                <p className="text-[30px] leading-tight text-[#223145]">Hi Aim Conference + Exposition</p>
                <p className="mt-1 text-[16px] text-[#6c6c6c]">Follow Page &nbsp; 557 followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2f2f33] px-4 py-3 text-center text-[17px] text-white">
        <span>© Designed and Developed by Mind Source | </span>
        <a className="text-[#4d79ff] hover:underline" href="#!">
          HTML MAIL
        </a>
        <span> | </span>
        <a className="text-[#4d79ff] hover:underline" href="#!">
          WEB MAIL
        </a>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Go to home"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#0d47a1] text-white shadow-lg transition hover:bg-[#0b3d8a]"
      >
        ↑
      </button>
    </footer>
  )
}

export default Footer
