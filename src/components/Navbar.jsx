import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const navItems = [
  { title: "HOME", href: "#home" },
  {
    title: "ABOUT HI AIM",
    dropdown: [
      { label: "Overview", href: "#overview" },
      { label: "About Us", href: "#about" },
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  },
  {
    title: "HI AIM 2027",
    dropdown: [
      { label: "Program", href: "#program" },
      { label: "Venue", href: "#venue" },
      { label: "Speaker", href: "#speaker" },
      { label: "Exhibitors Profiles", href: "#exhibitors-profiles" },
      { label: "Sponsorship Details", href: "#sponsorship-details" },
      { label: "Exposition Layout", href: "#exposition-layout" },
      {
        label: "Guidelines for Exhibitors",
        href: "#guidelines-for-exhibitors",
      },
      { label: "Registration T & C", href: "#registration-tc" },
      {
        label: "Delegate Registration Form",
        href: "#delegate-registration-form",
      },
    ],
  },
  { title: "GALLERY", href: "#gallery" },
  {
    title: "NEWS",
    dropdown: [
      { label: "Media Coverage", href: "#media-coverage" },
      { label: "Press Releases", href: "#press-releases" },
    ],
  },
  { title: "CONTACT US", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-black/10 bg-[#f4f4f2]/95 backdrop-blur-xl"
          : "bg-[#f4f4f2]/70 backdrop-blur-md"
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/logo1-removebg-preview.png"
            alt="Hi Aim logo"
            className="h-14 w-auto"
          />
          <div className="hidden md:block">
           
          </div>
        </a>

        <button
          className="rounded-md border border-black/20 px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-900 lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>


        <ul
          className={`absolute left-0 top-full w-full border-b border-black/10 bg-white px-6 py-6 shadow-2xl lg:static lg:flex lg:w-auto lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none ${
            open ? "block" : "hidden lg:flex"
          }`}
        >
          {navItems.map((item) => (
            <NavItem
              key={item.title}
              title={item.title}
              href={item.href}
              dropdown={item.dropdown}
              onClose={closeMenu}
              isMobile={isMobile}
            />
          ))}
        </ul>

        <button
          className="hidden rounded-full border border-black/25 bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 lg:block"
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
