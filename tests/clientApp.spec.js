const {test,expect} = require('@playwright/test');
test('Client app login' , async ({page})=> {
    const productsName = 'IPHONE 13 PRO';
    const products = page.locator(".card-body");
    const email = "mavade3529@biscoine.com";
   await page.goto('https://rahulshettyacademy.com/client');
   await page.locator('#userEmail').fill(email);
   await page.locator('#userPassword').fill('sacSAC@707');
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   const titles = await page.locator('.card-body b').allTextContents();
   console.log(titles);
   const count = await products.count();

   for (let i = 0; i < count; i++) {
    
    if( await products.nth(i).locator("b").textContent() === productsName)
  
    {
        //click on the add to cart btn 
        await products.nth(i).locator('text= Add To Cart').click();
        break;

    }
  }

    
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
   expect(bool).toBeTruthy();


   await page.locator("text=Checkout").click();
  //  await page.locator(".input").nth();
  //  await page.locator("text=Name on Card").fill("sachingul");
   await page.locator("[placeholder='Select Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
  const dropdownOptions = await dropdown.locator("button").count();

  for (let i = 0; i < dropdownOptions; i++) {
    if(await dropdown.locator("button").nth(i).textContent() === " India")
    {
       await dropdown.locator("button").nth(i).click();
        break;
    }
    
  }

  await expect(page.locator(".user__name [type='text']").first()).toHaveText(email); // validate the Email id 

  await page.locator(".action__submit").click();// click on the place order button

  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. "); // validate the confirmation text 

  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent(); // grap the order id 

  console.log(orderId);



  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < await rows.count(); ++i) {
   const rowOrderId =  await rows.nth(i).locator("th").textContent();
   if (orderId.includes(rowOrderId))
   {
    await rows.nth(i).locator("button").first().click();
    break;
   }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();










    
  

})