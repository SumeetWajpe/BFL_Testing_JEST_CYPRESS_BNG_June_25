describe("test suite for matchers", () => {
  it("tests for toBe matcher (===)", () => {
    expect("100").toBe(100);
  });
  it("tests for toEqual matcher (===) + object inspection", () => {
    // expect(100).toBe(100); // passes
    // expect({ name: "John" }).toEqual({ name: "John" }); // passes
    expect({ name: "John" }).toEqual({ name: "Johndfd" }); // fails
  });
  it("tests for toContain matcher", () => {
    expect([1, 2, 3]).not.toContain(20);
    // expect("Hello JEST").toContain("JEST");
  });
  it("tests for to Match matcher", () => {
    expect("Hello JEST").toMatch(/JEST/); // uses regex
  });
  fit("tests for toBeCloseTo matcher", () => {
    expect(3).toBeCloseTo(2.99999); // checks for floating point numbers
  });
});
