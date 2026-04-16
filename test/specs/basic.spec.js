describe('Sample WebdriverIO Tests', () => {
  before(async () => {
    console.log('Starting test suite');
  });

  it('should have the right title', async () => {
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();
    expect(title).toContain('WebdriverIO');
  });

  it('should get the correct URL', async () => {
    const url = await browser.getUrl();
    expect(url).toBe('https://webdriver.io/');
  });

  it('should find an element', async () => {
    const heading = await $('h1');
    const isDisplayed = await heading.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  after(async () => {
    console.log('Test suite completed');
  });
});
