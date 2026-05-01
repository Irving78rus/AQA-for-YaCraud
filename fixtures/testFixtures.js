import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { log } from '../utils/logger';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    log('Opening login page');
    await loginPage.open();

    await use(loginPage);

    log('Test finished');
  },
});

export const expect = test.expect;
