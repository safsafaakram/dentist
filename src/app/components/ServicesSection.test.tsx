import { render, screen } from "@testing-library/react";
import { ServicesSection } from "./ServicesSection";

it("renders the seven actual clinic services in French", () => {
  render(<ServicesSection />);

  [
    "Blanchiment",
    "Prendre RDV",
    "Détartrage",
    "Orthodontie",
    "Implants & prothèses",
    "Carie dentaire",
    "Pansement",
  ].forEach((service) => {
    expect(screen.getByRole("heading", { name: service })).toBeInTheDocument();
  });

  expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(7);
});
