import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts";
import { TimeOutConstants } from "../../constants/TimeOutConstants.ts";

export class FooterComponent extends BasePage{
    private fullnameConsulting: Locator;
    private emailConsulting: Locator;
    private sdtConsulting: Locator;
    private btnRegisterConsulting: Locator;

    constructor(page: Page) {
    super(page);
    this.fullnameConsulting =  page.getByRole('textbox', { name: 'Họ và tên' });
    this.emailConsulting =  page.getByRole('textbox', { name: 'Email' });
    this.sdtConsulting = page.getByRole('textbox', { name: 'Số điện thoại' });
    this.btnRegisterConsulting = page.getByRole('button', { name: 'Đăng kí' });
  }

    // Phương thức hành động dưới thanh thông tin
  async enterFullnameFooter(fullname: string) {
  await this.fullnameConsulting.fill(fullname);
  }
  
  async enterEmailFooter(email: string) {
  await this.emailConsulting.fill(email);
  }

  async enterSDTFooter(SDT: string) {
  await this.sdtConsulting.fill(SDT);
  }

  async clickBtnRegisterFooter(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.click(this.btnRegisterConsulting, timeOut);
  }
    
}