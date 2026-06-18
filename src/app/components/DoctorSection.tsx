import imgDoctor from "figma:asset/doctor-karim-yelles.png";
import { siteContent } from "@/app/content/practiceContent";

export function DoctorSection() {
  return (
    <section id="doctor" className="py-16 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="relative flex-shrink-0 w-full lg:w-[480px] h-[420px]">
          <div
            className="absolute inset-6 bottom-0 bg-[var(--site-surface-strong)]"
            style={{ borderRadius: "213px 78px 218px 136px" }}
          />
          <div
            className="absolute overflow-hidden"
            style={{
              top: "24px",
              left: "24px",
              right: "48px",
              bottom: "0",
              borderRadius: "213px 78px 218px 136px",
            }}
          >
            <img
              src={imgDoctor}
              alt={siteContent.doctor.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <h2
            className="text-[var(--site-text)] uppercase text-center lg:text-left"
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              letterSpacing: "0.6px",
            }}
          >
            {siteContent.doctor.name}
          </h2>

          <span className="inline-flex self-center lg:self-start rounded-full bg-[var(--site-surface)] px-4 py-2 text-sm font-semibold text-[var(--site-secondary)]">
            {siteContent.doctor.role}
          </span>

          <p className="text-[var(--site-text-muted)] text-center lg:text-left leading-7">
            {siteContent.doctor.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {siteContent.doctor.credentials.map((item) => (
              <div key={item} className="rounded-3xl bg-[var(--site-surface)] px-4 py-4 text-sm text-[var(--site-text)]">
                {item}
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="relative px-8 py-4 rounded-full text-white flex items-center gap-3 hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-primary)] bg-[var(--site-secondary)]"
            >
              {siteContent.doctor.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
