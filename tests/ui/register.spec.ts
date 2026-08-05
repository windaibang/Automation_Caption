import { test, expect } from "../../fixtures/page-fixture.ts";
import type { Page } from "@playwright/test";
import type { HomePage } from "../../pages/HomePage.ts";
import {createRegisterData,submitRegisterWithGroup,} from "../../pages/REGISTERPAGE/RegisterPage.ts";
async function openRegisterScreen(page: Page, homePage: HomePage) {await page.goto("https://demo2.cybersoft.edu.vn", {waitUntil: "domcontentloaded",});
  await homePage.getNavbarComponent().navigateToLogin();
}

test.beforeEach(async ({ page, homePage }) => {
  await openRegisterScreen(page, homePage);
});

// ===== TEST CASE ĐĂNG KÍ THÀNH CÔNG =====
test("TC10-Register test", async ({ page, registerPage }) => {
  const data = createRegisterData();
  await submitRegisterWithGroup(registerPage, data, "GP03");
  await expect(page.getByText("Đăng kí thành công")).toBeVisible();
});

// ===== TEST CASE LỖI TÀI KHOẢN =====
test("TC11-Register fails when account field more 16 characters", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData({ account: "aaaaaaaaaaaaaaaaaaaaaaaaaa" });
  await submitRegisterWithGroup(registerPage, data, "GP03");
  await expect(page.getByText("Tài khoản quá 16 kí tự")).toBeVisible();
});

test("TC12-Register fails when account is too short", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData({ account: "a" });
  await submitRegisterWithGroup(registerPage, data, "GP03");
  await expect(page.getByText("Tài khoản quá ít kí tự")).toBeVisible();
});

test("TC13-Register fails with empty account", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData({ account: "" });
  await submitRegisterWithGroup(registerPage, data, "GP03");
  await expect(page.getByText("Tài khoản không được để trống")).toBeVisible();
});

// ===== TEST CASE LỖI HỌ TÊN =====
test("TC14-Register with full name more than 50 characters", async ({page,registerPage,}) => {
const data = createRegisterData();
await submitRegisterWithGroup(
    registerPage,
    {
      ...data,
      fullName:
        "Huỳnh Lê Việt Anh Huỳnh Lê Việt Anh Huỳnh Lê Việt Anhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    "GP03",
  );

  await expect(page.getByText("Đăng kí không thành công")).toBeVisible();
});

test("TC15-Register with full name contains only numbers", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, fullName: "1234567890" },
    "GP03",
  );

  await expect(page.getByText("Chỉ nhập kí tự chữ")).toBeVisible();
});

test("TC16-Register with empty full name", async ({ page, registerPage }) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, fullName: "" },
    "GP03",
  );

  await expect(page.getByText("Tên không được để trống")).toBeVisible();
});

// ===== TEST CASE LỖI MẬT KHẨU =====
test("TC17-Register with password contains only 1 character", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, password: "a" },
    "GP03",
  );

  await expect(page.getByText("Mật khẩu phải ít nhất 8 tự gồ")).toBeVisible();
});

test("TC18-Register with password more than 50 characters", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    {
      ...data,
      password:
        "Daibangvip123@Daibangvip123@Daibangvip123@Daibangvip123@Daibangvip123@",
    },
    "GP03",
  );

  await expect(page.getByText("Đăng kí thành công")).toBeVisible();
});

test("TC19-Register with password does not meet requirements (no uppercase letters)", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, password: "daibangvip123@" },
    "GP03",
  );

  await expect(page.getByText("mật khẩu phải có dấu viết hoa")).toBeVisible();
});

test("TC20-Register with password does not meet requirements (contains uppercase letters but no special characters)", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, password: "Daibangvip123" },
    "GP03",
  );

  await expect(
    page.getByText("Mật khẩu phải ít nhất 1 kí tự đặc biệt"),
  ).toBeVisible();
});

test("TC21-Register with password does not meet requirements (contains uppercase letters but no numbers)", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, password: "Daibangvip@" },
    "GP03",
  );

  await expect(
    page.getByText("Mật khẩu phải ít nhất có số và kí tự đặc biệt"),
  ).toBeVisible();
});

test("TC22-Register with password does not meet requirements (contains uppercase letters but no numbers and special characters)", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, password: "Daibangvip" },
    "GP03",
  );

  await expect(
    page.getByText("Mật khẩu phải ít nhất có số và kí tự đặc biệt"),
  ).toBeVisible();
});

test("TC23-Register with empty password", async ({ page, registerPage }) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, password: "" },
    "GP03",
  );

  await expect(page.getByText("mật khẩu không được để trống")).toBeVisible();
});

test("TC24-Register with password contains only whitespace", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, password: "     " },
    "GP03",
  );

  await expect(page.getByText("Mật khẩu không được để trống")).toBeVisible();
});

// ===== TEST CASE LỖI EMAIL =====
test("TC25-Register with existing email", async ({ page, registerPage }) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, email: "mquoc41@gmail.com" },
    "GP03",
  );

  await expect(page.getByText("Email đã tồn tại")).toBeVisible();
});

test("TC26-Register with invalid email", async ({ page, registerPage }) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, email: "invalidemail" },
    "GP03",
  );

  await expect(page.getByText("Email sai định dạng")).toBeVisible();
});

test("TC27-Register with empty email", async ({ page, registerPage }) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(registerPage, { ...data, email: "" }, "GP03");

  await expect(page.getByText("Email không được để trống")).toBeVisible();
});

// ===== TEST CASE LỖI SỐ ĐIỆN THOẠI =====
test("TC28-Register with invalid phone number", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(
    registerPage,
    { ...data, phone: "invalidphone" },
    "GP03",
  );

  await expect(
    page.getByText("Số điện thoại chưa đúng định đạng"),
  ).toBeVisible();
});

test("TC29-Register with empty phone number", async ({
  page,
  registerPage,
}) => {
  const data = createRegisterData();

  await submitRegisterWithGroup(registerPage, { ...data, phone: "" }, "GP03");

  await expect(page.getByText("Số điện thoại không được để")).toBeVisible();
});

// ===== TEST ĐĂNG KÍ VỚI MÃ NHÓM =====
for (const group of ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP010",]) {
  test(`TC${group === "GP01" ? "30" : group === "GP02" ? "31" : group === "GP03" ? "32" : group === "GP04" ? "33" : group === "GP05" ? "34" : group === "GP06" ? "35" : group === "GP07" ? "36" : group === "GP08" ? "37" : group === "GP09" ? "38" : "39"}-Register with group code ${group}`, async ({ page,
registerPage,
  }) => {
    const data = createRegisterData();

    await submitRegisterWithGroup(registerPage, data, group);

    await expect(page.getByText("Đăng kí thành công")).toBeVisible();
  });
}
