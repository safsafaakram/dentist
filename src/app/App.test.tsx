import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the full French homepage journey with proof sections", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /votre sourire, notre expertise/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /avis des patients/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /avant \/ après/i })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /prendre rendez-vous sur whatsapp/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByTitle(/cabinet dentaire sidi yahia sur google maps/i),
  ).toBeInTheDocument();
});
