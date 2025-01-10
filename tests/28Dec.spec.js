const {test,expect}= require('@playwright/test');

test('login Functionalit' ,async({page})=>{

    const userName = page.locator('#username');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('saching');
    await page.locator('#password').fill('learning');

    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    // Validate is radio button is selected or not 
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();

    //then select the static dropdown and validate it 
    const drodown = page.locator('select.form-control');
    await drodown.selectOption("consult");

    // select the checkbox
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();

    // To uncheck the checkbox 
    await page.locator('#terms').uncheck();

    // assertions to check whether this checkbox got unchecked or not 
    await expect(page.locator('#terms').isChecked()).toBeFalsy();

   await page.locator('#signInBtn').click();

   page.close();


})

test.only('child Windows hald' , async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            documentLink.click(),
        ]
    )

     const text = await newPage.locator(".red").textContent(); // pull out the text their 
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];// this will extract the Email their 
   console.log(domain);
  await page.userName(domain);
  await page.pause();
  console.log(await page.userName(domain).textContent()); 
   


})