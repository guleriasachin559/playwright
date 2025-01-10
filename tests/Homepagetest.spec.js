const { test, expect } = require('playwright/test');

test('Homepage' , async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    const pageTitle = page.title();
    console.log('Page Title is:', pageTitle);
    await expect(page).toHaveTitle('STORE');

    const pageUrl = page.url();
    console.log('The Url of the Page is:' , pageUrl);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
    




})