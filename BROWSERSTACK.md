# BrowserStack Configuration Guide

This project is configured to run tests on both local environments and BrowserStack cloud platform.

## Setup

Your BrowserStack credentials are already configured in `.env` file:
- **Username**: tejendra_UwDiBS
- **Access Key**: SWa7q2BEVDDZ9JAFUk59

⚠️ **Security Note**: The `.env` file is in `.gitignore` and should never be committed to version control.

## Running Tests

### Local Execution (Default)
Run tests using local ChromeDriver:
```bash
npm test                 # Run all tests with Chrome
npm run test:chrome      # Run tests with Chrome
npm run test:firefox     # Run tests with Firefox
```

### BrowserStack Execution
Run tests on BrowserStack cloud:
```bash
npm run test:browserstack              # Run on multiple browsers
npm run test:browserstack:chrome        # Run on Chrome
npm run test:browserstack:firefox       # Run on Firefox
npm run test:browserstack:safari        # Run on Safari
```

## Configuration Details

### Local Setup
- **Host**: localhost:4444
- **Browser**: Chrome (default)
- **Service**: ChromeDriver
- **Max Instances**: 1

### BrowserStack Setup
- **Host**: hub.browserstack.com:443
- **Protocol**: HTTPS
- **Browsers**: Chrome, Firefox, Safari (latest versions)
- **OS**: macOS Sonoma
- **Max Instances**: 5 (parallel execution)
- **Debug Mode**: Enabled

## BrowserStack Features Enabled

The configuration includes:
- **Build Name**: WebdriverIO Test Build
- **Project Name**: Sample WDIO Project
- **Debug Logging**: Enabled for better troubleshooting
- **Local Flag**: Set to false (tests run against remote URLs)

## Viewing Test Results

### Local Results
Results are saved to: `test/reports/`

### BrowserStack Dashboard
View detailed test reports, screenshots, and videos:
1. Go to [BrowserStack Automate Dashboard](https://automate.browserstack.com/)
2. Log in with your credentials
3. Find your test sessions under the build "WebdriverIO Test Build"

## Parallel Execution

When running on BrowserStack, tests can run on multiple browsers in parallel:
```bash
npm run test:browserstack  # Runs on Chrome, Firefox, and Safari simultaneously
```

## Environment Variables

You can override the default configuration using environment variables:

```bash
# Run on specific browser
BROWSERSTACK=true npm run test:browserstack:chrome

# Set custom credentials
BROWSERSTACK_USERNAME=your_username BROWSERSTACK_ACCESS_KEY=your_key npm run test:browserstack

# Change base URL
BROWSERSTACK=true wdio run wdio.conf.js --baseUrl=https://example.com
```

## Troubleshooting

### Session Creation Failed
- Verify BrowserStack credentials in `.env` file
- Check internet connection
- Ensure your account has available parallel instances

### Timeout Issues
- Increase `waitforTimeout` in wdio.conf.js
- Check BrowserStack status page for service issues

### Test Not Running on Expected Browser
- Verify browser name in capabilities
- Check BrowserStack dashboard for available versions

## Updating Credentials

If you need to update your BrowserStack credentials:
1. Edit the `.env` file
2. Update `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`
3. Restart tests

## Additional Resources

- [BrowserStack Automate Documentation](https://www.browserstack.com/automate)
- [WebdriverIO BrowserStack Integration](https://webdriver.io/docs/browserstack-service/)
- [BrowserStack Dashboard](https://automate.browserstack.com/)
