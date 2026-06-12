import { Page, Locator } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";

export class RegisterPage extends CommonPage {
  //thuộc tính
  private btnRegisterForm: Locator;
  private txtAccount: Locator;
  private txtFullName: Locator;
  private txtPassword: Locator;
  private txtEmail: Locator;
  private txtPhone: Locator;
  private selectGroup: Locator;
  private btnRegister: Locator;

  constructor(page: Page) {
    super(page);
    this.btnRegisterForm =  page.locator('#signUp');;
    this.txtAccount = page.locator('form').filter({ hasText: 'ĐĂNG KÝGP01GP02GP03GP04GP05GP06GP07GP08GP09GP010Đăng ký' }).getByPlaceholder('Tài khoản');
    this.txtFullName = page.getByRole('textbox', { name: 'Họ tên' });
    this.txtPassword = page.locator('form').filter({ hasText: 'ĐĂNG KÝGP01GP02GP03GP04GP05GP06GP07GP08GP09GP010Đăng ký' }).getByPlaceholder('Mật khẩu');
    this.txtEmail = page.getByRole('textbox', { name: 'Email' });
    this.txtPhone = page.getByRole('textbox', { name: 'Số điện thoại' });
    this.selectGroup = page.getByRole('combobox');
    this.btnRegister = page.locator('form').filter({ hasText: 'ĐĂNG KÝGP01GP02GP03GP04GP05GP06GP07GP08GP09GP010Đăng ký' }).getByRole('button');
  }

  //phương thức: các hành động riêng cho trang RegisterPage

  // điều hướng đến form đăng ký
  async navigateToRegisterForm() {
    await this.btnRegisterForm.click();
  }

  async enterAccount(account: string) {
    await this.txtAccount.fill(account);
  }
  
  async enterFullName(fullName: string) {
    await this.txtFullName.fill(fullName);
  }

  async enterPassword(password: string) {
    await this.txtPassword.fill(password);
  }

  async enterEmail(email: string) {
    await this.txtEmail.fill(email);
  }
  async enterPhone(phone: string) {
    await this.txtPhone.fill(phone);
  }
  async selectGroupForm(group: string) {
  await this.selectGroup.selectOption(group);
}

  async clickRegister() {
    await this.btnRegister.click();
  }

  async register(account: string, password: string, fullName: string, email: string, phone: string, group: string) {
    await this.navigateToRegisterForm();
    await this.enterAccount(account);
    await this.enterPassword(password);
    await this.enterFullName(fullName);
    await this.enterEmail(email);
    await this.enterPhone(phone);
    await this.selectGroupForm(group);
    await this.clickRegister();
  }
}