import { WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants"
import { NAVIGATION_ITEMS, SELECTOR_TYPES } from "../utils/types";

export class HomePage extends BasePage {
    protected url: string;

    constructor(driver: WebDriver) {
        super(driver);
        this.url = BASE_URL;
    }

    public async visitPage() {
        return await this.driver.get(this.url);
    }

    public async getNavigationItemByInnerLink(link: NAVIGATION_ITEMS) {
        return await this.driverUtils.findElement(SELECTOR_TYPES.CSS, `a[href = "${link}"] span.b-main-navigation__text`)
    }

    public async clickOnNavigationItemByInnerLink(item: NAVIGATION_ITEMS) {
        await (await this.getNavigationItemByInnerLink(item)).click();
    }

     public async getLoginButton() {
        return await this.driverUtils.findElement(SELECTOR_TYPES.CLASS_NAME, 'auth-bar__item auth-bar__item--text');
    }

    public async clickLoginButton() {
        await (await this.getLoginButton()).click();
    }

    public async getPageHeaderByLocator(selectorType: SELECTOR_TYPES, locator: string) {
        return await this.driverUtils.findElement(selectorType, locator);
    }
}