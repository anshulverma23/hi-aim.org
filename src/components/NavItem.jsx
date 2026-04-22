import { useEffect, useRef, useState } from "react";

function NavItem({ title, href = "#", dropdown = [], onClose, isMobile }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hasDropdown = dropdown.length > 0;

  const closeAll = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }

    return undefined;
  }, [open]);

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  const toggleDropdown = () => {
    if (isMobile) setOpen((prev) => !prev);
  };

  return (
    <li
      className="relative py-2 lg:py-0"
      ref={dropdownRef}
      onMouseEnter={() => {
        if (!isMobile && hasDropdown) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!isMobile && hasDropdown) setOpen(false);
      }}
    >
      {hasDropdown ? (
        <button
          type="button"
          className="flex w-full items-center justify-between text-left text-sm font-medium tracking-[0.08em] text-slate-200 transition hover:text-[#f5d89a] lg:w-auto"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={toggleDropdown}
        >
          {title}
          <span className={`ml-2 transition-transform duration-300 lg:hidden ${open ? "rotate-180" : ""}`}>
            ?
          </span>
        </button>
      ) : (
        <a
          href={href}
          className="block w-full text-sm font-medium tracking-[0.08em] text-slate-200 transition hover:text-[#f5d89a] lg:w-auto"
          onClick={closeAll}
        >
          {title}
        </a>
      )}

      {hasDropdown && open && (
        <div className="z-50 mt-3 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0f1629] shadow-xl lg:absolute lg:left-0 lg:top-full lg:w-72">
          {dropdown.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              className="block w-full border-b border-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-[#f2d99f]"
              onClick={closeAll}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

export default NavItem;
