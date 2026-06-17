import { siteContent } from "@/app/content/practiceContent";

const placeholderColors = ["#E8D5CE", "#D4C4B8", "#C9B8AB"];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-8 max-w-7xl mx-auto">
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
          Avant / Après
        </h2>
        <p className="mt-4 text-[var(--site-text-muted)]">
          Résultats illustratifs publiés avec accord du patient.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {siteContent.gallery.map((item, index) => (
          <article key={item.title} className="rounded-[32px] bg-[var(--site-white)] p-6 shadow-sm">
            <h3 className="text-[var(--site-text)] text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-[var(--site-text-muted)] leading-7">{item.caption}</p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <figure>
                <div
                  className="h-56 w-full rounded-[24px]"
                  style={{ backgroundColor: placeholderColors[index] }}
                />
                <figcaption className="mt-2 text-sm uppercase tracking-wide text-[var(--site-primary)]">
                  Avant
                </figcaption>
              </figure>

              <figure>
                <div
                  className="h-56 w-full rounded-[24px]"
                  style={{ backgroundColor: placeholderColors[index] }}
                />
                <figcaption className="mt-2 text-sm uppercase tracking-wide text-[var(--site-secondary)]">
                  Après
                </figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
