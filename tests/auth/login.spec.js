// tests/auth/login.spec.js
import { test, expect } from '../../fixtures/testFixtures';
import { USERS } from '../../data/users';
import { ROUTES } from '../../constants/routes';

test.describe('Auth: Login functionality', () => {
  test.beforeEach(async () => {});

  test('User can login successfully', async ({ page, loginPage }) => {
    await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

    await expect(page).toHaveURL(ROUTES.INVENTORY);
  });

  test('User sees error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login(USERS.INVALID.username, USERS.INVALID.password);

    await expect(await loginPage.getError()).toContainText('Username and password do not match');
  });

  test('Locked user cannot login', async ({ loginPage }) => {
    await loginPage.login(USERS.LOCKED.username, USERS.LOCKED.password);

    await expect(await loginPage.getError()).toContainText('locked out');
  });
});
