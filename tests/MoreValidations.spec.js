const {test,expect} = require('@playwright/test');

test('Popup validation' , async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com/");
    // await page.goBack();
    // await page.goForward();

// for this I ask to the sushant 
    // await expect(page.locator("#displayed-text")).toBeVisible();
    // await page.locator("#hide-textbox").click();
    // await expect(page.locator("#displayed-text")).toBeHidden();

    await page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const frameLoactor = page.frameLocator("#courses-iframe");
    await frameLoactor("li a[href*='lifetime-access']:visible").click();
    
    
})