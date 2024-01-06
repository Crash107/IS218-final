import { test, expect } from "@playwright/test";

const websiteURL = "http://localhost:3000";
const websiteURL1 = "http://localhost:3000/icecreampage";
const websiteURL2 = "http://localhost:3000/cakepage";
const websiteURL3 = "http://localhost:3000/privacy";
const websiteURL4 = "http://localhost:3000/HomePage2";
const websiteURL5 = "http://localhost:3000/about";

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test("Go to Ice Cream Page Tab", async ({ page }) => {
  await expect(page.locator(".icecream1")).toBeVisible();
  await page.click(".icecream1");
  await page.waitForURL(websiteURL1);
  expect(page.url()).toBe(websiteURL1);
});

test("Go to Cakes Page Tab", async ({ page }) => {
  await expect(page.locator(".cakes1")).toBeVisible();
  await page.click(".cakes1");
  await page.waitForURL(websiteURL2);
  expect(page.url()).toBe(websiteURL2);
});

test("Go to Privacy Page Tab", async ({ page }) => {
  await expect(page.locator(".privacy1")).toBeVisible();
  await page.click(".privacy1");
  await page.waitForURL(websiteURL3);
  expect(page.url()).toBe(websiteURL3);
});

test("Go to Signup Page Tab", async ({ page }) => {
  await expect(page.locator(".signup1")).toBeVisible();
  await page.click(".signup1");
  await page.waitForURL(websiteURL4);
  expect(page.url()).toBe(websiteURL4);
});

test("Go to Home Page Tab", async ({ page }) => {
  await expect(page.locator(".home1")).toBeVisible();
  await page.click(".home1");
  await page.waitForURL(websiteURL);
  expect(page.url()).toBe(websiteURL + "/");
});

test("All Pages: Check SEO Meta Description", async ({ page }) => {
  await page.goto(websiteURL);
  const metaDescription = await page.getAttribute(
    'meta[name="description"]',
    "content"
  );
  await expect(metaDescription).not.toBe("");
});

test("All Pages: Check SEO Meta Keywords", async ({ page }) => {
  await page.goto(websiteURL);
  const metaKeywords = await page.getAttribute(
    'meta[name="keywords"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});
