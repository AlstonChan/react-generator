import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../index";
import "../../../__mocks__/intersectionObserverMock";

test("check heading", () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/React Webpack Template/i);
  expect(linkElement).toBeInTheDocument();
});
