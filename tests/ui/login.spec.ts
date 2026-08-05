import { test, expect } from "../../fixtures/page-fixture.ts";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
});

// 1.Valid Login - Đăng nhập thành công
test("TC01-Verify Login test", async ({ page, homePage, loginPage }) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults();
  const avatar = page.getByRole("link").filter({ hasText: /^$/ }).nth(1);
  await expect(avatar).toBeVisible();
});

// 2. Invalid Account - Tài khoản không tồn tại
test("TC02-Verify Invalid Account", async ({ page, homePage, loginPage }) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults("invalidAccount", "Daibangvip123@");
  const assertLbl = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(assertLbl).toBeVisible();
});

// 3. Invalid Password - Mật khẩu không đúng
test("TC03-Verify - Invalid Password", async ({page,homePage,loginPage,}) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults("vietanh1122", "invalidPassword");
  const errorMsg = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(errorMsg).toBeVisible();
});

// 4. Empty Account - Để trống tài khoản
test("TC04-Verify - Empty Account", async ({ page, homePage, loginPage }) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults("", "Daibangvip123@");
  const errorMsg = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(errorMsg).toBeVisible();
});

// 5. Empty Password - Để trống mật khẩu
test("TC05-Verify - Empty Password", async ({ page, homePage, loginPage }) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults("vietanh1122", "");
  const errorMsg = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(errorMsg).toBeVisible();
});

// 6. Empty Both Fields - Để trống cả hai trường
test("TC06-Verify - Empty Both Fields", async ({page,homePage,loginPage,}) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.clickLogin();
  const errorMsg = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(errorMsg).toBeVisible();
});

// 7. Account Too Short - Tài khoản quá ngắn
test("TC07-Verify - Account Too Short", async ({page,homePage,loginPage,}) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults("abc", "Daibangvip123@");
  const errorMsg = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(errorMsg).toBeVisible();
});

// 8. Password Too Short - Mật khẩu quá ngắn
test("TC08-Verify - Password Too Short", async ({page,homePage,loginPage,}) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults("vietanh1122", "vie");
  const errorMsg = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(errorMsg).toBeVisible();
});

// 9. Invalid Character in Account
test("TC09-Verify - Invalid Character in Account", async ({page,homePage,loginPage,}) => {
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.loginWithDefaults("vietanh1122!", "Daibangvip123@");
  const errorMsg = await page.getByText("Tài khoản hoặc mật khẩu không đúng");
  await expect(errorMsg).toBeVisible();
});