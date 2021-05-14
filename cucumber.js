let common = [
    'features/**/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--require step-definitions/**/*.ts',   // Load step definitions
    '--publish-quiet'                       // Cucumber Publish Message disabled
  ].join(' ');
  
  module.exports = {
    default: common  
};