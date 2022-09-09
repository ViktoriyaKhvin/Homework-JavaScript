import { WebDriver } from "selenium-webdriver";
import { PAGES } from "../utils/types";
import { HomePage } from "./homePage";
import { LoginPage } from "./loginPage";

export class PageFactory {
    constructor() { }

    static getPage(driver: WebDriver, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(driver);
            case PAGES.LOGIN:
                return new LoginPage(driver);
            default:
                return new HomePage(driver);
        }
    }
}
