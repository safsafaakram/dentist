import whatsappIcon from "@/assets/whatsapp-svgrepo-com.svg";
import { siteContent } from "@/app/content/practiceContent";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={siteContent.whatsappUrl}
      aria-label="Prendre rendez-vous sur WhatsApp"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[var(--site-secondary)] px-4 py-3 text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-primary)]"
    >
      <img src={whatsappIcon} alt="" className="h-5 w-5 invert" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
