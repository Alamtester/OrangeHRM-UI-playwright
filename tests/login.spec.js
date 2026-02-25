import {test,expect } from '@playwright/test'

 async function attachScreenshot(page,testInfo,name){
    const screenshot = await page.screenshot();
    await testInfo.attach(name,{
        body: screenshot,
        contentType: 'image/png'
    });
}


test.beforeEach('Login page opened successfully',async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 //const username = //input[@name='username']

})

test('Verify Page title ',async({page},testInfo)=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
    await page.waitForLoadState('networkidle');
    await attachScreenshot(page,testInfo,'OrangeHRM Login Page');
    

})

test('Login with valid credentials', async({page},testInfo)=>{
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[type="password"]').fill('admin123');
    await attachScreenshot(page,testInfo,'OrangeHRM Login Page'); 
    await page.getByRole('button').click(); 
    await page.waitForLoadState('networkidle');
    await attachScreenshot(page,testInfo,'OrangeHRM Dashboard page');  

})

test('Login with invalid credentials',async({page},testInfo)=>{
    await page.locator('input[name="username"]').fill('abcd');
    await page.locator('input[type="password"]').fill('1224');
    await page.getByRole('button').click();
    const errorMessage = page.locator('.oxd-alert-content-text');
    const errorText = await errorMessage.textContent();
    console.log("Error Message is: " , errorText.trim());
    await page.waitForLoadState('networkidle');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid credentials');
    await attachScreenshot(page,testInfo,'Login with Invalid input');

})