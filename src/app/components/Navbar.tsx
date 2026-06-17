import { siteContent } from "@/app/content/practiceContent";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-start justify-between">
      <div className="bg-[var(--site-white)] px-6 pt-6 pb-5 rounded-b-3xl flex items-center gap-3 shadow-sm self-start">
        <span
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          className="text-[var(--site-text)] text-xl tracking-tight whitespace-nowrap"
        >
          SIDI YAHIA DENTAL
        </span>
      </div>

      <nav className="bg-[var(--site-white)] flex items-center gap-4 sm:gap-8 px-4 sm:px-10 py-4 rounded-bl-[75px] shadow-sm mt-0 flex-wrap justify-end">
        {siteContent.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400 }}
            className="text-[var(--site-text-muted)] text-sm tracking-widest uppercase hover:text-[var(--site-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-primary)] focus-visible:rounded-sm"
          >
            [ {item.label} ]
          </a>
        ))}
        <a
          href="#contact"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          className="bg-[var(--site-surface)] text-[var(--site-text)] text-xs tracking-widest uppercase px-6 py-3 rounded-full shadow-md hover:bg-[var(--site-primary-dark)] hover:text-white transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-primary)]"
        >
          PRENDRE RDV
        </a>
      </nav>
    </header>
  );
}
