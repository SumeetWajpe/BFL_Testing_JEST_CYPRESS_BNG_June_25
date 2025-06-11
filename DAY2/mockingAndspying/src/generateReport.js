function generateReport(logFn) {
  const data = "Some dummy data for logging ";
  if (logFn) {
    logFn(data);
  }
  return data;
}

module.exports = generateReport;
