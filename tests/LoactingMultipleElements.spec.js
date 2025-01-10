const {test, expect} =require('@playwright/test');

test('Locating the Multiple Elements' , async ({page})=>{

   await page.goto('https://www.demoblaze.com/index.html')
 
    // const allLinks = await page.$$('a');

    // for(const link of allLinks){
    //     const getlink = await link.textContent();
    //     console.log(getlink);
        
    // }

   await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products){
       const allProducts = await product.textContent();
       console.log(allProducts);
    }
})