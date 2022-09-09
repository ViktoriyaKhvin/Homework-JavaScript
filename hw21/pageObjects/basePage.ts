import { WebDriver } from "selenium-webdriver";
import { driverUtils } from "../utils/driverUtils";

export class BasePage {
    protected driverUtils: driverUtils

    constructor(protected driver: WebDriver) {
        this.driverUtils = new driverUtils(driver);
    }

    public async maximizeWindow() {
        await this.driver.manage().window().maximize();
    }

    public async getPageTitle() {
        return await this.driver.getTitle();
    }

    public async quitBrowser() {
        await this.driver.quit();
    }
}
