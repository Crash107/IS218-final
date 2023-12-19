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
    page.waitForTimeout(2000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL1);
});

test("Cakes tab navigates to the cakes page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=CAKES"),
    page.waitForSelector("p.hello"),
    page.waitForTimeout(2250),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL2);
});

test("Privacy tab navigates to the privacy page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=Privacy"),
    await page.waitForSelector("p.hello"),
    page.waitForTimeout(1750),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL3);
});

test("Signup tab navigates to the signup page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=Sign Up"),
    await page.waitForSelector("p.hello"),
    page.waitForTimeout(3000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL4);
});

test("About link on footer navigates to the about page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=ABOUT US"),
    await page.waitForSelector("p.hello"),
    page.waitForTimeout(3000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL5);
});

test("Cake button navigates to the about page", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=View Cakes"),
    await page.waitForSelector("p.hello"),
    page.waitForTimeout(2000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL2);
});

test("Call to action navigates to the signup form", async ({ page }) => {
  console.log("Before click:", page.url());
  await Promise.all([
    page.click("text=Winter Sale!"),
    await page.waitForSelector("p.hello"),
    page.waitForTimeout(2000),
  ]);
  console.log("After click:", page.url());

  expect(page.url()).toBe(websiteURL4);
});
