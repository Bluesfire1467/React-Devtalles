import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);

    const h1 = screen.getByText("Rey");
    expect(h1?.innerHTML).toContain("Rey");

    const h3 = screen.getByText("Quintero");
    expect(h3?.innerHTML).toContain("Quintero");
  });

  test("should match snapshot - container", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
});
