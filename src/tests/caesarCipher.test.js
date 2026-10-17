import { cipher } from "../scripts/caesarCipher";

describe("caesar cipher", () => {
  test("wrapping", () => {
    expect(cipher("xyz", 3)).toBe("abc");
  });

  test("wrapping", () => {
    expect(cipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("wrapping", () => {
    expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});