import React from "react";
import { render, screen } from "@testing-library/react";
import AppLayout from "./AppLayout";

test("renders AppLayout stub", () => {
  render(<AppLayout>ola</AppLayout>);
  const linkElement = screen.getByText(/AppLayout/i);
  expect(linkElement).toBeInTheDocument();
});
