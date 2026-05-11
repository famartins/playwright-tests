// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { login, loginWithCorrectCredentials, loginWithIncorrectCredentials } from '../Functions/login';
import { BASE_URL, USER_NAME } from '../Functions/constants';

test('Teste de login com sucesso', async ({ page }) => {
    await loginWithCorrectCredentials(page);  
    await expect(page).toHaveURL(BASE_URL);
});

test('Teste de login com falha', async ({ page }) => {
    await loginWithIncorrectCredentials(page);
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});