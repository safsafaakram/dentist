import { siteContent } from "@/app/content/practiceContent";

function StarRating({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} sur 5 étoiles`} className="flex gap-1 text-[var(--site-primary)]">
      {Array.from({ length: 5 }).map((_, index) => (
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
            fontFamily: "'Montserrat', sans-serif",
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
    </section>
  );
}
