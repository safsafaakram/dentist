import { render, screen } from "@testing-library/react";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

it("shows map information in French", () => {
  render(
    <>
      <ContactSection />
      <Footer />
    </>,
  );

  expect(
    screen.getByTitle(/cabinet dentaire sidi yahia sur google maps/i),
  ).toHaveAttribute("src", expect.stringContaining("google.com/maps"));
  expect(screen.getAllByText(/cabinet dentaire sidi yahia/i).length).toBeGreaterThan(0);
});
