import { Locator, Page } from "@playwright/test";
import { TimeOutConstants } from "../constants/TimeOutConstants.ts";

export class BasePage {
  //thuộc tính
  protected page: Page;

  //constructor: khai báo và khởi tạo đối tượng
  constructor(page: Page) {
    this.page = page;
  }

  //phương thức: các hành động chung cho tất cả các trang
  async inputText(
    locator: Locator,
    value: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.fill(value, { timeout: timeOut });
  }

  async click(
    locator: Locator,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.click({ timeout: timeOut });
  }
}