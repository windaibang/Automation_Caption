import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts";
import { TimeOutConstants } from "../../constants/TimeOutConstants.ts";

export class NavbarComponent extends BasePage {
  private loginLink: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLink = page.getByRole('link', { name: 'Đăng nhập' });
  }

  //phương thức: các hành động trên thanh điều hướng
  
  async navigateToLogin(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.click(this.loginLink, timeOut);
  }
}