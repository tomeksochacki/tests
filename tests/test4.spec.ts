import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 4: Obsługa elementów asynchronicznych i dynamicznego ładowania
 * Poziom trudności: 🟡 Średni
 * ============================================================================
 * 
 * OPIS PROBLEMU:
 * Na stronie znajduje się przycisk "Start". Po jego kliknięciu pojawia się pasek
 * ładowania (loading bar), a element docelowy z tekstem "Hello World!" jest wstrzykiwany
 * do DOM dopiero po kilku sekundach.
 * 
 * TWOJE ZADANIE:
 * 1. Przejdź na stronę: https://the-internet.herokuapp.com/dynamic_loading/2
 * 2. Kliknij przycisk "Start".
 * 3. Zastosuj mechanizmy Playwright (auto-waiting lub jawne oczekiwanie na stan elementu),
 *    aby upewnić się, że pasek ładowania zniknął lub element docelowy się pojawił.
 * 4. Zweryfikuj asercją, że element `#finish h4` lub tekst "Hello World!" jest widoczny.
 * 
 * Uruchomienie testu: `npm run test:task04`
 */

test('Zadanie 4: Dynamiczne ładowanie elementu po kliknięciu Start', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');

  // TODO dla kandydata:
  // 1. Zlokalizuj i kliknij przycisk Start (np. getByRole('button', { name: 'Start' }))

  // 2. Zweryfikuj, że tekst "Hello World!" pojawił się i jest widoczny na ekranie
  //    (Pamiętaj: ładowanie może zająć do 6 sekund, w razie potrzeby dostosuj timeout asercji).
});
