import { useState, useRef, useEffect } from "react";

function NavItem({ title, dropdown, onClose }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setOpen(!open);
    }
  };

  const handleItemClick = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open && window.innerWidth < 768) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [open]);

  return (
    <li
      className="relative cursor-pointer group md:py-0 py-2"
      ref={dropdownRef}
      onMouseEnter={() => window.innerWidth >= 768 && setOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setOpen(false)}
      onClick={handleClick}
    >
      {/* main title */}
      <span className="hover:text-violet-500 transition-colors flex items-center justify-between md:justify-start whitespace-nowrap">
        {title}
        {dropdown && (
          <span className={`md:hidden ml-2 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            ▼
          </span>
        )}
      </span>

      {/* dropdown */}
      {dropdown && open && (
        <div className="absolute left-0 mt-2 md:mt-1 md:top-6 bg-white shadow-lg rounded-md overflow-hidden w-full md:w-60 z-50 whitespace-nowrap">
          {dropdown.map((item, i) => (
            <div
              key={i}
              className="px-4 py-3 md:py-2 hover:bg-violet-50 cursor-pointer transition-colors first:pt-3 last:pb-3"
              onClick={handleItemClick}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

export default NavItem;