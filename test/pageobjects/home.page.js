class HomePage {
  get searchInput() {
    return $('input[name="q"]');
  }

  get searchButton() {
    return $('button[type="submit"]');
  }

  async open() {
    await browser.url('https://www.google.com');
  }

  async search(query) {
    await this.searchInput.setValue(query);
    await this.searchButton.click();
  }
}

module.exports = new HomePage();
