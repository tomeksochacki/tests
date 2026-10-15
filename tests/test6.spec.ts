import { test } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

/**
 * ============================================================================
 * ZADANIE 6: Stworzenie kompletnego Page Objectu od zera
 * Poziom trudności: 🟡 Średni / Zaawansowany
 * ============================================================================
 * 
 * OPIS ZADANIA:
 * W pliku `src/pages/CartPage.ts` zaprojektuj i zaimplementuj klasę `CartPage`
 * do obsługi operacji na liście zadań/produktów.
 * 
 * Klasa powinna zawierać metody:
 * 1. `goto()` - przejście pod adres `https://demo.playwright.dev/todomvc/`
 * 2. `addItem(name: string)` - wpisanie nazwy i zatwierdzenie (Enter)
 * 3. `removeItem(name: string)` - najechanie (hover) na dany element i kliknięcie czerwonego przycisku usunięcia (`.destroy`)
 * 4. `assertItemsCount(expectedCount: number)` - weryfikacja liczby widocznych elementów
 * 
 * Uruchomienie testu: `npm run test:task06`
 */

test('Zadanie 6: Zarządzanie elementami przy użyciu CartPage POM', async ({ page }) => {
  const cartPage = new CartPage(page);

  // 1. Otwórz stronę
  // await cartPage.goto();

  // 2. Dodaj elementy
  // await cartPage.addItem('Produkt A');
  // await cartPage.addItem('Produkt B');
  // await cartPage.addItem('Produkt C');

  // 3. Sprawdź, czy są 3 elementy
  // await cartPage.assertItemsCount(3);

  // 4. Usuń 'Produkt B'
  // await cartPage.removeItem('Produkt B');

  // 5. Sprawdź, czy zostały 2 elementy
  // await cartPage.assertItemsCount(2);

  // Odkomentuj powyższy kod i zaimplementuj metody w src/pages/CartPage.ts!
});
