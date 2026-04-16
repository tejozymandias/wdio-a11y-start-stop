
exports.config = {
  user:  'yourusername',
  key:  'youraccesskey',
  hostname: 'hub.browserstack.com',
 services: [
    [
      'browserstack',
      { 
        testObservability: true,
        accessibility: true,
        accessibilityOptions: {
            autoScanning: false, // Disables automatic scans
            wcagVersion: 'wcag21a'
        },
        testObservabilityOptions: {
          projectName: 'A11y Start Stop Scan feature',
          buildName: 'Danske Bank A11y Scan - Build 3'
        },
        browserstackLocal: false // Explicitly disable local tunnel
      },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      'bstack:options': {
        browserVersion: 'latest',
        os: 'Windows',
        osVersion: '11',
        // Move common options directly here for a clean test
        consoleLogs: 'info',
        networkLogs: true,
        projectName: 'A11y Start Stop Scan feature',
        buildName: 'Danske Bank A11y Scan - Build 3'
      }
    },
  ],
  specs: ['./test/specs/bstack/checkout.spec.js'],
  exclude: [],
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildIdentifier: "${BUILD_NUMBER}",
      consoleLogs: 'info',
      networkLogs: 'true'
    }
  },
  logLevel: 'debug',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  reporters: [
    ['spec', {
      outputDir: './test/reports/'
    }]
  ],
  before: function() {
    console.log('Running tests...');
  },
  after: function() {
    console.log('Tests completed!');
  },
  onComplete: function(exitCode, config, capabilities, results) {
    console.log('Test run completed, exiting...');
    process.exit(exitCode);
  }
};

// Merge commonCapabilities with each capability
exports.config.capabilities.forEach(function (caps) {
  for (let i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
