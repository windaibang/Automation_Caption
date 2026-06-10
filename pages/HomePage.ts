import { CommonPage } from "./CommonPage.ts";
import { Page } from "@playwright/test";

export class HomePage extends CommonPage {
  constructor(page: Page) {
    super(page);
  }

  //phương thức: các hành động riêng cho trang HomePage
}