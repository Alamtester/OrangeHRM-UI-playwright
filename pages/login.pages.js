import { expect,  Locator ,  Page } from "@playwright/test";

export class loginPage{

constructor(page){

    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[type="password"]');
    this.loginbtn = page.getByRole('button');
    this.forgotyourpassword = page.locator('p.orangehrm-login-forgot-header');
    //p.orangehrm-login-forgot-header

}

async goto(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}

async login(username , password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();

}

async presenceofusernamefield(){
    await expect(this.username).toBeVisible();
}

async presenceofpasswordfield(){
    await expect(this.password).toBeVisible();
}

async presenceofloginbtn(){
    await expect(this.loginbtn).toBeVisible();
}

async forgotyourpasswordhavetext(){
    const text = await this.forgotyourpassword.textContent();
    console.log(text);
    await expect(this.forgotyourpassword).toContainText('Forgot your password?');
}

async presenceofforgotyourpassword(){
    await expect(this.forgotyourpassword).toBeVisible();
}

async forgotyourpasswordclickable(){
    await this.forgotyourpassword.click();
}

}

