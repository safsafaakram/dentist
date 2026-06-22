import { siteContent } from "@/app/content/practiceContent";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-12">
        <div>
          <h2
            className="text-[var(--site-text)] uppercase"
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              letterSpacing: "-0.8px",
            }}
          >
            {siteContent.contact.heading}
          </h2>

          <p
            className="text-[var(--site-text-muted)] mb-10 mt-4 max-w-lg"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.625",
            }}
          >
            {siteContent.contact.intro}
          </p>

          <div className="flex flex-col gap-7">
            <div>
              <p
                className="text-[var(--site-primary-dark)] uppercase mb-1"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 400,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                }}
              >
                Adresse
              </p>
              <p
                className="text-[var(--site-text-muted)]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.625",
                }}
              >
                {siteContent.contact.address[0]}
                {siteContent.contact.address[1] && (
                  <>
                    <br />
                    {siteContent.contact.address[1]}
                  </>
                )}
              </p>
            </div>

            <div>
              <p
                className="text-[var(--site-primary-dark)] uppercase mb-1"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 400,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                }}
              >
                {siteContent.contact.phoneLabel}
              </p>
              <p
                className="text-[var(--site-text-muted)]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "1.5",
                }}
              >
                {siteContent.contact.phone}
              </p>
            </div>

            <div>
              <p
                className="text-[var(--site-primary-dark)] uppercase mb-1"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 400,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                }}
              >
                Horaires
              </p>
              {siteContent.contact.hours.map((item: string, index: number) => (
                <p
                  key={index}
                  className="text-[var(--site-text-muted)]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.625",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden min-h-[420px]"
          style={{
            borderRadius: "142px 52px 142px 88px",
            boxShadow: "0 18px 40px rgba(184, 148, 134, 0.10)",
          }}
        >
          <iframe
            title="Cabinet Dentaire Sidi Yahia sur Google Maps"
            src={siteContent.contact.mapEmbedUrl}
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
