import { siteContent } from "@/app/content/practiceContent";

export function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-shell"
      className="relative min-h-screen overflow-hidden bg-[var(--site-bg)] flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(184,148,134,0.22),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(111,143,124,0.14),_transparent_36%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="inline-flex mb-8">
          <span
            className="bg-[var(--site-white)] border border-[var(--site-surface-strong)] rounded-full px-5 py-2 shadow-sm"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            <span className="text-[var(--site-text)] text-xs tracking-[1.2px] uppercase">
              {siteContent.hero.badge}
            </span>
          </span>
        </div>

        <h1
          className="uppercase leading-none mb-6 max-w-3xl text-[var(--site-text)]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(48px, 6.5vw, 88px)",
            letterSpacing: "-2px",
            lineHeight: "0.9",
          }}
        >
          {siteContent.hero.title}
        </h1>

        <p
          className="text-[var(--site-text-muted)] max-w-xl mb-10"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "1.625",
          }}
        >
          {siteContent.hero.description}
        </p>

        <a
          href="#contact"
          className="inline-flex bg-[var(--site-primary-dark)] text-white items-center gap-3 px-8 py-4 rounded-full shadow-lg hover:bg-[var(--site-secondary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-primary)]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          <span className="text-sm tracking-widest uppercase">{siteContent.hero.cta}</span>
        </a>
      </div>
    </section>
  );
}
