let common = [
    'features/**/*.feature',                    // Specify our feature files
    '--require-module ts-node/register',        // Load TypeScript module
    '--require step-definitions/**/*.ts',       // Load step definitions
    '--require hooks/**/*.ts',                  // Load hooks
    '--format progress-bar',                    // Load custom formatter
    '-f json:test/report/cucumber_report.json', // Generate cucumber report in json format
    '--publish-quiet'                           // Cucumber Publish Message disabled
  ].join(' ');
  
  module.exports = {
    default: common  
};