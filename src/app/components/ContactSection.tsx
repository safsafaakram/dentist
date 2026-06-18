import imgDivWave from "figma:asset/wave-pattern-2.png";
import imgDivWave2 from "figma:asset/wave-pattern-1.png";
import { siteContent } from "@/app/content/practiceContent";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--site-surface)]">
      <div className="w-full h-16 pointer-events-none overflow-hidden">
        <img src={imgDivWave} alt="" className="w-full h-full object-cover object-bottom scale-x-[-1] scale-y-[-1]" />
      </div>

      <div className="px-8 pb-16 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-10">
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

          <p className="text-[var(--site-text-muted)] mb-12 mt-4 leading-7">
            {siteContent.contact.intro}
          </p>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[var(--site-primary)] uppercase mb-1 text-sm tracking-[1.4px]">
                Adresse
              </p>
              <p className="text-[var(--site-text-muted)] leading-7">
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
              <p className="text-[var(--site-primary)] uppercase mb-1 text-sm tracking-[1.4px]">
                {siteContent.contact.phoneLabel}
              </p>
              <p className="text-[var(--site-text-muted)] text-xl font-light">{siteContent.contact.phone}</p>
            </div>

            <div>
              <p className="text-[var(--site-primary)] uppercase mb-1 text-sm tracking-[1.4px]">
                Horaires
              </p>
              {siteContent.contact.hours.map((item: string, index: number) => (
                <p key={index} className="text-[var(--site-text-muted)] leading-7">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {siteContent.contact.paymentCards.map((card: { title: string; body: string }) => (
              <article key={card.title} className="rounded-[28px] bg-[var(--site-white)] p-6 shadow-sm">
                <h3 className="text-[var(--site-text)] font-semibold">{card.title}</h3>
                <p className="mt-3 text-[var(--site-text-muted)] leading-7">{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] overflow-hidden shadow-sm min-h-[420px]">
          <iframe
            title="Cabinet Dentaire Sidi Yahia sur Google Maps"
            src={siteContent.contact.mapEmbedUrl}
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="w-full h-16 pointer-events-none overflow-hidden">
        <img src={imgDivWave2} alt="" className="w-full h-full object-cover object-top scale-y-[-1]" />
      </div>
    </section>
  );
}
