import { CommonPage } from "./CommonPage.ts";
import { Locator, Page } from "@playwright/test";

export class HomePage extends CommonPage {
  private btnStart: Locator;
  private cardglobal1: Locator;
  private firstProgrammingWebLink: Locator;
  private secondProgrammingWebLink: Locator;
  private newCourse2026Link: Locator;

  constructor(page: Page) {
    super(page);
    this.btnStart = page.getByRole("button", { name: "Bắt đâu nào" });
    this.cardglobal1 = page.getByRole("link", { name: "Javascriptt12 Lập trình hiện" });
    this.firstProgrammingWebLink = page
      .getByRole("link", { name: "Lập trình web Lập trình hiện" })
      .first();
    this.secondProgrammingWebLink = page
      .getByRole("link", { name: "Lập trình web Lập trình hiện" })
      .nth(1);
    this.newCourse2026Link = page.getByRole("link", {
      name: "Khóa học mới 2026 Lập trình",


    });
  }

  async clickFirstProgrammingWebLink() {
    await this.firstProgrammingWebLink.click();
  }

  async clickSecondProgrammingWebLink() {
    await this.secondProgrammingWebLink.click();
  }

  async clickNewCourse2026Link() {
    await this.newCourse2026Link.click();
  }
  async clickStartButton() {
    await this.btnStart.click();
  }

  async clickCardGlobal1() {
    await this.cardglobal1.click();
  }
}