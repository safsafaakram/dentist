import { render, screen } from "@testing-library/react";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

it("shows reimbursement, payment, and map information in French", () => {
  render(
    <>
      <ContactSection />
      <Footer />
    </>,
  );

  expect(screen.getByText(/CNAS \/ CASNOS acceptés/i)).toBeInTheDocument();
  expect(screen.getByText(/prise en charge selon votre dossier/i)).toBeInTheDocument();
  expect(
    screen.getByTitle(/cabinet dentaire sidi yahia sur google maps/i),
  ).toHaveAttribute("src", expect.stringContaining("google.com/maps"));
  expect(screen.getAllByText(/cabinet dentaire sidi yahia/i).length).toBeGreaterThan(0);
});
