function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

xdescribe("test suite for mocking", () => {
  it("for mock function to be called", () => {
    const mockCallback = jest.fn(x => {
      console.log("Mocked Callback called !");
      return 20 + x;
    });

    forEach([10, 20], mockCallback);
    // expect(mockCallback.mock.calls.length).toBe(2);
    // expect(mockCallback.mock.calls[0][0]).toBe(10);
    // expect(mockCallback.mock.calls[1][0]).toBe(20);
    expect(mockCallback.mock.results[0].value).toBe(30);
  });
});
