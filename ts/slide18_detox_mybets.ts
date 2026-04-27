// Simplified from MyBets E2E — same patterns as the real test:
// https://github.com/fanduel/sportsbook/blob/develop/apps/sportsbook/src/modules/myBets/screens/MyBetsScreen/__tests__/MyBets.Active.detox.acc.ts
// (async tests, await each Detox call; Promise.all when steps are independent)

describe("MyBets - Active (sketch)", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("reaches the Active tab in order (await chain)", async () => {
    await element(by.id("myBetsTab")).tap();
    await expect(element(by.id("activeBetsHeader"))).toBeVisible();
    await expect(element(by.id("activeBetsList"))).toBeVisible();
  });

  it("asserts two independent things in parallel (Promise.all)", async () => {
    // Detox .toBeVisible() returns a Promise; run both at once
    // when order between them does not matter.
    await Promise.all([
      expect(element(by.id("activeBetsHeader"))).toBeVisible(),
      expect(element(by.id("activeBetsList"))).toBeVisible(),
    ]);
  });
});
