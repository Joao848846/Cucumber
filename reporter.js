const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "./cucumber_report.json",
  output: "./cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Browser: "Chrome  89.0.4389.82",
    Platform: "Ubuntu 20.04",
    Parallel: "Scenarios",
    Executed: "Local",
  },
};

reporter.generate(options);
