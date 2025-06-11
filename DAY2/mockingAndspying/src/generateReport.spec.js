const generateReport = require("./generateReport");
describe("test suite for mocking logger function", () => {
  fit("test the generate report with a mocked logger function", () => {
    const mockedLoggerFn = jest.fn();
    generateReport(mockedLoggerFn);
    // expect(mockedLoggerFn.mock.calls.length).toBe(1);
    // expect(mockedLoggerFn).toHaveBeenCalled();
    expect(mockedLoggerFn).toHaveBeenCalledTimes(2);
  });
});
