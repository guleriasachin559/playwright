const {test, expect} = require('@playwright/test');
const { escape } = require('querystring');

test("Client App test practise", async ({page})=>{
    const prodList = page.locator(".card-body");
    const prodName = "IPHONE 13 PRO";
    const emailId = "mavade3529@biscoine.com";

   await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill(emailId);
    await page.locator("#userPassword").fill("sacSAC@707");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const count =await prodList.count();

    for (let i = 0; i < count; i++) {
        
        if (await prodList.nth(i).locator("b").textContent() === prodName) {
            
            await prodList.nth(i).locator("text=' Add To Cart'").click();
            break;
        }
        
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();

    await page.locator("[placeholder='Select Country']").pressSequentially("ind");

    const dropdown = page.locator(".ta-results");

    await dropdown.waitFor();

    const dropdownOpt = await dropdown.locator("button").count();

    for (let i = 0; i < dropdownOpt; i++) {
        if(await dropdown.locator("button").nth(i).textContent() === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
        
    }
    
   await expect(page.locator(".user__name [type='text']").first()).toHaveText(emailId);
   await page.locator(".action__submit ").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");

   for (let i = 0; i < await rows.count(); i++) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId)) {
        await rows.nth(i).locator("button").first().click();
        break;
    }
    
   }

   
})