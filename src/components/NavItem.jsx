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
          className="flex w-full items-center justify-between text-left text-sm font-medium tracking-[0.08em] text-zinc-800 transition hover:text-zinc-950 lg:w-auto"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={toggleDropdown}
        >
          {title}
          <span className={`ml-2 transition-transform duration-300 lg:hidden ${open ? "rotate-180" : ""}`}>
            +
          </span>
        </button>
      ) : (
        <a
          href={href}
          className="block w-full text-sm font-medium tracking-[0.08em] text-zinc-800 transition hover:text-zinc-950 lg:w-auto"
          onClick={closeAll}
        >
          {title}
        </a>
      )}

      {hasDropdown && open && (
        <div className="z-50 mt-2 w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl lg:absolute lg:left-0 lg:top-full lg:mt-0 lg:w-72 lg:pt-3">
          {dropdown.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              className="block w-full border-b border-black/5 px-4 py-3 text-sm text-zinc-800 transition hover:bg-black/5 hover:text-zinc-950"
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
