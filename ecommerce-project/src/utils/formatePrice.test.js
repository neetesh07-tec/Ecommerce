import { expect, it } from "vitest";
import { formatePrice } from "./formatePrice";
import { describe } from "node:test";

describe("formatePrice", () => {
  it("foraamte 1999 cents into $19.99", () => {
    expect(formatePrice(1999)).toBe("$19.99");
  });
  it("dispaly 2 dasimal", () => {
    expect(formatePrice(1090)).toBe("$10.90");
  });
});
