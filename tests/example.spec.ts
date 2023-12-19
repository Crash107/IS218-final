import { test, expect } from "@playwright/test";

const websiteURL = "https://is-218-final-pi.vercel.app/";

const websiteURL1 = "https://is-218-final-pi.vercel.app/icecreampage";

const websiteURL2 = "https://is-218-final-pi.vercel.app/cakepage";

const websiteURL3 = "https://is-218-final-pi.vercel.app/privacy";

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test("Home tab navigates to the home page", async ({ page }) => {
  await Promise.all([
    page.click("text=HOME"),
    await page.waitForSelector("p.hello"),
  ]);

  expect(page.url()).toBe(websiteURL1);
});

test("Ice Cream tab navigates to the ice cream page", async ({ page }) => {
  await Promise.all([
    page.click("text=ICE CREAM"),
    await page.waitForSelector("p.hello"),
  ]);

  expect(page.url()).toBe(websiteURL1);
});
test("Cakes tab navigates to the cakes page", async ({ page }) => {
  await Promise.all([
    page.click("text=CAKES"),
    await page.waitForSelector("p.hello"),
  ]);

  expect(page.url()).toBe(websiteURL2);
});
test("Privacy tab navigates to the privacy page", async ({ page }) => {
  await Promise.all([
    page.click("text=Privacy"),
    await page.waitForSelector("p.hello"),
  ]);

  expect(page.url()).toBe(websiteURL3);
});
