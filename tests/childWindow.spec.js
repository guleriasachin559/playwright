const {test,expect} = require('@playwright/test');

test("child Window handle" , async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            documentLink.click(),
        ]
    )
    const text = await newPage.locator('.red a').textContent();
    console.log(text);
    const arrayText = text.split("@");
    const emailId = arrayText[1].split(" ")[0];
    console.log(emailId);
    await page.locator("#username").fill(emailId)
    await page.pause();
    console.log(await page.locator("#username").textContent())
    

})