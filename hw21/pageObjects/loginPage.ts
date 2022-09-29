import { WebDriver } from "selenium-webdriver";
import { SELECTOR_TYPES } from "../utils/types";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {constructor(protected driver: WebDriver) {
    super(driver);
}

public async getEmailField() {
    return await this.driverUtils.findElement(SELECTOR_TYPES.CSS, 'div.auth-input__wrapper input[type = text]');
}

public async fillEmailField(email: string) {
    await (await this.getEmailField()).sendKeys(email);
}

public async getPasswordField() {
    return await this.driverUtils.findElement(SELECTOR_TYPES.CSS, 'div.auth-input__wrapper input[type = password]');
}

public async fillPasswordField(password: string) {
    await (await this.getPasswordField()).sendKeys(password);
}

public async getSubmitButton() {
    return await this.driverUtils.findElement(SELECTOR_TYPES.CSS, 'div.auth-form__control button[type = submit]');
}

public async submitForm() {
    await (await this.getSubmitButton()).click();
}

public async getProtectionPopUpMessage() {
    return await this.driverUtils.findElement(SELECTOR_TYPES.CSS, 'div.auth-form__mediabox span');
}
}