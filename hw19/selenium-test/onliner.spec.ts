import { expect } from "chai";
import { By, until, Builder, Capabilities, Locator } from "selenium-webdriver"

const driver = new Builder()
     .withCapabilities(Capabilities.chrome())
     .build();
const baseUrl = "https://www.onliner.by/"
const defaultWaitingTime = 3000;
let pageUrl: string;

describe("Onliner selenium-tests", () => {

    before(async () => {
        await driver.manage().window().maximize();
    })

    beforeEach(async () => {
        await driver.get(baseUrl);
    })

it("The catalog page should open from the home page", async () => {
        const catalotButtonLocator: Locator = By.css(`a[href = "https://catalog.onliner.by"] span.b-main-navigation__text`);
        await driver.wait(until.elementsLocated(catalotButtonLocator), defaultWaitingTime);
        await driver.findElement(catalotButtonLocator).click();
        pageUrl = "https://catalog.onliner.by/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const catalogTitle = await driver.findElement(By.css(`a.catalog-navigation__bubble`))
        expect(await catalogTitle.getText()).to.be.deep.equal("Все суперцены!")
        })

it("Should navigate to the tasks page from main page", async () => {
        const tasksButtonLocator: Locator = By.xpath(`//a[@href = "https://s.onliner.by/tasks"]/span[contains(@class, "b-main-navigation__text")]`)
        await driver.wait(until.elementsLocated(tasksButtonLocator), defaultWaitingTime);
        await driver.findElement(tasksButtonLocator).click();
        pageUrl = "https://s.onliner.by/tasks";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const tasksPageTitle = await driver.findElement(By.css(`a[href= "/tasks"] span.project-navigation__sign`))
        expect(await tasksPageTitle.getText()).to.be.deep.equal("Заказы")
        })

it("Should navigate to the realt page from main page", async () => {
        const realtButtonLocator: Locator = By.css(`a[href = "https://r.onliner.by/pk"] span.b-main-navigation__text`)
        await driver.wait(until.elementsLocated(realtButtonLocator), defaultWaitingTime);
        await driver.findElement(realtButtonLocator).click();
        pageUrl = "https://r.onliner.by/pk/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const sellButton = await driver.findElement(By.css(`a[href="https://r.onliner.by/pk/"] span.project-navigation__sign`))
        expect(await sellButton.getText()).to.be.deep.equal("Продажа")
        })
   
it("Should navigate to the baraholka page from main page", async () => {
        const baraholkaButtonLocator: Locator = By.css(`a[href="https://baraholka.onliner.by/"] span.b-main-navigation__text`)
        await driver.wait(until.elementsLocated(baraholkaButtonLocator), defaultWaitingTime);
        await driver.findElement(baraholkaButtonLocator).click();
        pageUrl = "https://baraholka.onliner.by/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const baraholkaPageTitle = await driver.findElement(By.xpath(`//div[contains(@class, "b-mnforum-header-i")] //h1`))
        expect(await baraholkaPageTitle.getText()).to.be.deep.equal("Барахолка")
        })

it("Should show protection pop up while login with correct credentials", async () => {
        const loginButtonLocator: Locator = By.className("auth-bar__item auth-bar__item--text")
        await driver.wait(until.elementsLocated(loginButtonLocator), defaultWaitingTime)
        await driver.findElement(loginButtonLocator).click();
        const emailFieldLocator: Locator = By.css("div.auth-input__wrapper input[type = text]")
        await driver.wait(until.elementsLocated(emailFieldLocator), defaultWaitingTime)
        await driver.findElement(emailFieldLocator).click();
        await driver.findElement(emailFieldLocator).sendKeys("test12051@mail.ru");
        const passwordFieldLocator: Locator = By.css("div.auth-input__wrapper input[type = password]")
        await driver.findElement(passwordFieldLocator).click();
        await driver.findElement(passwordFieldLocator).sendKeys("test12051");
        const submitButton = await driver.findElement(By.css("div.auth-form__control button[type = submit]"));
        await submitButton.click();
        const protectionPopUpLocator: Locator = By.className("auth-form__mediabox");
        await driver.wait(until.elementsLocated(protectionPopUpLocator), defaultWaitingTime);
        const element = await driver.findElement(By.css("div.auth-form__mediabox span"));
        expect(await element.getText()).to.have.string(`Давайте проверим, вы робот или нет`);
        })
        
after(async () => {
        await driver.quit();
        })
})