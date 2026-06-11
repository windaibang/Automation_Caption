import { test, expect } from "../../fixtures/page-fixture.ts";

// 1. Navigate to Blog Page - Điều hướng đến trang Blog
test("Navigate to Icon Logo", async ({ page, homePage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    const blogTitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(blogTitle).toBeVisible();
});

// 2. Navigate to Blog with login account - Điều hướng đến trang Blog với tài khoản đã đăng nhập
test("Navigate to Blog with login account", async ({ page, homePage, loginPage }) => {
    const account = "vietanh1122"; // account name
    const password = "Daibangvip123@"; // password
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().navigateToLogin();
    await loginPage.login(account, password);
    await homePage.getNavbarComponent().clickBlogBtn();
    const blogTitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(blogTitle).toBeVisible();
});

// 3. Navigate to Blog and click on FE category - Điều hướng đến trang Blog và click vào chuyên mục FE
test("Navigate to Blog and click on FE category", async ({ page, homePage, blogPage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    await blogPage.clickFE();
    const Blogtitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(Blogtitle).toBeVisible();
});

// 4. Navigate to Blog and click on UI category - Điều hướng đến trang Blog và click vào chuyên mục UI
test("Navigate to Blog and click on UI category", async ({ page, homePage, blogPage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    await blogPage.clickUI();
    const Blogtitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(Blogtitle).toBeVisible();
});

// 5. Navigate to Blog and click on BE category - Điều hướng đến trang Blog và click vào chuyên mục BE
test("Navigate to Blog and click on BE category", async ({ page, homePage, blogPage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    await blogPage.clickBE();
    const Blogtitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(Blogtitle).toBeVisible();
});

// 6. Navigate to Blog and click on Library category - Điều hướng đến trang Blog và click vào chuyên mục Thư viện
test("Navigate to Blog and click on Library category", async ({ page, homePage, blogPage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    await blogPage.clickLibrary();
    const Blogtitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(Blogtitle).toBeVisible();
});

// 7. Navigate to Blog and click on Share category - Điều hướng đến trang Blog và click vào chuyên mục Chia sẻ người trong nghề
test("Navigate to Blog and click on Share category", async ({ page, homePage, blogPage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    await blogPage.clickShare();
    const Blogtitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(Blogtitle).toBeVisible();
});

// 8. Navigate to Blog and click on IT category - Điều hướng đến trang Blog và click vào chuyên mục Châm ngôn IT
test("Navigate to Blog and click on IT category", async ({ page, homePage, blogPage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    await blogPage.clickIT();
    const Blogtitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(Blogtitle).toBeVisible();
});

// 9. Navigate to Blog and click on Other category - Điều hướng đến trang Blog và click vào chuyên mục Chủ đề khác
test("Navigate to Blog and click on Other category", async ({ page, homePage, blogPage }) => {
    await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
    await homePage.getNavbarComponent().clickBlogBtn();
    await blogPage.clickOther();
    const Blogtitle = await page.getByRole('heading', { name: 'Blog' });
    await expect(Blogtitle).toBeVisible();
});
