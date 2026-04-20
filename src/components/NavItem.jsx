import { useEffect, useRef, useState } from 'react'

function NavItem({ title, href = '#', dropdown = [], onClose, isMobile }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const hasDropdown = dropdown.length > 0

  const closeAll = () => {
    setOpen(false)
    if (onClose) onClose()
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }

    return undefined
  }, [open])

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  const toggleDropdown = () => {
    if (isMobile) setOpen((prev) => !prev)
  }

  return (
    <li
      className="relative py-2 md:py-0"
      ref={dropdownRef}
      onMouseEnter={() => {
        if (!isMobile && hasDropdown) setOpen(true)
      }}
      onMouseLeave={() => {
        if (!isMobile && hasDropdown) setOpen(false)
      }}
    >
      {hasDropdown ? (
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-between whitespace-nowrap text-left transition-colors hover:text-violet-500 md:w-auto md:justify-start"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={toggleDropdown}
        >
          {title}
          <span className={`ml-2 transition-transform duration-300 md:hidden ${open ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
      ) : (
        <a
          href={href}
          className="block w-full cursor-pointer whitespace-nowrap text-left transition-colors hover:text-violet-500 md:w-auto"
          onClick={closeAll}
        >
          {title}
        </a>
      )}

      {hasDropdown && open && (
        <div className="left-0 z-50 mt-2 w-full overflow-hidden rounded-md bg-white shadow-lg md:absolute md:top-full md:mt-0 md:w-64">
          {dropdown.map((item) => (
            <a
              key={item.label}
              href={item.href || '#'}
              className="block w-full cursor-pointer px-4 py-3 text-left transition-colors hover:bg-violet-50 md:py-2"
              onClick={closeAll}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </li>
  )
}

export default NavItem