import { siteContent } from "@/app/content/practiceContent";
import beforeBlanchiment from "@/assets/avant Blanchiment .png";
import afterBlanchiment from "@/assets/aprés Blanchiment .png";
import beforeDetartrage from "@/assets/avant Détartrage.png";
import afterDetartrage from "@/assets/aprés Détartrage.png";
import beforeOrthodontie from "@/assets/avant Orthodontie.png";
import afterOrthodontie from "@/assets/aprés Orthodontie.png";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

const beforeAfterImages: Record<
  string,
  { before: string; after: string; beforeAlt: string; afterAlt: string }
> = {
  "Blanchiment dentaire": {
    before: afterBlanchiment,
    after: beforeBlanchiment,
    beforeAlt: "Avant blanchiment dentaire",
    afterAlt: "Après blanchiment dentaire",
  },
  "Détartrage": {
    before: afterDetartrage,
    after: beforeDetartrage,
    beforeAlt: "Avant détartrage professionnel",
    afterAlt: "Après détartrage professionnel",
  },
  "Orthodontie": {
    before: afterOrthodontie,
    after: beforeOrthodontie,
    beforeAlt: "Avant traitement orthodontique",
    afterAlt: "Après traitement orthodontique",
  },
};

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-8 max-w-7xl mx-auto">
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
          Avant / Après
        </h2>
        <p className="mt-4 text-[var(--site-text-muted)]">
          Résultats illustratifs publiés avec accord du patient.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {siteContent.gallery.map((item) => {
          const images = beforeAfterImages[item.title];
          return (
            <article
              key={item.title}
              className="rounded-[32px] bg-[var(--site-white)] p-6 shadow-sm"
            >
              <h3 className="text-[var(--site-text)] text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-[var(--site-text-muted)] leading-7">
                {item.caption}
              </p>

              <div className="mt-6">
                <BeforeAfterSlider
                  beforeSrc={images.before}
                  afterSrc={images.after}
                  beforeAlt={images.beforeAlt}
                  afterAlt={images.afterAlt}
                />
              </div>

              <div className="flex justify-between mt-4 px-2">
                <span className="text-sm uppercase tracking-wide text-[var(--site-primary)]">
                  Avant
                </span>
                <span className="text-sm uppercase tracking-wide text-[var(--site-secondary)]">
                  Après
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
