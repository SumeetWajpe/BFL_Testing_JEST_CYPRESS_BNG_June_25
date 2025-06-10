const Add = require("./add");
// using JEST test method
// test("adds 10 + 20 to equal 30", () => {
//   // Arrange
//   let result;
//   // Act
//   result = Add(10, 20);
//   // Assert

//   expect(result).toBe(30);
// });

// Test suite & test case
// fit, xit, xdescribe, fdescribe
xdescribe("test suite for addition", () => {
  it("adds two numbers", () => {
    // Arrange
    let result;
    // Act
    result = Add(10, 20);
    // Assert
    expect(result).toBe(30);
  });
  it("adds two strings", () => {
    // Arrange
    let result;
    // Act
    result = Add("Hello", "JEST");
    // Assert
    expect(result).toBe("HelloJEST");
  });
});

xdescribe("a sample test suite", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
