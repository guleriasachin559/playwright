const { test, expect } = require('@playwright/test'); // Import Playwright
const { Console } = require('console');

// First test: Browser Context
test.only('Browser Context playwright test', async ({ browser }) => {

    // Create new browser context and page
    
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("mavade3529@biscoine.com");
    await page.locator("[id='password']").fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    // erase the invalid cred from the input fields - to type into input field we use - type , fill but to clear the existing context then fill is more sutiable 

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());





});
