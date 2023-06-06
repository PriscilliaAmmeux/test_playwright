const { test, expect } = require("@playwright/test");

test("Able to calculate", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await page.getByRole("button", { name: "9" }).click();
  await page.getByRole("button", { name: "Multiplier" }).click();
  await page.getByRole("button", { name: "5" }).click();
  await page.getByRole("button", { name: "Diviser" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "Multiplier" }).click();
  await page.getByRole("button", { name: "6" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  await page.pause();
});
