import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { DoctorSection } from "./components/DoctorSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <DoctorSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
