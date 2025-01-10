const {test , expect} = require('@playwright/test');

test('Homepage' , async ({page})=>{

    const userName = page.locator('#username');
    const submitBtn = page.locator('#signInBtn');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');


    await userName.fill('sachinguleria');
    await page.locator('#password').fill('learning');
    await submitBtn.click();

  console.log( await page.locator("[style*='display: block']").textContent());
  await expect (page.locator("[style*='display: block']")).toContainText('Incorrect');

  await userName.fill("");
  await userName.fill('rahulshettyacademy');
  await submitBtn.click();

 const allProd = await page.$$("//div[@class='card-body']//h4/a");

 for(Prod of allProd){
  const productsAll = Prod.textContent();
  console.log(productsAll);
 }
})

test.only('UI controls', async ({page})=>{

  page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const userName = page.locator('#username');
  const submitBtn = page.locator('#signInBtn');
  const dropdown = page.locator('select.form-control');
  await dropdown.selectOption("consult");// select based on the value
  await page.locator(".radiotextsty").last().click(); 
  await page.locator('#okayBtn').click();

  //assertions on radio buttons 
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  // assertions on the checkboxes
  await page.locator('#terms').click();
  await expect(page.locator('#terms')).toBeChecked();

  // to unchcek the checkbox
  await page.locator('#terms').uncheck();
  expect(await page.locator('#terms').isChecked()).toBeFalsy();

  await page.pause();
  
})