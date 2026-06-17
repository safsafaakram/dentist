import { render, screen } from "@testing-library/react";
import { TestimonialsSection } from "./TestimonialsSection";
import { DoctorSection } from "./DoctorSection";

it("adds patient testimonials and doctor credibility details", () => {
  render(
    <>
      <TestimonialsSection />
      <DoctorSection />
    </>,
  );

  expect(screen.getByRole("heading", { name: /avis des patients/i })).toBeInTheDocument();
  expect(screen.getByText(/15\+ ans d'expérience clinique/i)).toBeInTheDocument();
  expect(
    screen.getByText(/formation continue en dentisterie restauratrice et esthétique/i),
  ).toBeInTheDocument();
  expect(screen.getAllByLabelText(/sur 5 étoiles/i)).toHaveLength(3);
});
