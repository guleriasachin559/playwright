const {test,expect} = require("@playwright/test");

test('Ui Component' , async ({page})=>{

    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username");
    const subBtn = page.locator("signInBtn");
    const dropDown = page.locator("select.form-control");

    await dropDown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    await expect(page.locator("#terms").isChecked()).toBeFalsy();
    await page.pause();
    
});