import { expect, describe, test } from "vitest";
import { add, subtract, multiply, divide } from "./math.helper";

describe("add", () => {
  test("Should add two positive numbers", () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("Should subtract two positive numbers", () => {
    const a = 1;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test("Should subtract two negative numbers", () => {
    const a = -1;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("Should multiply two positive numbers", () => {
    const a = 1;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test("Should multiply two negative numbers", () => {
    const a = -1;
    const b = -2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});

describe("divide", () => {
  test("Should divide two positive numbers", () => {
    const a = 1;
    const b = 2;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});
