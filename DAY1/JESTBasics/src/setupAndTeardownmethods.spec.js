// beforeAll(() => {
//   console.log("Within before All - Global");
// });
// beforeEach(() => {
//   console.log("Within before Each - Global");
// });
// describe("test suite for set and teardown methods", () => {
//   beforeEach(() => {
//     console.log("Within before Each");
//   });

//   it("tests for true to be true - 1", () => {
//     console.log("Within The test case  - 1 - true to be true");
//     expect(true).toBe(true);
//   });
//   it("tests for true to be true - 2", () => {
//     console.log("Within The test case -  2 - true to be true");
//     expect(true).toBe(true);
//   });
//   beforeAll(() => {
//     console.log("Within before All");
//   });
//   afterEach(() => {
//     console.log("Within after Each");
//   });
//   afterAll(() => {
//     console.log("Within after All");
//   });
// });

// afterAll, afterEach

// define a cars array -> ["BMW", "Audi", "Mercedes"]
// write two test cases
//  1. to test the length of the array to be 3
// 2. to test the first element of the array to be "BMW"
// beforeEach -> setUp the array -> ["BMW", "Audi", "Mercedes"]
// afterEach -> cars = null

describe("test suite for set up & teardown methods on an array", () => {
  let cars = null;
  beforeEach(() => {
    cars = ["BMW", "Audi", "Mercedes"];
  });
  it("tests for length of cars array to be 3", () => {
    expect(cars.length).toBe(3);
  });
  it("tests for first element of cars array to be BMW", () => {
    expect(cars[0]).toBe("BMW");
  });

  afterEach(() => {
    cars = null;
  });
});
