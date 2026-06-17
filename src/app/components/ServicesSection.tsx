import { siteContent } from "@/app/content/practiceContent";

const iconMap = {
  sparkle: <span aria-hidden="true">✦</span>,
  calendar: <span aria-hidden="true">📅</span>,
  scaling: <span aria-hidden="true">🪥</span>,
  braces: <span aria-hidden="true">⎯⎯</span>,
  implant: <span aria-hidden="true">🔩</span>,
  cavity: <span aria-hidden="true">🦷</span>,
  bandage: <span aria-hidden="true">🩹</span>,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 relative">
        <h2
          className="text-[var(--site-text)] uppercase text-center"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            letterSpacing: "-0.8px",
          }}
        >
          Nos soins
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {siteContent.services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-[32px] bg-[var(--site-surface)] p-8"
            style={{
              boxShadow:
                index % 2 === 0
                  ? "0 18px 40px rgba(184, 148, 134, 0.10)"
                  : "0 18px 40px rgba(111, 143, 124, 0.08)",
            }}
          >
            <div className="bg-[var(--site-white)] rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl text-[var(--site-primary)]">
              {iconMap[service.icon as keyof typeof iconMap]}
            </div>

            <h3
              className="text-[var(--site-text)] mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "1.3",
              }}
            >
              {service.title}
            </h3>

            <p
              className="text-[var(--site-text-muted)] mb-8"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              {service.description}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[var(--site-primary)] uppercase tracking-[0.7px] hover:text-[var(--site-primary-dark)] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "14px" }}
            >
              En savoir plus
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
