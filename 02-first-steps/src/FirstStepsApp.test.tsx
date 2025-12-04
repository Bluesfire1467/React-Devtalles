import { describe, test, expect, vi, beforeEach } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((props: unknown) => (
  <div data-testid="item-counter" />
));

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of items", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("item-counter");
    expect(itemCounters.length).toBe(3);
  });

  test("should render ItemCounter with the correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "PlayStation 5",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Xbox Series X",
      quantity: 1,
    });
  });
});
