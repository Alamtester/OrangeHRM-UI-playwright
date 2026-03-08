import {test,expect} from '@playwright/test'
import { add_employee } from '../pages/add_employee.pages'
import { loginPage } from '../pages/login.pages';

test('Check PIM is clickable', async({page})=>{
    const addemployee = new add_employee(page);
    const lpage = new loginPage(page);

    await lpage.goto();
    await lpage.login('Admin','admin123');
    await addemployee.PIMclick();

})









