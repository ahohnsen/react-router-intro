import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation.js";

describe("Navigation", () => {
  it("renders a navigation with two links", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
  });
});
