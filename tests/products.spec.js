import { test, expect } from '@playwright/test';
import { login, loginWithCorrectCredentials } from '../Functions/login';

test.beforeEach(async ({ page }) => {
    await loginWithCorrectCredentials(page);
});

test('se todos produtos da lista estao corretos', async ({ page }) => {

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

    const productNames = await page.locator('.inventory_item_name').allTextContents();
    for (const productName of productNames) {
        await expect(productName).toContain('Sauce Labs');
    }

});