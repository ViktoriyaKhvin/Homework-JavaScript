import { By, Locator, until, WebDriver } from "selenium-webdriver";
import { DEFAULT_WAITNG_TIME } from "./constants";
import { SELECTOR_TYPES } from "./types";

export class driverUtils {
    constructor(public driver: WebDriver) { };

    public async findElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator: Locator = By[selectorType](locatorString);
        return await this.waitForElementIsLocated(locator);
     }

    public async waitForElementIsLocated(locator: Locator) {
        return await this.driver.wait(until.elementLocated(locator), DEFAULT_WAITNG_TIME);
    }
}