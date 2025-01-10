const {test,expect} =require('@playwright/test');

test('Locators' ,async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    // click on the login button 
    await page.click('id=login2');

    // provide the username
    await page.fill('#loginusername','pavanol');

    // provide the password 
    await page.fill('#loginpassword','test@123');

    // click on the login button 
    await page.click("//button[normalize-space()='Log in']");

    // verify logout link present - xpath 
    const logoutlink = await page.locator("(//a[normalize-space()='Log out'])[1]");

    await expect(logoutlink).toBeVisible();

    await page.close();


});