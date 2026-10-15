import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 1: Poprawa wyrażenia regularnego (Regex) w asercji
 * Poziom trudności: 🟢 Łatwy
 * ============================================================================
 * 
 * OPIS PROBLEMU:
 * Poniższy test kończy się niepowodzeniem (FAIL), ponieważ asercja sprawdzająca
 * tytuł strony zawiera błędne wyrażenie regularne (szuka frazy "Selenium Testing Framework").
 * 
 * TWOJE ZADANIE:
 * 1. Uruchom test i zaobserwuj błąd w konsoli: `npm run test:task01`
 * 2. Zmodyfikuj wyrażenie regularne w asercji `toHaveTitle(...)`, aby dopasowywało
 *    rzeczywisty tytuł strony Playwright (powinno zawierać słowo "Playwright").
 * 3. Upewnij się, że test przechodzi na zielono (PASS).
 */

test('Zadanie 1: Zweryfikuj tytuł strony głównej Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // TODO dla kandydata: Popraw poniższy regex, aby test przeszedł pomyślnie
  await expect(page).toHaveTitle(/Playwright/);
});
