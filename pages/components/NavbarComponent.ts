import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basepage.ts";
import { TimeOutConstants } from "../../constants/TimeOutConstants.ts";

export class NavbarComponent extends BasePage {
  private loginLink: Locator;
  private BlogBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLink = page.getByRole("link", { name: "Đăng nhập" });
    this.BlogBtn = page.getByRole("link", { name: "Blog" });
  }

  //phương thức: các hành động trên thanh điều hướng

  async navigateToLogin(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.loginLink.waitFor({ state: "visible", timeout: timeOut });
    await this.click(this.loginLink, timeOut);
  }

  async clickBlogBtn(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.click(this.BlogBtn, timeOut);
  }
}
