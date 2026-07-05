import { test, expect } from "../../fixtures/page-fixture.ts";

// ===== TEST CASE ĐĂNG KÍ THÀNH CÔNG =====
test("Register test", async ({ page, homePage, registerPage }) => {
  const account = crypto.randomUUID().substring(0, 15); // random name
  const password = "Daibangvip123@"; // password
  const fullName = "Huỳnh Lê Việt Anh"; // full name
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
    homePage.getNavbarComponent().navigateToLogin();  
    await registerPage.navigateToRegisterForm();   
    await registerPage.enterAccount(account);
    await registerPage.enterFullName(fullName);
    await registerPage.enterPassword(password);
    await registerPage.enterEmail(`${account}@gmail.com`);    
    await registerPage.enterPhone("0345678901");
    await registerPage.selectGroupForm('GP03');
    await page.locator('form').filter({ hasText: 'ĐĂNG KÝGP01GP02GP03GP04GP05GP06GP07GP08GP09GP010Đăng ký' }).getByRole('button').click();
    const errorMsg = await page.getByText('Đăng kí thành công');
    await expect(errorMsg).toBeVisible();

});

// ===== TEST CASE LỖI TÀI KHOẢN (tài khoản quá 16 kí tự) =====
test("Register fails when account field more 16 characters", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount('aaaaaaaaaaaaaaaaaaaaaaaaaa');
  await registerPage.enterFullName(fullName);
  await page.locator('form').filter({ hasText: 'ĐĂNG KÝTài khoản quá 16 kí tự' }).getByPlaceholder('Mật khẩu').fill(password); 
  await registerPage.enterEmail(`${account}@gmail.com`); 
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await page.locator('form').filter({ hasText: 'ĐĂNG KÝTài khoản quá 16 kí tự' }).getByRole('button').click();
});

// ===== TEST CASE LỖI TÀI KHOẢN (tài khoản quá ít kí tự) =====
test("Register fails when account is to short", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount('a');
  await registerPage.enterFullName(fullName);
  await page.locator('form').filter({ hasText: 'ĐĂNG KÝTài khoản quá ít kí tự' }).getByPlaceholder('Mật khẩu').fill(password);  
  await registerPage.enterEmail(`${account}@gmail.com`);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await page.locator('form').filter({ hasText: 'ĐĂNG KÝTài khoản quá ít kí tự' }).getByRole('button').click();
  const redlabel= await page.getByText('Tài khoản quá ít kí tự');
  await expect(redlabel).toBeVisible();
});

// ===== TEST CASE LỖI TÀI KHOẢN (tài khoản để trống) =====
test("Register fails with empty account", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const phone = "0345678901";  
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount('');
  await registerPage.enterFullName(fullName);
  await page.locator('form').filter({ hasText: 'ĐĂNG KÝTài khoản không được' }).getByPlaceholder('Mật khẩu').fill(password); 
  await registerPage.enterEmail(`${account}@gmail.com`);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await page.locator('form').filter({ hasText: 'ĐĂNG KÝTài khoản không được' }).getByRole('button').click();
  const lblaccount = await page.getByText('Tài khoản không được để trống');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST CASE LỖI TÀI KHOẢN (tài khoản có kí tự đặc biệt) =====
test("Register with special characters in account", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 5) + "!@#$()"; // account with special characters
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí không thành công');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST CASE ĐĂNG KÍ TÀI KHOẢN TOÀN SỐ  =====
test("Register with account contains only numbers", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = "1234567890"; // account with only numbers
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount =  await page.getByText('Tài khoản đã tồn tại!');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST CASE ĐĂNG KÍ TÀI KHOẢN ĐÃ TỒN TẠI  =====
test("Register with existing account", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = "vietanh1122";
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";  
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);  
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Tài khoản đã tồn tại');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST CASE LỖI TÀI KHOẢN (tài khoản có khoảng trắng) =====
test("Register with account contains whitespace", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = "viet anh 22 33"; // account with whitespace
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901"; 
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await registerPage.clickRegister();
  const lblaccount = page.getByText('Đăng kí không thành công');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI HỌ TÊN HƠN 50 KÍ TỰ =====
test("Register with full name more than 50 characters", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh Huỳnh Lê Việt Anh Huỳnh Lê Việt Anhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; // full name with more than 50 characters
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901"; 
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);  
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí không thành công');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI CHỈ NHẬP SỐ VÀO Ô HỌ TÊN =====
test("Register with full name contains only numbers", async ({ page, registerPage, homePage }) => {
  const fullName = "1234567890"; // full name with only numbers
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";  
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);  
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Chỉ nhập kí tự chữ');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI HỌ TÊN CHỈ NHẬP KÍ TỰ ĐẶC BIỆT =====
test("Register with full name contains only special characters", async ({ page, registerPage, homePage }) => {
  const fullName = "!@#$%^&*()"; // full name with only special characters
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";  
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Chỉ nhập kí tự chữ');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI HỌ TÊN CHỈ NHẬP KHOẢNG TRẮNG =====
test("Register with full name contains only whitespace", async ({ page, registerPage, homePage }) => {
  const fullName = "     "; // full name with only whitespace
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI BỎ TRỐNG HỌ TÊN =====
test("Register with empty full name", async ({ page, registerPage, homePage }) => {
  const fullName = ""; // empty full name` 
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Tên không được để trống');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI HỌ TÊN CHỨA KHOẢNG TRẮNG Ở ĐẦU VÀ CUỐI =====
test("Register with full name contains leading and trailing whitespace", async ({ page, registerPage, homePage }) => {
  const fullName = "   Huỳnh Lê Việt Anh   "; // full name with leading and trailing whitespace
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI NHẬP MẬT KHẨU VỚI 1 KÝ TỰ =====
test("Register with password contains only 1 character", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "a"; // password with only 1 character
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Mật khẩu phải ít nhất 8 tự gồ');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI MẬT KHẨU HƠN 50 KÝ TỰ =====
test("Register with password more than 50 characters", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@Daibangvip123@Daibangvip123@Daibangvip123@Daibangvip123@"; // password with more than 50 characters
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI MẬT KHẨU SAI QUY ĐỊNH (KHÔNG VIẾT HOA ) =====
test("Register with password does not meet requirements (no uppercase letters)", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "daibangvip123@"; // password without uppercase letters
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901"; 
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('mật khẩu phải có dấu viết hoa');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI MẬT KHẨU SAI QUY ĐỊNH (CÓ VIẾT HOA NHƯNG KHÔNG CÓ KÍ TỰ ĐẶC BIỆT) =====
test("Register with password does not meet requirements (contains uppercase letters but no special characters)", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123"; // password with uppercase letters but no special characters
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901"; 
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Mật khẩu phải ít nhất 1 kí tự đặc biệt');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI MẬT KHẨU SAI QUY ĐỊNH (CÓ VIẾT HOA NHƯNG KHÔNG CÓ SỐ) =====
test("Register with password does not meet requirements (contains uppercase letters but no numbers)", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip@"; // password with uppercase letters but no numbers
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901"; 
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Mật khẩu phải ít nhất có số và kí tự đặc biệt');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI MẬT KHẨU SAI QUY ĐỊNH (CÓ VIẾT HOA NHƯNG KHÔNG CÓ SỐ VÀ KÍ TỰ ĐẶC BIỆT) =====
test("Register with password does not meet requirements (contains uppercase letters but no numbers and special characters)", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip"; // password with uppercase letters but no numbers and special characters
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901"; 
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);  
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Mật khẩu phải ít nhất có số và kí tự đặc biệt');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI (BỎ TRỐNG MẬT KHẨU) =====
test("Register with empty password", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = ""; // empty password
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";  
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('mật khẩu không được để trống');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI MẬT KHẨU CHỈ NHẬP KHOẢNG TRẮNG =====
test("Register with password contains only whitespace", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "     "; // password with only whitespace
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);  
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Mật khẩu không được để trống');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI MẬT KHẨU CHỈ NHẬP KÝ TỰ ĐẶC BIỆT =====
test("Register with password contains only special characters", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "!@#$%^&*()"; // password with only special characters
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Mật khẩu phải ít nhất 8 tự gồ');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI EMAIL ĐÃ TỒN TẠI =====
test("Register with existing email", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = "mquoc41@gmail.com"; // existing email
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03'); 
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Email đã tồn tại');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI EMAIL KHÔNG HỢP LỆ =====
test("Register with invalid email", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = "invalidemail"; // invalid email
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Email sai định dạng');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI EMAIL BỎ TRỐNG =====
test("Register with empty email", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = ""; // empty email
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password); 
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');  
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Email không được để trống');
  await expect(lblaccount).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI SỐ ĐIỆN THOẠI KHÔNG HỢP LỆ =====
test("Register with invalid phone number", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "invalidphone"; // invalid phone number  
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Số điện thoại chưa đúng định đạng');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI SỐ ĐIỆN THOẠI KHÔNG ĐỦ SỐ =====
test("Register with phone number less than 10 digits", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "034567890"; // phone number with less than 10 digits
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblInvalidPhone = await page.getByText('Số điện thoại chưa đúng định đạng');
  await expect(lblInvalidPhone).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI SỐ ĐIỆN THOẠI CHỨA KÝ TỰ KHÔNG PHẢI LÀ SỐ =====
test("Register with phone number contains non-numeric characters", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh"; 
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "vietanh"; // phone number contains non-numeric characters 
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblInvalidPhone = await page.getByText('Số điện thoại chưa đúng định');
  await expect(lblInvalidPhone).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI SỐ ĐIỆN THOẠI BỊ THỪA  SỐ =====
test("Register with phone number more than 10 digits", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh"; 
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "03456789012"; // phone number with more than 10 digits
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblInvalidPhone = await page.getByText('Số điện thoại chưa đúng định');
  await expect(lblInvalidPhone).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI SỐ ĐIỆN THOẠI BỎ TRỐNG =====
test("Register with empty phone number", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = ""; // empty phone number
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblInvalidPhone = await page.getByText('Số điện thoại không được để');
  await expect(lblInvalidPhone).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI SỐ ĐIỆN THOẠI CHỈ NHẬP KHOẢNG TRẮNG =====
test("Register with phone number contains only whitespace", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "     "; // phone number with only whitespace
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblInvalidPhone = await page.getByText('Số điện thoại chưa đúng định');
  await expect(lblInvalidPhone).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI SỐ ĐIỆN THOẠI CHỈ NHẬP KÝ TỰ ĐẶC BIỆT =====
test("Register with phone number contains only special characters", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh"; 
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "!@#$%^&*()";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblInvalidPhone = await page.getByText('Số điện thoại chưa đúng định');
  await expect(lblInvalidPhone).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP01 =====
test("Register with group code GP01", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP01');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP02 =====
test("Register with group code GP02", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP02');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP03 =====
test("Register with group code GP03", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP03');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP04 =====
test("Register with group code GP04", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP04');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP05 =====
test("Register with group code GP05", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP05');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP06 =====
test("Register with group code GP06", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP06');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP07 =====
test("Register with group code GP07", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP07');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP08 =====
test("Register with group code GP08", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP08');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP09 =====
test("Register with group code GP09", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP09');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
// ===== TEST ĐĂNG KÍ VỚI Mã Nhóm GP10 =====
test("Register with group code GP10", async ({ page, registerPage, homePage }) => {
  const fullName = "Huỳnh Lê Việt Anh";
  const password = "Daibangvip123@";
  const account = crypto.randomUUID().substring(0, 15);
  const email = `${crypto.randomUUID().substring(0, 15)}@gmail.com`;
  const phone = "0345678901";
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(email);
  await registerPage.enterPhone(phone);
  await registerPage.selectGroupForm('GP010');
  await registerPage.clickRegister();
  const lblaccount = await page.getByText('Đăng kí thành công');
  await expect(lblaccount).toBeVisible();
});
