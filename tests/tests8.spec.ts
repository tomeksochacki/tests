import { test, expect } from '@playwright/test';

/**
 * ============================================================================
 * ZADANIE 8: Testowanie API (Direct API Testing with Playwright `request`)
 * Poziom trudności: 🟡 Średni
 * ============================================================================
 * 
 * OPIS ZADANIA:
 * Playwright pozwala na wykonywanie bezpośrednich zapytań HTTP bez otwierania
 * przeglądarki, korzystając z wbudowanej fixtury `request`.
 * 
 * TWOJE ZADANIE:
 * 1. Wykonaj zapytanie POST na endpoint: `https://jsonplaceholder.typicode.com/posts`
 *    z payloadem JSON:
 *    {
 *      title: 'Zadanie rekrutacyjne Playwright',
 *      body: 'Automatyzacja testów API w TypeScript',
 *      userId: 1
 *    }
 * 2. Zweryfikuj, że kod odpowiedzi to 201 (Created).
 * 3. Sparsuj odpowiedź JSON i sprawdź asercjami:
 *    - pole `title` zgadza się z wysłanym,
 *    - pole `id` jest liczbą (np. `toBeDefined()`).
 * 
 * Uruchomienie testu: `npm run test:task08`
 */

test('Zadanie 8: Wysłanie żądania POST do REST API i walidacja odpowiedzi', async ({ request }) => {
  // TODO dla kandydata:
  // 1. Wyślij zapytanie POST: const response = await request.post(...)

  // 2. Sprawdź status odpowiedzi: expect(response.status()).toBe(201)

  // 3. Pobierz ciało odpowiedzi: const responseBody = await response.json()

  // 4. Dodaj asercje sprawdzające pola w responseBody
});
