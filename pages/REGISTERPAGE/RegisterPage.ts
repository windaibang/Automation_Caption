import type { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { REGISTER_DEFAULTS } from "../../constants/RegisterConstants.ts";
import { CommonPage } from "../CommonPage.ts";

export type RegisterData = {
  account: string;
  fullName: string;
  password: string;
  email: string;
  phone: string;
};

export class RegisterPage extends CommonPage {
  private btnRegisterForm: Locator;
  private registerForm: Locator;
  private txtAccount: Locator;
  private txtFullName: Locator;
  private txtPassword: Locator;
  private txtEmail: Locator;
  private txtPhone: Locator;
  private selectGroup: Locator;
  private btnRegister: Locator;

  constructor(page: Page) {
    super(page);
    this.btnRegisterForm = page.locator("#signUp");
    this.registerForm = page.locator("form").filter({has: page.getByRole("combobox"),});
    this.txtAccount = this.registerForm.getByPlaceholder("Tài khoản");
    this.txtFullName = this.registerForm.getByRole("textbox", {name: "Họ tên",});
    this.txtPassword = this.registerForm.getByPlaceholder("Mật khẩu");
    this.txtEmail = this.registerForm.getByRole("textbox", { name: "Email" });
    this.txtPhone = this.registerForm.getByRole("textbox", {name: "Số điện thoại",});
    this.selectGroup = this.registerForm.getByRole("combobox");
    this.btnRegister = this.registerForm.getByRole("button");
  }

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
}

export const createRegisterData = (
  overrides: Partial<RegisterData> = {},
): RegisterData => ({
  account: crypto.randomUUID().substring(0, 15),
  fullName: REGISTER_DEFAULTS.fullName,
  password: REGISTER_DEFAULTS.password,
  email: `${crypto.randomUUID().substring(0, 15)}@gmail.com`,
  phone: REGISTER_DEFAULTS.phone,
  ...overrides,
});

export async function fillRegisterForm(
  registerPage: RegisterPage,
  data: RegisterData,
) {
  await registerPage.enterAccount(data.account);
  await registerPage.enterFullName(data.fullName);
  await registerPage.enterPassword(data.password);
  await registerPage.enterEmail(data.email);
  await registerPage.enterPhone(data.phone);
}

export async function submitRegisterWithGroup(
  registerPage: RegisterPage,
  data: RegisterData,
  group: string,
) {
  await registerPage.navigateToRegisterForm();
  await fillRegisterForm(registerPage, data);
  await registerPage.selectGroupForm(group);
  await registerPage.clickRegister();
}
