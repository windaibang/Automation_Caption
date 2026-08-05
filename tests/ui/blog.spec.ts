import { test, expect } from "../../fixtures/page-fixture.ts";

// 1. Navigate to Blog Page - Điều hướng đến trang Blog
test("Navigate to Icon Logo", async ({ page, homePage }) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  const blogTitle = await page.getByRole("heading", { name: "Blog" });
  await expect(blogTitle).toBeVisible();
});

// 2. Navigate to Blog with login account - Điều hướng đến trang Blog với tài khoản đã đăng nhập
test("Navigate to Blog with login account", async ({
  page,
  homePage,
  loginPage,
}) => {
  const account = "vietanh1122"; // account name
  const password = "Daibangvip123@"; // password
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();
  await homePage.getNavbarComponent().clickBlogBtn();
  const blogTitle = await page.getByRole("heading", { name: "Blog" });
  await expect(blogTitle).toBeVisible();
});

// 3. Navigate to Blog and click on FE category - Điều hướng đến trang Blog và click vào chuyên mục FE
test("Navigate to Blog and click on FE category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickFE();
  const Blogtitle = await page.getByRole("heading", { name: "FE" });
  await expect(Blogtitle).toBeVisible();
});

// 4. Navigate to Blog and click on UI category - Điều hướng đến trang Blog và click vào chuyên mục UI
test("Navigate to Blog and click on UI category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickUI();
  const Blogtitle = await page.getByRole("heading", { name: "UI" });
  await expect(Blogtitle).toBeVisible();
});

// 5. Navigate to Blog and click on BE category - Điều hướng đến trang Blog và click vào chuyên mục BE
test("Navigate to Blog and click on BE category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickBE();
  const Blogtitle = await page.getByRole("heading", { name: "BE" });
  await expect(Blogtitle).toBeVisible();
});

// 6. Navigate to Blog and click on Library category - Điều hướng đến trang Blog và click vào chuyên mục Thư viện
test("Navigate to Blog and click on Library category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickLibrary();
  const Blogtitle = await page.getByRole("heading", { name: "Library" });
  await expect(Blogtitle).toBeVisible();
});

// 7. Navigate to Blog and click on Share category - Điều hướng đến trang Blog và click vào chuyên mục Chia sẻ người trong nghề
test("Navigate to Blog and click on Share category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickShare();
  const Blogtitle = await page.getByRole("heading", { name: "Share" });
  await expect(Blogtitle).toBeVisible();
});

// 8. Navigate to Blog and click on IT category - Điều hướng đến trang Blog và click vào chuyên mục Châm ngôn IT
test("Navigate to Blog and click on IT category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickIT();
  const Blogtitle = await page.getByRole("heading", { name: "IT" });
  await expect(Blogtitle).toBeVisible();
});

// 9. Navigate to Blog and click on Other category - Điều hướng đến trang Blog và click vào chuyên mục Chủ đề khác
test("Navigate to Blog and click on Other category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickOther();
  const Blogtitle = await page.getByRole("heading", { name: "Other" });
  await expect(Blogtitle).toBeVisible();
});

//10 Navigate to Blog with account curently registerd - Điều hướng đến trang Blog với tài khoản vừa đăng ký
test("Navigate to Blog with account curently registerd", async ({
  page,homePage,registerPage,loginPage,}) => {
  const account = crypto.randomUUID().substring(0, 15); // random name
  const password = "Daibangvip123@"; // password
  const fullName = "Huỳnh Lê Việt Anh"; // full name
  await page.goto("https://demo2.cybersoft.edu.vn", {waitUntil: "domcontentloaded",
});
  homePage.getNavbarComponent().navigateToLogin();
  await registerPage.navigateToRegisterForm();
  await registerPage.enterAccount(account);
  await registerPage.enterFullName(fullName);
  // 22 test: Đăng nhập rồi bấm nhanh nhiều chuyên mục (FE -> UI -> BE)
  await registerPage.enterPassword(password);
  await registerPage.enterEmail(`${account}@gmail.com`);
  await registerPage.enterPhone("0345678901");
  await registerPage.selectGroupForm("GP03");
  await registerPage.clickRegister();
  await loginPage.navigateToLoginForm();
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();
  await homePage.getNavbarComponent().clickBlogBtn();
  const blogTitle = await page.getByRole("heading", { name: "Blog" });
  await expect(blogTitle).toBeVisible();
});
//11 test khả năng truy cập vào mục Xem thêm thời gian và động lực
test("Navigate to look more time and driving force ", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  // 23 test: Đăng nhập, vào Blog, mở nhiều bài 'Xem thêm' lần lượt và quay lại
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonTime();
  const Blogtitle = await page.getByRole("heading", { name: "Time" });
  await expect(Blogtitle).toBeVisible();
});
//12 test khả năng truy cập vào mục TailWind css và seting cơ bản
test("Navigate to ability click to TailWind css ", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonTailWind();
  const Blogtitle = await page.getByRole("heading", { name: "TailWind CSS" });
  await expect(Blogtitle).toBeVisible();
});
//13 test khả năng truy cập vào cấu trúc cơ bản HTML
test("Navigate to ability click to HTML ", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
    // 24 test: Mở Blog khi chưa đăng nhập và bấm một vài nút 'Xem thêm'
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonHTML();
  const Blogtitle = await page.getByRole("heading", { name: "HTML" });
  await expect(Blogtitle).toBeVisible();
});
//14 test khả năng truy cập vào Material
test("Navigate to ability click to Material ", async ({
  page,
  homePage,
  blogPage,
  // 25 test: Đăng nhập, vào Blog, bấm TypeScript rồi JavaScript và mở lại Blog
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonMaterial();
  const Blogtitle = await page.getByRole("heading", { name: "Material" });
  await expect(Blogtitle).toBeVisible();
});
//15 test khả năng truy cập vào component
test("Navigate to ability click to component ", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonComponent();
  const Blogtitle = await page.getByRole("heading", { name: "Component" });
  await expect(Blogtitle).toBeVisible();
});
//16 test khả năng truy cập vào Material UI
test("Navigate to ability click to MaterialUI ", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonMaterialUI();
  const Blogtitle = await page.getByRole("heading", { name: "Material UI" });
  await expect(Blogtitle).toBeVisible();
});
// 17 test khả năng truy cập vào Javascript
test("Navigate to ability click to Javascript ", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonJavaScipt();
  const Blogtitle = await page.getByRole("heading", { name: "Javascript" });
  await expect(Blogtitle).toBeVisible();
});
// 18 test khả năng truy cập vào trang TypeScript
test("Navigate to ability click to TypeScipt ", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickButtonTypeScript();
  const Blogtitle = await page.getByRole("heading", { name: "TypeScript" });
  await expect(Blogtitle).toBeVisible();
});

// 19 test: mở Blog, sau đó đăng nhập và click Blog lần nữa
test("Open Blog then login and click Blog again", async ({
  page,
  homePage,
  loginPage,
}) => {
  const account = "vietanh1122";
  const password = "Daibangvip123@";
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });

  await homePage.getNavbarComponent().clickBlogBtn();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  await expect(page).toHaveURL(/blog/i);

  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  await homePage.getNavbarComponent().clickBlogBtn();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  await expect(page).toHaveURL(/blog/i);
});

// 20 test: đăng nhập, vào Blog, click chuyên mục FE rồi click Blog lại
test("Login then navigate to Blog, click FE category and reopen Blog", async ({page,homePage,blogPage,loginPage,}) => {
  const account = "vietanh1122";
  const password = "Daibangvip123@";
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });

  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickFE();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  await expect(page).toHaveURL(/blog/i);

  await homePage.getNavbarComponent().clickBlogBtn();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  await expect(page).toHaveURL(/blog/i);
});
// 21. Navigate to Blog and click on FE category - Điều hướng đến trang Blog và click vào chuyên mục FE với tài khoản đã đăng nhập
test("Navigate to ability click to FE with login accoung ", async ({
  page,
  homePage,
  blogPage,
  loginPage,
}) => {
  const account = "vietanh1122"; // account name
  const password = "Daibangvip123@"; // password
  await page.goto("https://demo2.cybersoft.edu.vn/", {
    waitUntil: "domcontentloaded",
  });
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();
  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickFE();
  const Blogtitle = await page.getByRole("heading", { name: "FE" });
  await expect(Blogtitle).toBeVisible();
});
// 22. Click all blog categories sequentially
test("Navigate to Blog and click all categories sequentially", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await blogPage.clickFE();
  const FEtitle = await page.getByRole("heading", { name: "FE" });
  await expect(FEtitle).toBeVisible();

  await blogPage.clickUI();
  const UItitle = await page.getByRole("heading", { name: "UI" });
  await expect(UItitle).toBeVisible();

  await blogPage.clickBE();
  const BEtitle = await page.getByRole("heading", { name: "BE" });
  await expect(BEtitle).toBeVisible();

  await blogPage.clickLibrary();
  const Librarytitle = await page.getByRole("heading", { name: "Library" });
  await expect(Librarytitle).toBeVisible();

  await blogPage.clickShare();
  const Sharetitle = await page.getByRole("heading", { name: "Share" });
  await expect(Sharetitle).toBeVisible();

  await blogPage.clickIT();
  const ITtitle = await page.getByRole("heading", { name: "IT" });
  await expect(ITtitle).toBeVisible();

  await blogPage.clickOther();
  const Othertitle = await page.getByRole("heading", { name: "Other" });
  await expect(Othertitle).toBeVisible();
});

// 23. Click multiple read more buttons in a row
test("Navigate to Blog and click multiple read more buttons sequentially", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await blogPage.clickButtonTime();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await page.goBack();
  await blogPage.clickButtonTailWind();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await page.goBack();
  await blogPage.clickButtonHTML();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

// 24. Open Blog, refresh page and stay on Blog
test("Open Blog then refresh page and stay on Blog", async ({ page, homePage }) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

// 25. Open Blog, click FE then reopen Blog
test("Navigate to Blog, click FE then reopen Blog", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await blogPage.clickFE();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await homePage.getNavbarComponent().clickBlogBtn();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

// 26. Login then click Blog categories FE + Share + Other
test("Login then navigate to Blog and click FE, Share and Other", async ({
  page,
  homePage,
  blogPage,
  loginPage,
}) => {
  const account = "vietanh1122";
  const password = "Daibangvip123@";

  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().navigateToLogin();
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();

  await homePage.getNavbarComponent().clickBlogBtn();
  await blogPage.clickFE();
  await blogPage.clickShare();
  await blogPage.clickOther();

  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

// 27. Click UI and BE category in same test
test("Navigate to Blog and click UI then BE category", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await blogPage.clickUI();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await blogPage.clickBE();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

// 28. Click Material UI then JavaScript read more buttons
test("Navigate to Blog and click MaterialUI then JavaScript", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await blogPage.clickButtonMaterialUI();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await page.goBack();
  await blogPage.clickButtonJavaScipt();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

// 29. Click TailWind, Material and Component read more in a row
test("Navigate to Blog and click TailWind, Material and Component cards", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await blogPage.clickButtonTailWind();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await page.goBack();
  await blogPage.clickButtonMaterial();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await page.goBack();
  await blogPage.clickButtonComponent();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

// 30. Navigate to Blog and click TypeScript after HTML
test("Navigate to Blog and click HTML then TypeScript", async ({
  page,
  homePage,
  blogPage,
}) => {
  await page.goto("https://demo2.cybersoft.edu.vn/", { waitUntil: "domcontentloaded" });
  await homePage.getNavbarComponent().clickBlogBtn();

  await blogPage.clickButtonHTML();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();

  await page.goBack();
  await blogPage.clickButtonTypeScript();
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});