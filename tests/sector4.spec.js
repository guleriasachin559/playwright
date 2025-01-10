const { test , expect} = require ('@playwright/test');

test('Module4' , async ({page})=>
{
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       const username =page.locator("#username"); 
       const suBtn = page.locator("#signInBtn");
       await username.fill("saching");
        await page.locator("#password").fill("learning");
        await suBtn.click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText("Incorrect");
       await username.fill("");
       await username.fill("rahulshettyacademy");
       await suBtn.click();
       console.log(await page.locator(".card-body a").first().textContent());
       console.log(await page.locator(".card-body a").nth(1).textContent());
       console.log(await page.locator(".card-body a").last().textContent());
       
});