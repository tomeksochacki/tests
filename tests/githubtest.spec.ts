const { test, expect } = require('@playwright/test');
test('basic test', async ({ page }) => {
    test.setTimeout(0);
await page.goto('https://github.com/login');
await page.fill('input[name="login"]', 'tomeksochacki@wp.pl');
await page.fill('input[name="password"]', '130787Tomek!');
await page.click('text=Sign in');
await page.click('text=Pull requests');
await expect(page.locator('text=Created').first()).toBeVisible();
});