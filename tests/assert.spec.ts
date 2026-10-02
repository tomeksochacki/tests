const { test, expect } = require('@playwright/test');
test('my test', async ({ page }) => {
await page.goto('https://playwright.dev/');

// Oczekujemy, że tytuł będzie zawierał określony łańcuch znaków
await expect(page).toHaveTitle(/Playwright/);
// Oczekujemy, że atrybut będzie równy określonej wartości
await expect(page.locator('text=Get Started')
.first()).toHaveAttribute('href', '/docs/intro');
// Oczekujemy, że element będzie widoczny
await expect(page.locator('text=Learn more')
.first()).toBeVisible();
await page.click('text=Get Started');
// Oczekujemy że na stronie widoczny będzie określony tekst
await expect(page.locator('text=Introduction')
.first()).toBeVisible();
});