import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FloatingWhatsAppButton } from "./FloatingWhatsAppButton";

it("switches the primary booking entry points to French", () => {
  const { container } = render(
    <>
      <Navbar />
      <HeroSection />
      <FloatingWhatsAppButton />
    </>,
  );

  expect(screen.getByRole("link", { name: /\[ soins \]/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /votre sourire, notre expertise/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /prendre rendez-vous sur whatsapp/i }),
  ).toHaveAttribute("href", expect.stringContaining("wa.me/21321481200"));
  expect(container.querySelector('[data-testid="hero-shell"] img')).toBeInTheDocument();
});
