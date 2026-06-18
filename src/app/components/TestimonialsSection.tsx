import { siteContent } from "@/app/content/practiceContent";

function StarRating({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} sur 5 étoiles`} className="flex gap-1 text-[var(--site-primary)]">
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h2
          className="text-[var(--site-text)] uppercase"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            letterSpacing: "-0.8px",
          }}
        >
          Avis des patients
        </h2>
        <p className="mt-4 text-[var(--site-text-muted)]">
          Des retours simples, utiles et rassurants pour aider les nouveaux patients à se projeter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {siteContent.testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-[28px] bg-[var(--site-white)] p-8 shadow-sm">
            <StarRating rating={testimonial.rating} />
            <p className="mt-5 text-[var(--site-text-muted)] leading-7">"{testimonial.quote}"</p>
            <p className="mt-6 text-sm font-semibold tracking-wide text-[var(--site-text)] uppercase">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a
          href="https://www.instagram.com/cabinet_dentaire_sidi_yahia/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--site-primary)] px-6 py-3 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Voir plus
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
