import { test, expect } from '@playwright/test';

test('se todos produtos da lista estao corretos', async ({ page }) => {

    

    await page.goto('https://www.saucedemo.com/');
    await expect(await page.title()).toBe('Swag Labs');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const productNames = await page.locator('.inventory_item_name').allTextContents();
    const expectedProductNames = [
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ];

});

test.fail('verificar se todos os produtos tem nome sauce labs', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(await page.title()).toBe('Swag Labs');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const productNames = await page.locator('.inventory_item_name').allTextContents();
    for (const productName of productNames) {
        await expect(productName).toContain('Sauce Labs');
    }

});