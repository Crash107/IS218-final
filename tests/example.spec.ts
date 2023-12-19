import { test, expect } from "@playwright/test";

const websiteURL = "http://localhost:3000";
const websiteURL1 = "http://localhost:3000/icecreampage";
const websiteURL2 = "http://localhost:3000/cakepage";
const websiteURL3 = "http://localhost:3000/privacy";

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test("Home tab navigates to the home page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=HOME"),
    page.waitForSelector("p.hello"),
    page.waitForTimeout(1000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL + "/");
});

test("Ice cream tab navigates to the ice cream page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=ICE CREAM"),
    page.waitForSelector("p.hello"),
    page.waitForTimeout(3000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL1);
});

test("Cakes tab navigates to the cakes page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=CAKES"),
    page.waitForSelector("p.hello"),
    page.waitForTimeout(3000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL2);
});

test("Privacy tab navigates to the privacy page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=Privacy"),
    await page.waitForSelector("p.hello"),
    page.waitForTimeout(2000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL3);
});
