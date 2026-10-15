import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 9: Testy sterowane danymi (Data-Driven Testing / Parametryzacja)
 * Poziom trudności: 🟡 Średnio-zaawansowany
 * ============================================================================
 * 
 * OPIS ZADANIA:
 * W testach automatycznych często testujemy ten sam formularz dla wielu wariantów danych.
 * 
 * TWOJE ZADANIE:
 * 1. Zdefiniuj tablicę obiektów testowych `invalidLoginCases` z przypadkami:
 *    - `{ username: 'invalid_user', password: 'SuperSecretPassword!', expectedError: 'Your username is invalid!' }`
 *    - `{ username: 'tomsmith', password: 'wrong_password', expectedError: 'Your password is invalid!' }`
 *    - `{ username: '', password: '', expectedError: 'Your username is invalid!' }`
 * 2. Stwórz pętlę (np. `for of` lub `.forEach()`), która wygeneruje osobny przypadek `test(...)`
 *    dla każdego zestawu danych.
 * 3. W każdym teście:
 *    - wejdź na `https://the-internet.herokuapp.com/login`,
 *    - uzupełnij pola loginu i hasła,
 *    - kliknij przycisk logowania,
 *    - sprawdź, czy komunikat `#flash` zawiera `expectedError`.
 * 
 * Uruchomienie testu: `npm run test:task09`
 */

// TODO dla kandydata: Zdefiniuj interfejs lub tablicę obiektów z danymi
const invalidLoginCases = [
  // Uzupełnij przypadki testowe
];

// TODO dla kandydata: Wygeneruj testy dynamicznie w pętli
test.describe('Zadanie 9: Walidacja błędów logowania dla wielu zestawów danych', () => {
  // for (const data of invalidLoginCases) {
  //   test(`powinien zwrócić błąd dla użytkownika: "${data.username}"`, async ({ page }) => {
  //      ...
  //   });
  // }
});
