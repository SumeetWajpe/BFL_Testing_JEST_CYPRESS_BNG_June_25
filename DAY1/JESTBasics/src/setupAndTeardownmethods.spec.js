describe("test suite for set and teardown methods", () => {
  beforeEach(() => {
    console.log("Within before Each");
  });

  it("tests for true to be true - 1", () => {
    console.log("Within The test case  - 1 - true to be true");
    expect(true).toBe(true);
  });
  it("tests for true to be true - 2", () => {
    console.log("Within The test case -  2 - true to be true");
    expect(true).toBe(true);
  });
  beforeAll(() => {
    console.log("Within before All");
  });
  afterEach(() => {
    console.log("Within after Each");
  });
  afterAll(() => {
    console.log("Within after All");
  });
});
