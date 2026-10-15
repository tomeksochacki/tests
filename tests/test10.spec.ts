import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 10: Obsługa okien dialogowych (Dialogs / Alerts) i ramek (iFrames)
 * Poziom trudności: 🔴 Zaawansowany
 * ============================================================================
 * 
 * CZĘŚĆ A (Dialogs / JS Alert & Prompt):
 * 1. Przejdź na stronę: https://the-internet.herokuapp.com/javascript_alerts
 * 2. Zarejestruj listener `page.on('dialog', async dialog => ...)`:
 *    - Sprawdź, czy `dialog.type()` to 'prompt',
 *    - Zaakceptuj okno z wpisanym tekstem: `dialog.accept('Tester Playwright')`.
 * 3. Kliknij przycisk "Click for JS Prompt".
 * 4. Zweryfikuj, że na stronie w elemencie `#result` pojawił się tekst:
 *    `You entered: Tester Playwright`.
 * 
 * CZĘŚĆ B (iFrames):
 * 1. Przejdź na stronę: https://the-internet.herokuapp.com/iframe
 * 2. Użyj `page.frameLocator('#mce_0_ifr')`, aby dostać się do wnętrza ramki edytora TinyMCE.
 * 3. Zlokalizuj element `#tinymce` wewnątrz ramki, wyczyść go i wpisz tekst "Automatyzacja Playwright".
 * 4. Zweryfikuj, że edytor wewnątrz ramki zawiera wpisany tekst.
 * 
 * Uruchomienie testu: `npm run test:task10`
 */

test.describe('Zadanie 10: Zaawansowana obsługa dialogów i ramek iFrame', () => {
  test('Część A: Obsługa okna dialogowego JavaScript Prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // TODO dla kandydata:
    // 1. Zarejestruj page.on('dialog', ...) i obsłuż prompt wpisując 'Tester Playwright'
    // 2. Kliknij przycisk 'Click for JS Prompt' (np. getByRole('button', { name: 'Click for JS Prompt' }))
    // 3. Sprawdź tekst w #result
  });

  test('Część B: Interakcja z elementem wewnątrz ramki iFrame', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');

    // TODO dla kandydata:
    // 1. Użyj page.frameLocator(...)
    // 2. Wpisz tekst do elementu wewnątrz ramki
    // 3. Zweryfikuj zawartość
  });
});
