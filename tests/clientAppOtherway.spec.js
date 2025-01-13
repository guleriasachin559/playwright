const {test,expect} = require('@playwright/test');
test('Client app login' , async ({page})=> {
    const productsName = 'IPHONE 13 PRO';
    const products = page.locator(".card-body");
    const email = "mavade3529@biscoine.com";
   await page.goto('https://rahulshettyacademy.com/client');
   await page.getByPlaceholder('email@example.com').fill(email);
   await page.getByPlaceholder('enter your passsword').fill('sacSAC@707');
   await page.getByRole("button", {name: 'Login'}).click();
   await page.waitForLoadState('networkidle');
   const titles = await page.locator('.card-body b').allTextContents();
   await page.locator(".card-body").filter({hasText:'IPHONE 13 PRO'}).getByRole("button",{name:' Add To Cart'}).click();
   await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("IPHONE 13 PRO")).toBeVisible();
   await page.getByRole("Button",{name:'Checkout'}).click();
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.getByRole("Button",{name:'India'}).nth(1).click();
   await page.getByText("Place Order").click();
   await expect(page.getByText("Thankyou for the order")).toBeVisible(); // validate the confirmation text 
   
   
   
  await expect(page.locator(".user__name [type='text']").first()).toHaveText(email); // validate the Email id 

  await page.locator(".action__submit").click();// click on the place order butto 

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