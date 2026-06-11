import { test, expect } from "../../fixtures/page-fixture.ts";

// 1.Valid Login - Đăng nhập thành công
test("Login test", async ({ page, homePage, loginPage }) => {
  const account = "vietanh1122"; // account name
  const password = "Daibangvip123@"; // password

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  // nhập thông tin đăng nhập
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);

  // Click "Đăng nhập" button
  await loginPage.clickLogin();

  const avatar = page.getByRole('link').filter({ hasText: /^$/ }).nth(1);
  await expect(avatar).toBeVisible();
});


// 2. Invalid Account - Tài khoản không tồn tại
test("Login test - Invalid Account", async ({ page, homePage, loginPage }) => {
  const account = "invalidaccount123";
  const password = "Daibangvip123@";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.enterAccount('invalidaccount123');
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();
  
  const assertLbl = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(assertLbl).toBeVisible();
  // Kiểm tra error message
});

// 3. Invalid Password - Mật khẩu không đúng
test("Login test - Invalid Password", async ({ page, homePage, loginPage }) => {
  const account = "vietanh1122";
  const password = "WrongPassword123@";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  const errorMsg = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(errorMsg).toBeVisible();
});

// 4. Empty Account - Để trống tài khoản
test("Login test - Empty Account", async ({ page, homePage, loginPage }) => {
  const account = "";
  const password = "Daibangvip123@";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  const errorMsg = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(errorMsg).toBeVisible();
});

// 5. Empty Password - Để trống mật khẩu
test("Login test - Empty Password", async ({ page, homePage, loginPage }) => {
  const account = "vietanh1122";
  const password = "";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  const errorMsg = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(errorMsg).toBeVisible();
});

// 6. Empty Both Fields - Để trống cả hai trường
test("Login test - Empty Both Fields", async ({ page, homePage, loginPage }) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.clickLogin();

  const errorMsg = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(errorMsg).toBeVisible();
});

// 7. Account Too Short - Tài khoản quá ngắn
test("Login test - Account Too Short", async ({ page, homePage, loginPage }) => {
  const account = "abc";
  const password = "Daibangvip123@";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  const errorMsg = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(errorMsg).toBeVisible();
});

// 8. Password Too Short - Mật khẩu quá ngắn
test("Login test - Password Too Short", async ({ page, homePage, loginPage }) => {
  const account = "vietanh1122";
  const password = "123";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  const errorMsg = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(errorMsg).toBeVisible();
});

// 9. Invalid Character in Account
test("Login test - Invalid Character in Account", async ({ page, homePage, loginPage }) => {
  const account = "vietanh@@##";
  const password = "Daibangvip123@";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();

  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  const errorMsg = await page.getByText('Tài khoản hoặc mật khẩu không đúng');
  await expect(errorMsg).toBeVisible();
});








