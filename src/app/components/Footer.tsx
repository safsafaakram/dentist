import { siteContent } from "@/app/content/practiceContent";

export function Footer() {
  return (
    <footer className="rounded-tl-[30px] rounded-tr-[30px] px-12 pt-16 pb-10 bg-[var(--site-footer)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col gap-4">
          <h3 className="text-white/90 uppercase text-2xl font-bold">
            {siteContent.footer.brand}
          </h3>
          <p className="text-white/70 max-w-[320px] leading-7">{siteContent.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-3">
          {siteContent.footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/75 hover:text-[var(--site-surface-strong)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-end justify-end h-full pt-8 md:pt-0 text-right text-white/50 text-sm">
          <p>&copy; 2024 CABINET DENTAIRE SIDI YAHIA.</p>
          <p>Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
