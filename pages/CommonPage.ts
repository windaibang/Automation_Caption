import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.ts";
import { NavbarComponent } from "./components/NavbarComponent.ts";
import { FooterComponent } from "./components/FooterComponent.ts";

export class CommonPage extends BasePage {
  private navbarComponent: NavbarComponent;
  private footerComponent: FooterComponent;

  constructor(page: Page) {
    super(page);
    this.navbarComponent = new NavbarComponent(page);
    this.footerComponent = new FooterComponent(page);
  }

  //phương thức: các hành động chung cho tất cả các trang
  getNavbarComponent(): NavbarComponent {
    return this.navbarComponent;
  }
  getFooterComponent(): FooterComponent{
    return this.footerComponent;
  }

}