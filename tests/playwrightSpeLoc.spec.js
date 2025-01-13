const {test,expect}= require('@playwright/test');

test('Playwright Special Locators' , async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/angularpractice/");

   // check the checkbox with the help of the label 
   await page.getByLabel("Check me out if you Love IceCreams!").click();
   await page.getByLabel("Employed").check();
   await page.getByLabel("Gender").selectOption("Male");
   await page.getByPlaceholder("Password").fill("sacSAC@707");
   await page.getByRole("button", {name:'Submit'}).click();
   await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
   await page.getByRole("link",{name:'Shop'}).click();
   await page.locator("aap-card").filter({hasText:'Samsung Note 8'}).getByRole("button").click();
   

});
