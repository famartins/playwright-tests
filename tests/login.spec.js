import { test, expect } from '@playwright/test';
import { login } from '../Functions/login';

test('Teste de login com sucesso', async ({ page }) => {
  
    await login(page, 'standard_user', 'secret_sauce');
    await expect(await page.url('https://www.saucedemo.com/inventory.html')).toBeTruthy();

});

test('Teste de login com falha', async ({ page }) => {
    
    await login(page, 'standard_user', 'senhaerrada');

    const errorMessage = await page.locator('[data-test="error"]').textContent();
    await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');

});