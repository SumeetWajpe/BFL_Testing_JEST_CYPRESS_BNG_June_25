function Add(x, y) {
  return x + y;
}

test("adds 10 + 20 to equal 30", () => {
  // Arrange
  let result;
  // Act
  result = Add(10, 20);
  // Assert

  expect(result).toBe(30);
});
