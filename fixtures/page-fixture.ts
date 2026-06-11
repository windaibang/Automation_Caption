//dùng để hỗ trợ tạo các dữ liệu dùng chung cho nhiều testcase, hoặc tạo dữ liệu ngẫu nhiên cho các testcase

import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage.ts";
import { RegisterPage } from "../pages/RegisterPage.ts";
import { LoginPage } from "../pages/LoginPage.ts";
import { BlogPage } from "../pages/BlogPage.ts";
type PageFixture = {
  homePage: HomePage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
  blogPage: BlogPage;
};

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

export { expect } from "@playwright/test";