import { useState } from "react";
import { siteContent } from "@/app/content/practiceContent";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-start justify-between">
        {/* Logo */}
        <div className="bg-[var(--site-white)] pl-6 pr-5 pt-5 pb-4 rounded-b-2xl shadow-sm">
          <span
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            className="text-[var(--site-text)] text-lg sm:text-xl tracking-tight whitespace-nowrap"
          >
            SIDI YAHIA DENTAL
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 px-8 py-4 rounded-bl-[75px] shadow-sm bg-[var(--site-white)]">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400 }}
              className="text-[var(--site-text-muted)] text-xs tracking-[0.12em] uppercase hover:text-[var(--site-primary)] transition-colors duration-200"
            >
              [ {item.label} ]
            </a>
          ))}
          <a
            href="#contact"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            className="bg-[var(--site-surface)] text-[var(--site-text)] text-xs tracking-[0.12em] uppercase px-5 py-2.5 rounded-full shadow-sm hover:bg-[var(--site-primary-dark)] hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            PRENDRE RDV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden bg-[var(--site-white)] w-15 h-16 flex items-center justify-center rounded-bl-[75px] shadow-sm"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-[5px] w-5">
            <span
              className={`block h-[1.5px] bg-[var(--site-text)] rounded-full transition-all duration-300 ease-out ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--site-text)] rounded-full transition-all duration-300 ease-out ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--site-text)] rounded-full transition-all duration-300 ease-out ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[var(--site-white)] flex flex-col items-end px-5 py-4 shadow-sm rounded-b-2xl">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400 }}
              className="text-[var(--site-text-muted)] text-xs tracking-[0.12em] uppercase hover:text-[var(--site-primary)] transition-colors duration-200 py-3 w-full text-right"
            >
              [ {item.label} ]
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            className="bg-[var(--site-surface)] text-[var(--site-text)] text-xs tracking-[0.12em] uppercase px-5 py-3 rounded-full shadow-sm hover:bg-[var(--site-primary-dark)] hover:text-white transition-colors duration-200 whitespace-nowrap mt-3"
          >
            PRENDRE RDV
          </a>
        </nav>
      </div>
    </header>
  );
}
