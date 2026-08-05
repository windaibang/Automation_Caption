import { test, expect } from "../../fixtures/page-fixture.ts";
import type { HomePage } from "../../pages/HomePage.ts";
import {
  FOOTER_TEST_CASES,
  FOOTER_URL,
} from "../../constants/FooterConstants.ts";

test.beforeEach(async ({ page }) => {
  await page.goto(FOOTER_URL, { waitUntil: "domcontentloaded" });
});

async function submitFooterConsultingForm(
  homePage: HomePage,
  email: string,
  fullname: string,
  sdt: string,
) {
  const footer = homePage.getFooterComponent();
  await footer.enterEmailFooter(email);
  await footer.enterFullnameFooter(fullname);
  await footer.enterSDTFooter(sdt);
  await footer.clickBtnRegisterFooter();
}

for (const testCase of FOOTER_TEST_CASES) {
  test(testCase.title, async ({ page, homePage }) => {
    await submitFooterConsultingForm(
      homePage,
      testCase.email,
      testCase.fullname,
      testCase.sdt,
    );
    await expect(page.getByText(testCase.expected)).toBeVisible();
  });
}
