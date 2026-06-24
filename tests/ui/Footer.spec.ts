import { test, expect } from "../../fixtures/page-fixture.ts";

// Happy case - đầy đủ thông tin hợp lệ
test("Đăng kí tư vấn với đầy đủ thông tin", async ({ page, homePage }) => {
  const email = "vietanh1122";
  const fullname = "Daibangvip123@";
  const SDT = "0347631185";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email rỗng
test("Đăng kí tư vấn khi trường email rỗng", async ({ page, homePage }) => {
  const email = "";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên rỗng
test("Đăng kí tư vấn khi trường tên rỗng", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Số điện thoại rỗng
test("Đăng kí tư vấn khi trường số điện thoại rỗng", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tất cả trường rỗng
test("Đăng kí tư vấn khi tất cả các trường đều rỗng", async ({ page, homePage }) => {
  const email = "";
  const fullname = "";
  const SDT = "";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email không hợp lệ (không có @)
test("Đăng kí tư vấn với email không hợp lệ (không có @)", async ({ page, homePage }) => {
  const email = "invalidemail.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email không hợp lệ (thiếu domain)
test("Đăng kí tư vấn với email không hợp lệ (thiếu domain)", async ({ page, homePage }) => {
  const email = "test@";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email hợp lệ với dấu chấm
test("Đăng kí tư vấn với email hợp lệ có dấu chấm", async ({ page, homePage }) => {
  const email = "test.user123@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Số điện thoại quá ngắn
test("Đăng kí tư vấn với số điện thoại quá ngắn", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "012";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Số điện thoại quá dài
test("Đăng kí tư vấn với số điện thoại quá dài", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "091234567890123456789";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Số điện thoại không phải số
test("Đăng kí tư vấn với số điện thoại chứa chữ cái", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "09ABC345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên rất dài
test("Đăng kí tư vấn với tên rất dài", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A Nguyen Van B Nguyen Van C Nguyen Van D Nguyen Van E Nguyen Van F";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên chứa số
test("Đăng kí tư vấn với tên chứa số", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A 12345";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên chứa ký tự đặc biệt
test("Đăng kí tư vấn với tên chứa ký tự đặc biệt", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A @#$%";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email rất dài
test("Đăng kí tư vấn với email rất dài", async ({ page, homePage }) => {
  const email = "verylongemailaddresswithlotofcharacters123456789@verylongdomainname.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email với dấu cộng
test("Đăng kí tư vấn với email hợp lệ chứa dấu cộng", async ({ page, homePage }) => {
  const email = "test+tag@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Số điện thoại bắt đầu bằng 0
test("Đăng kí tư vấn với số điện thoại hợp lệ bắt đầu bằng 0", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0987654321";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên ngắn (1 ký tự)
test("Đăng kí tư vấn với tên chỉ có 1 ký tự", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email chứa khoảng trắng
test("Đăng kí tư vấn với email chứa khoảng trắng", async ({ page, homePage }) => {
  const email = "test @example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên chứa khoảng trắng ở đầu
test("Đăng kí tư vấn với tên chứa khoảng trắng ở đầu", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "  Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Số điện thoại chứa dấu gạch ngang
test("Đăng kí tư vấn với số điện thoại chứa dấu gạch ngang", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "09-1234-5678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// ===== KIỂM TRA ĐỘ DÀI < 8 KÝ TỰ =====

// Test case - Email dưới 8 ký tự
test("Đăng kí tư vấn với email dưới 8 ký tự", async ({ page, homePage }) => {
  const email = "a@b.co";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên dưới 8 ký tự
test("Đăng kí tư vấn với tên dưới 8 ký tự", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nam";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT dưới 8 ký tự (6 chữ số)
test("Đăng kí tư vấn với SDT dưới 8 ký tự", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "091234";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email và Tên dưới 8 ký tự
test("Đăng kí tư vấn với email và tên dưới 8 ký tự", async ({ page, homePage }) => {
  const email = "a@b.io";
  const fullname = "Nam";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tất cả trường dưới 8 ký tự
test("Đăng kí tư vấn với tất cả trường dưới 8 ký tự", async ({ page, homePage }) => {
  const email = "a@b.co";
  const fullname = "Nam";
  const SDT = "091234";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// ===== KIỂM TRA ĐỘ DÀI > 10 KÝ TỰ =====

// Test case - Email dài hơn 10 ký tự
test("Đăng kí tư vấn với email dài hơn 10 ký tự", async ({ page, homePage }) => {
  const email = "longemail123@verylongdomain.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tên dài hơn 10 ký tự
test("Đăng kí tư vấn với tên dài hơn 10 ký tự", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van Anh Dung";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT dài hơn 10 ký tự (11 chữ số)
test("Đăng kí tư vấn với SDT dài hơn 10 ký tự", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "09123456789";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Email và Tên dài hơn 10 ký tự
test("Đăng kí tư vấn với email và tên dài hơn 10 ký tự", async ({ page, homePage }) => {
  const email = "longemail@verylongdomain.com";
  const fullname = "Nguyen Van Anh Dung";
  const SDT = "0912345678";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - Tất cả trường dài hơn 10 ký tự
test("Đăng kí tư vấn với tất cả trường dài hơn 10 ký tự", async ({ page, homePage }) => {
  const email = "longemail@verylongdomain.com";
  const fullname = "Nguyen Van Anh Dung";
  const SDT = "09123456789";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// ===== KIỂM TRA SDT CHO PHÉP NHẬP CHỮ CÁI =====

// Test case - SDT chỉ chứa chữ cái
test("Đăng kí tư vấn với SDT chỉ chứa chữ cái", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "abcdefghij";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT hỗn hợp chữ và số
test("Đăng kí tư vấn với SDT hỗn hợp chữ và số", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912ABC345";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa chữ cái in hoa
test("Đăng kí tư vấn với SDT chứa chữ cái in hoa", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912ABC67890";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// ===== KIỂM TRA SDT CHO PHÉP KÝ TỰ ĐẶC BIỆT =====

// Test case - SDT chứa ký tự @ 
test("Đăng kí tư vấn với SDT chứa ký tự @", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912@34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự #
test("Đăng kí tư vấn với SDT chứa ký tự #", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912#34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự $
test("Đăng kí tư vấn với SDT chứa ký tự $", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912$34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự %
test("Đăng kí tư vấn với SDT chứa ký tự %", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912%34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự ^
test("Đăng kí tư vấn với SDT chứa ký tự ^", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912^34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự &
test("Đăng kí tư vấn với SDT chứa ký tự &", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912&34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự *
test("Đăng kí tư vấn với SDT chứa ký tự *", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912*34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự (
test("Đăng kí tư vấn với SDT chứa ký tự (", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912(34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự )
test("Đăng kí tư vấn với SDT chứa ký tự )", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912)34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự _
test("Đăng kí tư vấn với SDT chứa ký tự _", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912_34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự +
test("Đăng kí tư vấn với SDT chứa ký tự +", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912+34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa ký tự =
test("Đăng kí tư vấn với SDT chứa ký tự =", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912=34567";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});

// Test case - SDT chứa nhiều ký tự đặc biệt
test("Đăng kí tư vấn với SDT chứa nhiều ký tự đặc biệt", async ({ page, homePage }) => {
  const email = "test@example.com";
  const fullname = "Nguyen Van A";
  const SDT = "0912@#$%^&";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});


