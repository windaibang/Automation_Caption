//dùng để hỗ trợ tạo các dữ liệu dùng chung cho nhiều testcase, hoặc tạo dữ liệu ngẫu nhiên cho các testcase

import type { Page, TestInfo } from "@playwright/test";
import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage.ts";
import { RegisterPage } from "../pages/REGISTERPAGE/RegisterPage.ts";
import { LoginPage } from "../pages/LoginPage.ts";
import { BlogPage } from "../pages/BlogPage.ts";

type PageFixture = {
  homePage: HomePage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
  blogPage: BlogPage;
};

async function attachFinalScreenshot(page: Page, testInfo: TestInfo) {
  const attachmentName = `${testInfo.title.replace(/\s+/g, "-").toLowerCase()}-final-state`;

  await testInfo.attach(attachmentName, {
    body: await page.screenshot({
      animations: "disabled",
      fullPage: true,
    }),
    contentType: "image/png",
  });
}

export const test = base.extend<PageFixture>({
  //các fixture dùng chung
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  blogPage: async ({ page }, use) => {
    const blogPage = new BlogPage(page);
    await use(blogPage);
  },
});

test.afterEach(async ({ page }, testInfo) => {
  await attachFinalScreenshot(page, testInfo);
});

export { expect } from "@playwright/test";
