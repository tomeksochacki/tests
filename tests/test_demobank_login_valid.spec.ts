import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demobank.jaktestowac.pl/logowanie_etap_1.html');
  await page.locator('#login_id').click();
  await page.locator('#login_id').fill('11111111');
  await page.locator('#login_id').dispatchEvent('blur');
  //await page.getByTestId('header_1').click;
  const dalejButton = page.getByRole('button', { name: 'dalej' });
  await expect(dalejButton).toBeDisabled();
  try {
    // Próbuje kliknąć, ale czeka maksymalnie 500 milisekund na aktywację przycisku
    await page.getByRole('button', { name: 'dalej' }).dblclick({ timeout: 500 });
  } catch (error) {
    // Jeśli przycisk był zablokowany i minęło 500ms, Playwright rzuci błąd, który tutaj ignorujemy
    console.log('Nie udało się kliknąć przycisku w wyznaczonym czasie.');
  }

  await expect(dalejButton).toBeEnabled({ timeout: 30000 });
  await page.getByRole('button', { name: 'dalej' }).click();
  //await page.getByRole('button', { name: 'dalej' }).isEnabled;
  await page.locator('#login_password').click();
  await page.locator('#login_password').fill('11111111');
  await page.locator('#login_password').press('Enter');

  await expect(page.getByTestId('user_name')).toHaveText('Jan Demobankowy');
  
  //await page.getByRole('link', { name: 'Jan Demobankowy' }).click();




//   • Co odpowiedzieć: W nowoczesnym Playwright większość akcji (jak click()) automatycznie czeka na nawigację, jeśli jest ona bezpośrednim skutkiem kliknięcia. Jednak w sytuacjach, gdy kliknięcie wywołuje asynchroniczne zdarzenie w tle (np. otwarcie nowego popupu lub specyficzne pobranie pliku), używa się Promise.all(), aby uniknąć stanu wyścigu (race condition).
//   • Kluczowy argument: Konstrukcja:typescript
//   await Promise.all([
//     page.waitForEvent('popup'),
//     page.getByRole('button', { name: 'Otwórz okno' }).click(),
//   ]);

});