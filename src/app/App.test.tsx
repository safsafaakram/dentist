import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the homepage shell", () => {
  render(<App />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
