import { expect } from '@playwright/test';
import { BASE_URL, USER_NAME, USER_CORRECT_PASSWORD, USER_INCORRECT_PASSWORD} from './constants';

export async function login(page, USER_NAME, USER_CORRECT_PASSWORD) {
    await page.goto(BASE_URL);
    await expect(await page.title()).toBe('Swag Labs');
    await page.locator('[data-test="username"]').fill(USER_NAME);
    await page.locator('[data-test="password"]').fill(USER_CORRECT_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
}

export async function loginWithCorrectCredentials(page) {
    await login(page, USER_NAME, USER_CORRECT_PASSWORD);
}

export async function loginWithIncorrectCredentials(page) {
    await login(page, USER_NAME, USER_INCORRECT_PASSWORD);
}