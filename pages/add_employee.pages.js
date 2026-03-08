import {expect , Locator , Page} from '@playwright/test'

export class add_employee{


    constructor(page){
        this.page= page;
        this.PIM = page.getByText('PIM');
    }


async PIMclick(){

    await this.PIM.click();

}


}