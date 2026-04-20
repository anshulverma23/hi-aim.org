import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'

const navItems = [
  { title: 'HOME', href: '#home' },
  {
    title: 'ABOUT HI AIM',
    dropdown: [
      { label: 'Overview', href: '#overview' },
      { label: 'About Us', href: '#about' },
      { label: 'Terms & Conditions', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
  },
  {
    title: 'HI AIM 2027',
    dropdown: [
      { label: 'Program', href: '#program' },
      { label: 'Venue', href: '#venue' },
      { label: 'Speaker', href: '#speaker' },
      { label: 'Exhibitors Profiles', href: '#exhibitors-profiles' },
      { label: 'Sponsorship Details', href: '#sponsorship-details' },
      { label: 'Exposition Layout', href: '#exposition-layout' },
      { label: 'Guidelines for Exhibitors', href: '#guidelines-for-exhibitors' },
      { label: 'Registration T & C', href: '#registration-tc' },
      { label: 'Delegate Registration Form', href: '#delegate-registration-form' },
    ],
  },
  { title: 'GALLERY', href: '#gallery' },
  {
    title: 'NEWS',
    dropdown: [
      { label: 'Media Coverage', href: '#media-coverage' },
      { label: 'Press Releases', href: '#press-releases' },
    ],
  },
  {
    title: 'TESTIMONIALS',
    dropdown: [
      { label: 'Testimonial - 2014', href: '#testimonial-2014' },
      { label: 'Testimonial - 2015', href: '#testimonial-2015' },
      { label: 'Testimonial - 2016', href: '#testimonial-2016' },
      { label: 'Testimonial - 2017', href: '#testimonial-2017' },
      { label: 'Testimonial - 2018', href: '#testimonial-2018' },
      { label: 'Testimonial - 2019', href: '#testimonial-2019' },
      { label: 'Testimonial - 2020', href: '#testimonial-2020' },
      { label: 'Testimonial - 2021', href: '#testimonial-2021' },
      { label: 'Testimonial - 2022', href: '#testimonial-2022' },
      { label: 'Testimonial - 2023', href: '#testimonial-2023' },
      { label: 'Testimonial - 2024', href: '#testimonial-2024' },
      { label: 'Testimonial - 2025', href: '#testimonial-2025' },
      { label: 'Testimonial - 2026', href: '#testimonial-2026' },
    ],
  },
  {
    title: 'ARCHIVES',
    dropdown: [
      { label: 'HI AIM - 2016', href: '#hi-aim-2016' },
      { label: 'HI AIM - 2017', href: '#hi-aim-2017' },
      { label: 'HI AIM - 2018', href: '#hi-aim-2018' },
    ],
  },
  {
    title: 'PAST EDITIONS',
    dropdown: [
      { label: 'HI AIM - 2019', href: '#hi-aim-2019' },
      { label: 'HI AIM - 2020', href: '#hi-aim-2020' },
      { label: 'HI AIM - 2021', href: '#hi-aim-2021' },
      { label: 'HI AIM - 2022', href: '#hi-aim-2022' },
      { label: 'HI AIM - 2023', href: '#hi-aim-2023' },
      { label: 'HI AIM - 2024', href: '#hi-aim-2024' },
      { label: 'HI AIM - 2025', href: '#hi-aim-2025' },
      { label: 'HI AIM - 2026', href: '#hi-aim-2026' },
    ],
  },
  { title: 'CONTACT US', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setOpen(prev => !prev)
  const closeMenu = () => setOpen(false)

  // 📱 mobile detect
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 📜 scroll effect (MAIN FEATURE)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled 
        ? 'bg-white text-[#F6CE71] shadow-md' 
        : 'bg-transparent text-[#F6CE71]'
      }`}
    >
      {/* main navbar */}
      <div className="flex items-center text-lg justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-3">

        {/* logo */}
        <img
          src="/logo1-removebg-preview.png"
          alt="Hi Aim logo"
          className="h-16 w-auto md:h-20"
        />

        {/* hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>

        {/* menu */}
        <ul
          className={`
            flex flex-col md:flex-row
            md:gap-4 lg:gap-6 gap-2
            absolute md:static
            left-0 w-full md:w-auto
            bg-white md:bg-transparent
            px-4 md:px-0 py-4 md:py-0
            shadow-lg md:shadow-none
            border-t md:border-0
            transition-all duration-300
            ${open ? 'top-full block' : 'hidden md:flex'}
          `}
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

      </div>
    </nav>
  )
}

export default Navbar