import { calculator } from "../scripts/calculator";

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(6,7)).toBe(6 + 7);    
  });

  test("subtract", () => {
    expect(calculator.subtract(6,7)).toBe(6 - 7);    
  });

  test("multiply", () => {
    expect(calculator.multiply(6,7)).toBe(6 * 7);    
  });

  test("divide", () => {
    expect(calculator.divide(6,7)).toBeCloseTo(6 / 7);    
  });
});