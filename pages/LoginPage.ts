import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";

export class LoginPage extends CommonPage {
  //thuộc tính
  private btnLoginForm: Locator;
  private txtAccount: Locator;
  private txtPassword: Locator;
  private btnLogin: Locator;

  constructor(page: Page) {
    super(page);
    this.btnLoginForm = page.locator("#signIn");
    this.txtAccount = page
      .locator("form")
      .filter({ hasText: "Đăng nhậphoặc sử dụng tài kho" })
      .getByPlaceholder("Tài khoản");
    this.txtPassword = page
      .locator("form")
      .filter({ hasText: "Đăng nhậphoặc sử dụng tài kho" })
      .getByPlaceholder("Mật khẩu");
    this.btnLogin = page
      .locator("form")
      .filter({ hasText: "Đăng nhậphoặc sử dụng tài kho" })
      .getByRole("button");
  }

  //phương thức: các hành động riêng cho trang LoginPage
  async navigateToLoginForm() {
    await this.btnLoginForm.click();
  }
  async enterAccount(account: string) {
    await this.txtAccount.fill(account);
  }
  async enterPassword(password: string) {
    await this.txtPassword.fill(password);
  }
  async clickLogin() {
    await this.btnLogin.click();
  }

  async login(account: string, password: string) {
    await this.navigateToLoginForm();
    await this.enterAccount(account);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
