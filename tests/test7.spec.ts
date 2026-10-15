import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 7: Mockowanie zapytań sieciowych (Network Interception / Route Mocking)
 * Poziom trudności: 🟡 Średni / Zaawansowany
 * ============================================================================
 * 
 * OPIS ZADANIA:
 * Aplikacja demonstracyjna pod adresem https://demo.playwright.dev/api-mocking
 * wykonuje zapytanie GET do endpointu `/api/v1/fruits`.
 * 
 * TWOJE ZADANIE:
 * 1. Zarejestruj mocka za pomocą `page.route('*/**/api/v1/fruits', ...)` PRZED nawigacją na stronę.
 * 2. Zwróć zamockowaną odpowiedź JSON z dwoma owocami:
 *    - `{ name: 'Ananas Rekrutacyjny', id: 100 }`
 *    - `{ name: 'Arbuz Testowy', id: 200 }`
 * 3. Przejdź na stronę `https://demo.playwright.dev/api-mocking`.
 * 4. Zweryfikuj za pomocą asercji, że oba zamockowane owoce wyświetlają się w widoku strony.
 * 
 * Uruchomienie testu: `npm run test:task07`
 */

test('Zadanie 7: Przechwycenie API i podmiana listy owoców na zamockowane dane', async ({ page }) => {
  // TODO dla kandydata:
  // 1. Zarejestruj mocka page.route() dla endpointu api/v1/fruits i zwróć powyższą tablicę obiektów

  // 2. Otwórz stronę
  await page.goto('https://demo.playwright.dev/api-mocking');

  // 3. Dodaj asercje sprawdzające widoczność 'Ananas Rekrutacyjny' oraz 'Arbuz Testowy'
});