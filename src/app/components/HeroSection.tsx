import { siteContent } from "@/app/content/practiceContent";
import heroImg from "@/assets/hero-main.jpg";
import heroBg from "@/assets/hero-bg.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-shell"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
              className="uppercase leading-none mb-6 text-[var(--site-text)]"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 700,
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
              href={siteContent.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[var(--site-primary-dark)] text-white items-center gap-3 px-8 py-4 rounded-full shadow-lg hover:bg-[var(--site-secondary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-primary)]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            >
              <span className="text-sm tracking-widest uppercase">{siteContent.hero.cta}</span>
            </a>
          </div>

          <div
            className="w-full aspect-[4/3] overflow-hidden"
            style={{ borderRadius: "142px 52px 142px 88px" }}
          >
            <img
              src={heroImg}
              alt="Cabinet dentaire"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
