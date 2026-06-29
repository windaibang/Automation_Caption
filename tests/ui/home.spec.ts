import { test, expect } from "../../fixtures/page-fixture.ts";
// 1.truy cập vào nút bắt đầu 
test("Click button start at home page", async ({ page, homePage,  }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.clickStartButton();
});
// 2. truy cập vào nút bắt đàu với đăng nhập vào tài khoản
test("Click button start at home page with login account", async ({ page, homePage,loginPage  }) => {
  const account = "vietanh1122"; // account name
  const password = "Daibangvip123@"; // passwords
await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
await homePage.getNavbarComponent().navigateToLogin();
await loginPage.enterAccount(account);
await loginPage.enterPassword(password);
await loginPage.clickLogin();
await homePage.clickStartButton();
const avatar =await page.getByRole('heading', { name: 'Chào mừng' });
await expect(avatar).toBeVisible();
});
