import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.ts";
import { NavbarComponent } from "./components/NavbarComponent.ts";

export class CommonPage extends BasePage {
  private navbarComponent: NavbarComponent;

  constructor(page: Page) {
    super(page);
    this.navbarComponent = new NavbarComponent(page);
  }

  //phương thức: các hành động chung cho tất cả các trang
  getNavbarComponent(): NavbarComponent {
    return this.navbarComponent;
  }
}