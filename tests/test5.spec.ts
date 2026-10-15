import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

/**
 * ============================================================================
 * ZADANIE 5: Implementacja metod we wzorcu Page Object Model (POM) + Tryb równoległy
 * Poziom trudności: 🟡 Średni
 * ============================================================================
 * 
 * OPIS ZADANIA:
 * W pliku `src/pages/LoginPage.ts` znajduje się szkielet klasy `LoginPage`.
 * Twoim celem jest:
 * 
 * KROK 1: Zdefiniowanie poprawnych lokatorów w konstruktorze `LoginPage`.
 * KROK 2: Zaimplementowanie metody `login(username, password)`.
 * KROK 3: Zaimplementowanie metody `assertFlashMessageContains(expectedText)`.
 * 
 * KROK 4 (DODATKOWY):
 * Skonfiguruj tę grupę testów (`test.describe`), aby oba poniższe testy
 * wykonywały się RÓWNOLEGLE (użyj `test.describe.configure(...)` z odpowiednim trybem).
 * Następnie uruchom testy z flagą wymuszającą co najmniej 2 workery:
 * `npx playwright test tests/tasks/task05_pom_methods.spec.ts --workers=2`
 * i upewnij się w logach konsoli, że Playwright użył 2 procesów roboczych ("using 2 workers").
 * 
 * Uruchomienie standardowe: `npm run test:task05`
 */

test.describe('Zadanie 5: Testy logowania z wykorzystaniem LoginPage POM', () => {
  // TODO dla kandydata (KROK 4):
  // Skonfiguruj tryb równoległy dla tej grupy testów:
  // test.describe.configure({ ... });

  test('powinien pomyślnie zalogować użytkownika przy poprawnych danych', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.assertFlashMessageContains('You logged into a secure area!');
  });

  test('powinien wyświetlić błąd przy błędnym haśle', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'ZleHaslo123');
    await loginPage.assertFlashMessageContains('Your password is invalid!');
  });
});
