import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";
import { TimeOutConstants } from "../constants/TimeOutConstants.ts";

export class BlogPage extends CommonPage {
    private hrefFE: Locator;
    private hrefUI: Locator;    
    private hrefBE: Locator;
    private hrefLibrary: Locator;
    private hrefShare: Locator;
    private hrefIT: Locator;
    private hrefOther: Locator;
    
    constructor(page: Page) {
        super(page);
        this.hrefFE = page.getByRole('link', { name: 'Front-end / Mobile apps' });
        this.hrefUI = page.getByRole('link', { name: 'UI / UX / Design' });
        this.hrefBE = page.getByRole('link', { name: 'BACK-END' });
        this.hrefLibrary = page.getByRole('link', { name: 'Thư viện' });
        this.hrefShare = page.getByRole('link', { name: 'Chia sẻ người trong nghề' });
        this.hrefIT = page.getByRole('link', { name: 'Châm ngôn IT' });
        this.hrefOther = page.getByRole('link', { name: 'Chủ đề khác' });
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

    
}