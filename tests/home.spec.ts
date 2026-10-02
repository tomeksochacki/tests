import { test, expect } from '@playwright/test';

test('powinien załadować stronę główną i sprawdzić tytuł', async ({ page, browser }) => {
  // 1. Wejdź na stronę
  await page.goto('https://playwright.dev/');

  // 2. Sprawdź, czy tytuł strony zawiera oczekiwany tekst
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Znajdź przycisk "Get started" i kliknij go
  const getStartedButton = page.getByRole('link', { name: 'Get started' });
  await getStartedButton.click();

  // 4. Upewnij się, że adresem URL jest strona z wprowadzeniem
  await expect(page).toHaveURL(/.*intro/);

  expect

  await expect(browser).toBeCloseTo;

  
});