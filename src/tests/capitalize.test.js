import { capitalize } from "../scripts/capitalize";

test('capitalize first character', () => {
  expect(capitalize("string")).toBe("String");
});