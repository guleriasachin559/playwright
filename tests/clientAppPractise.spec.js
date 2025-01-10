const {test, expect} = require('@playwright/test');

test('Automation Script' , async ({page})=> 
{
    const itemName = "Banarsi Saree";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("mavade3529@biscoine.com");
    await page.locator("#userPassword").fill("sacSAC@707");
    await page.locator("#login").click();

    const items = await page.locator(".card-body b").allTextContents();
    console.log(products);

    const coundt = await products.count();

    for (let i = 0; i < coundt; i++) {
       if(await products.nth(i).locator("b").textContent() === itemName)
       {
        await products.nth(i).locator("text= Add To Cart").click();
        break;
       }
        
    }

    await page.locator("[routerlink*='cart']").click();
    await page.locator(".cart li").waitFor();
   const bool = await page.locator("hr:has-text('Banarsi Saree')").isVisible();
   expect(bool).toBeTruthy();

   await page.locator("text=Checkout").click();
   await page.locator("[placeholder='Select Country']").pressSequentially("ind");
   const dropdown = await page.locator(".ta-results");
   await dropdown.waitFor();
   const dropdownOptoins = await dropdown.locator("button").count();
    for (let i = 0; i < dropdownOptoins; i++) {
      if(await dropdownOptoins.nth(i).textContent() === " India")
      {
        dropdownOptoins.nth(i).click();
      }
      
    }


})