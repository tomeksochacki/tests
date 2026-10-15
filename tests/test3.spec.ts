import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 3: Interakcje z formularzem, polami tekstowymi i checkboxami
 * Poziom trudności: 🟡 Średnio-łatwy
 * ============================================================================
 * 
 * OPIS ZADANIA:
 * Na stronie demonstracyjnej TodoMVC napisz od zera kroki testowe:
 * 
 * 1. Przejdź na stronę: https://demo.playwright.dev/todomvc/
 * 2. Dodaj do listy 3 zadania o treści:
 *    - "Kupić kawę"
 *    - "Napisać testy w Playwright"
 *    - "Zrobić review kodu"
 * 3. Zaznacz checkbox przy zadaniu "Napisać testy w Playwright" jako ukończone.
 * 4. Zweryfikuj, że:
 *    - Zadanie "Napisać testy w Playwright" otrzymało klasę 'completed' (lub jest przekreślone).
 *    - Licznik na dole strony (`todo-count`) zawiera tekst "2 items left".
 * 
 * Uruchomienie testu: `npm run test:task03`
 */

test('Zadanie 3: Dodawanie zadań do listy TodoMVC i oznaczanie jako ukończone', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  // TODO dla kandydata:
  // Krok 1: Zlokalizuj pole tekstowe (placeholder "What needs to be done?") i dodaj 3 zadania
  const  inputText = page.getByPlaceholder('What needs to be done?');
  await inputText.fill('Zadanie 1').


  // Krok 2: Znajdź drugie zadanie na liście i kliknij jego checkbox

  // Krok 3: Dodaj asercję sprawdzającą klasę 'completed' dla drugiego zadania

  // Krok 4: Dodaj asercję sprawdzającą, czy licznik pozostałych zadań wskazuje "2 items left"
});
