import { siteContent } from "@/app/content/practiceContent";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 relative">
        <h2
          className="text-[var(--site-text)] uppercase text-center"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            letterSpacing: "-0.8px",
          }}
        >
          Nos soins
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {siteContent.services.map((service, index) => (
          <article
            key={service.title}
            className="bg-[var(--site-surface)] p-8 text-center flex flex-col items-center w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.1rem)]"
            style={{
              borderRadius: "142px 52px 142px 88px",
              boxShadow:
                index % 2 === 0
                  ? "0 18px 40px rgba(184, 148, 134, 0.10)"
                  : "0 18px 40px rgba(111, 143, 124, 0.08)",
            }}
          >
            <h3
              className="text-[var(--site-text)] mb-4"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "1.3",
              }}
            >
              {service.title}
            </h3>

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
