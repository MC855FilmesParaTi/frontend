import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

test("renders menu stub", () => {
  render(<Menu />);
  const linkElement = screen.getByText(/Menu/i);
  expect(linkElement).toBeInTheDocument();
});
