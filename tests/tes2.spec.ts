import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 2: Poprawa błędnego lokatora (Locators & Best Practices)
 * Poziom trudności: 🟢 Łatwy
 * ============================================================================
 * 
 * OPIS PROBLEMU:
 * Test próbuje kliknąć przycisk "Add Element", lecz używa nieistniejącego
 * selektora CSS (`button.btn-invalid-non-existent-class`), co powoduje TimeoutError.
 * 
 * TWOJE ZADANIE:
 * 1. Zastąp błędny selektor rekomendowanym przez Playwright lokatorem dostępności,
 *    np. `page.getByRole(...)` lub `page.getByText(...)`.
 * 2. Kliknij przycisk "Add Element".
 * 3. Popraw asercję sprawdzającą, czy pojawił się nowy przycisk "Delete".
 * 4. Uruchom test i sprawdź wynik: `npm run test:task02`
 */

test('Zadanie 2: Dodaj element na stronie i sprawdź widoczność przycisku Delete', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // TODO dla kandydata: Popraw poniższy lokator (użyj np. getByRole)
  const addElementButton = page.getByRole('button', { name: 'Add Element' });
  await expect(addElementButton).toBeVisible;
  await addElementButton.click({ timeout: 30000 });

  // TODO dla kandydata: Popraw asercję, aby sprawdzała widoczność przycisku "Delete"
  const deleteButton = page.locator('#delete-button-broken-id');
  await expect(deleteButton).toBeVisible();
});
