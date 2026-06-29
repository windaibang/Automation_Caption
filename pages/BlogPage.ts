import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";
export class BlogPage extends CommonPage {
    private hrefFE: Locator;
    private hrefUI: Locator;    
    private hrefBE: Locator;
    private hrefLibrary: Locator;
    private hrefShare: Locator;
    private hrefIT: Locator;
    private hrefOther: Locator;

    private buttonTime: Locator;
    private buttontailWind: Locator;
    private buttonHTML: Locator;
    private buttonMaterial: Locator;
    private buttonComponent: Locator;
    private buttonMaterialUI: Locator;
    private buttonJavascript: Locator;
    private buttonTyperScript: Locator;
    
    constructor(page: Page) {
        super(page);
        this.hrefFE = page.getByRole('link', { name: 'Front-end / Mobile apps' });
        this.hrefUI = page.getByRole('link', { name: 'UI / UX / Design' });
        this.hrefBE = page.getByRole('link', { name: 'BACK-END' });
        this.hrefLibrary = page.getByRole('link', { name: 'Thư viện' });
        this.hrefShare = page.getByRole('link', { name: 'Chia sẻ người trong nghề' });
        this.hrefIT = page.getByRole('link', { name: 'Châm ngôn IT' });
        this.hrefOther = page.getByRole('link', { name: 'Chủ đề khác' });
        this.buttonTime = page.getByRole('link', { name: 'Xem thêm' }).first();
        this.buttontailWind = page.getByRole('link', { name: 'Xem thêm' }).nth(1)
        this.buttonHTML =page.getByRole('link', { name: 'Xem thêm' }).nth(2)
        this.buttonMaterial= page.getByRole('button', { name: 'Xem thêm' }).nth(3)
        this.buttonComponent = page.getByRole('link', { name: 'Xem thêm' }).nth(4)
        this.buttonMaterialUI = page.getByRole('link', { name: 'Xem thêm' }).nth(5)
        this.buttonJavascript = page.locator('div:nth-child(7) > .cardBlog > .cardBlogContent > .btnGlobal > a')
        this.buttonTyperScript = page.locator('div:nth-child(8) > .cardBlog > .cardBlogContent > .btnGlobal > a')
    }

    

    //phương thức: các hành động trên trang Blog
    async clickFE() {
        await this.hrefFE.click();
    }

    async clickUI() {
        await this.hrefUI.click();
    }

    async clickBE() {
        await this.hrefBE.click();
    }

    async clickLibrary() {
        await this.hrefLibrary.click();
    }

    async clickShare() {
        await this.hrefShare.click();
    }

    async clickIT() {
        await this.hrefIT.click();
    }

    async clickOther() {
        await this.hrefOther.click();
    }
    // click vào các mục xem thêm 
    async clickButtonTime(){
        await this.buttonTime.click();
    }
    async clickButtonTailWind(){
        await this.buttontailWind.click();
    }
    async clickButtonHTML(){
        await this.buttonHTML.click();
    }
    async clickButtonMaterial(){
        await this.buttonMaterial.click();
    }
    async clickButtonComponent(){
        await this.buttonComponent.click();
    }
    async clickButtonMaterialUI(){
        await this.buttonMaterialUI.click();
    }
    async clickButtonTypeScript(){
        await this.buttonTyperScript.click();
    }
    async clickButtonJavaScipt(){
        await this.buttonJavascript.click();
    }

}