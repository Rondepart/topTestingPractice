import { reverseString } from "../scripts/reverseString";

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});