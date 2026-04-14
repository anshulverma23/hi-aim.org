import React, { useState } from "react";
import NavItem from "./NavItem";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40">

      {/* top bar */}
      <div className="bg-violet-500 h-6 w-full"></div>

      {/* main navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 bg-white text-black shadow-sm">

        {/* logo */}
        <img src="logo1.jpg" alt="logo"  />

        {/* hamburger button (mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 rounded p-1 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* menu */}
        <ul
          className={`
            flex flex-col md:flex-row
            md:gap-4 lg:gap-6 gap-1
            absolute md:static
            bg-white md:bg-transparent
            w-full md:w-auto
            left-0 md:top-auto
            px-4 md:px-0 py-4 md:py-0
            shadow-lg md:shadow-none
            border-t md:border-t-0 border-gray-200 md:border-0
            transition-all duration-300 ease-in-out
            origin-top md:origin-auto
            ${open ? "top-full block scale-y-100" : "hidden scale-y-0 -top-96 md:flex md:scale-y-100"}
          `}
        >

          <li className="py-2 md:py-0 hover:text-violet-500 cursor-pointer transition-colors whitespace-nowrap">HOME</li>

          <NavItem
            title="ABOUT HI AIM"
            onClose={closeMenu}
            dropdown={[
              "Overview",
              "About Us",
              "Terms & Conditions",
              "Privacy Policy"
            ]}
          />

          <NavItem
            title="HI AIM 2027"
            onClose={closeMenu}
            dropdown={[
              "Program",
              "Venue",
              "Speaker",
              "Exhibitors Profiles",
              "Sponsorship Details",
              "Exposition Layout",
              "Guidelines for Exhibitors",
              "Registration T & C",
              "Delegate Registration Form"
            ]}
          />

          <li className="py-2 md:py-0 hover:text-violet-500 cursor-pointer transition-colors whitespace-nowrap">GALLERY</li>

          <NavItem
            title="NEWS"
            onClose={closeMenu}
            dropdown={[
              "Media Coverage",
              "Press Releases"
            ]}
          />

          <NavItem
            title="TESTIMONIALS"
            onClose={closeMenu}
            dropdown={[
              "Testimonial - 2014",
              "Testimonial - 2015",
              "Testimonial - 2016",
              "Testimonial - 2017",
              "Testimonial - 2018",
              "Testimonial - 2019",
              "Testimonial - 2020",
              "Testimonial - 2021",
              "Testimonial - 2022",
              "Testimonial - 2023",
              "Testimonial - 2024",
              "Testimonial - 2025",
              "Testimonial - 2026"
            ]}
          />

          <NavItem
            title="ARCHIVES"
            onClose={closeMenu}
            dropdown={[
              "HI AIM - 2016",
              "HI AIM - 2017",
              "HI AIM - 2018",
            ]}
          />

          <NavItem
            title="ARCHIVES"
            onClose={closeMenu}
            dropdown={[
              "HI AIM - 2016",
              "HI AIM - 2017",
              "HI AIM - 2018",
              "HI AIM - 2019",
              "HI AIM - 2020",
              "HI AIM - 2021",
              "HI AIM - 2022",
              "HI AIM - 2023",
              "HI AIM - 2024",
              "HI AIM - 2025",
              "HI AIM - 2026"
              
            ]}
          />

          <li className="py-2 md:py-0 hover:text-violet-500 cursor-pointer transition-colors whitespace-nowrap">CONTACT US</li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;