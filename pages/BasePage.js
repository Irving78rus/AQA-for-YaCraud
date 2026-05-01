export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async visit(path = '/') {
    await this.page.goto(path);
  }

  async waitForVisible(selector) {
    await this.page.locator(selector).waitFor({ state: 'visible' });
  }

  async click(selector) {
    await this.waitForVisible(selector);
    await this.page.click(selector);
  }

  async fill(selector, value) {
    await this.waitForVisible(selector);
    await this.page.fill(selector, value);
  }
}
