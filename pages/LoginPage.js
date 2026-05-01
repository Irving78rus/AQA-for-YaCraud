import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.selectors = {
      username: '#user-name',
      password: '#password',
      loginBtn: '#login-button',
      error: '[data-test="error"]',
      form: '.form_column',
    };
  }

  async open() {
    await this.visit('/');
    await this.waitForVisible(this.selectors.form);
  }

  async login(user, pass) {
    await this.fill(this.selectors.username, user);
    await this.fill(this.selectors.password, pass);
    await this.click(this.selectors.loginBtn);
  }

  async getError() {
    return this.page.locator(this.selectors.error);
  }
}
