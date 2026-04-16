# Sample WebdriverIO Project

This is a sample WebdriverIO end-to-end testing project with basic test examples and page object pattern implementation.

## Project Structure

```
├── test/
│   ├── specs/              # Test specification files
│   │   ├── basic.spec.js   # Basic WebdriverIO tests
│   │   └── example.spec.js # Example tests using Page Objects
│   ├── pageobjects/        # Page Object Model pattern
│   │   └── home.page.js    # HomePage Page Object
│   └── reports/            # Test execution reports
├── wdio.conf.js            # WebdriverIO configuration
├── package.json            # Project dependencies
└── README.md               # This file
```

## Prerequisites

- Node.js 14 or higher
- npm or yarn
- Chrome browser (for default configuration)

## Installation

1. Install dependencies:
```bash
npm install
```

This will install:
- WebdriverIO CLI and runner
- Mocha framework for test writing
- Spec reporter for test output
- ChromeDriver service for Chrome automation

## Configuration

The `wdio.conf.js` file contains:
- **runner**: Local WebdriverIO runner
- **framework**: Mocha BDD framework
- **capabilities**: Chrome browser configuration
- **baseUrl**: Base URL for tests (localhost by default)
- **specs**: Path to test specification files
- **services**: ChromeDriver service for browser automation

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests with specific browser:
```bash
npm run test:chrome
npm run test:firefox
```

### Run specific test file:
```bash
npx wdio run wdio.conf.js --spec test/specs/basic.spec.js
```

## Test Files

### basic.spec.js
Basic example tests that:
- Verify page title
- Check current URL
- Find and interact with DOM elements

### example.spec.js
Advanced example using Page Object Pattern:
- Demonstrates page object usage
- Shows how to search on Google
- Includes element interaction examples

## Page Objects

Page Objects abstract the details of page structure and provide reusable methods:

```javascript
class HomePage {
  get searchInput() { ... }
  async open() { ... }
  async search(query) { ... }
}
```

Benefits:
- Maintainability: Changes to page structure only need updates in page objects
- Reusability: Methods can be used across multiple tests
- Readability: Test code is more descriptive and readable

## Common WebdriverIO Commands

```javascript
// Navigation
await browser.url('https://example.com');
await browser.back();
await browser.refresh();

// Element Selection
const element = $('selector');
const elements = $$('selector');

// Interaction
await element.click();
await element.setValue('text');
await element.submit();

// Assertions
await expect(element).toBeDisplayed();
await expect(element).toHaveText('text');
await expect(browser).toHaveTitle('title');

// Waiting
await browser.waitUntil(() => condition, { timeout: 5000 });
await browser.pause(1000); // Wait 1 second

// Browser info
const title = await browser.getTitle();
const url = await browser.getUrl();
```

## Debugging

### Run tests in debug mode:
```bash
node --inspect-brk ./node_modules/.bin/wdio run wdio.conf.js
```

### Add debug statements:
```javascript
console.log('Debug info:', variable);
await browser.pause(5000); // Pause for inspection
```

## Next Steps

- Add more test files in `test/specs/`
- Create additional page objects in `test/pageobjects/`
- Configure different browser capabilities (Firefox, Safari, etc.)
- Add custom reporters or hooks
- Integrate with CI/CD pipeline

## Resources

- [WebdriverIO Documentation](https://webdriver.io/)
- [Mocha Framework](https://mochajs.org/)
- [Page Object Pattern](https://webdriver.io/docs/pageobjects/)

## License

MIT
