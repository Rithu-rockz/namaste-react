import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

test("should render contact component correctly", () => {
  render(<Contact />);
  const headingElement = screen.getByRole("Heading");
  expect(headingElement).toBeInTheDocument();
});
