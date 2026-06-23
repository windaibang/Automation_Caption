import { test, expect } from "../../fixtures/page-fixture.ts";


test("Đăng kí tư vấn với đầy đủ thông tin", async ({ page, homePage, loginPage, }) => {
  const email = "vietanh1122"; // account name
  const fullname = "Daibangvip123@"; // password
  const SDT = "0347631185";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getFooterComponent().enterEmailFooter(email);
  await homePage.getFooterComponent().enterFullnameFooter(fullname);
  await homePage.getFooterComponent().enterSDTFooter(SDT);
  await homePage.getFooterComponent().clickBtnRegisterFooter();
});


