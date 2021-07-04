import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders `Docker works` on the main screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker works/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders `=` sign to be present", () => {
  render(<App />);
  const linkElement = screen.getByText(/=/i);
  expect(linkElement).toBeInTheDocument();
});
