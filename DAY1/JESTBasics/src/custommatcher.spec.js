expect.extend({
  toBeWithinARange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },

});

xdescribe("test suite for custom matcher", () => {
  it("tests for toBeWithinARange matcher to be within a range", () => {
    // expect(10).toBeWithinARange(5, 8); // fails
    // expect(10).toBeWithinARange(5, 15); // passes
    expect(10).not.toBeWithinARange(5, 8); // passes
  });
});

// expect(10).toBeWithinARange(5,15)
// write a custom matcher to check if a number is even or not
// fail the test if the type is not a number