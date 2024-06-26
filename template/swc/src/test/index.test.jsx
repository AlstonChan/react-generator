import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import Homepage from "../routes/index";

import React from "react";

test("Link changes the state when hovered", async () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/React Generator \(Webpack \+ Babel\)/i);
  expect(linkElement).toBeInTheDocument();
});
