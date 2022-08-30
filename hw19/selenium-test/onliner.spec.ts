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

it("Main page should be displayed when the user clicks on the logo of the site", async function () {
        await driver.findElement(By.className('b-top-logo')).click();
        await driver.wait(until.urlContains(baseUrl), defaultWaitingTime);
    });    

it("The transition from the home page to the flea market page should be carried out", async () => {
        const baraholkaButtonLocator: Locator = By.css(`a[href="https://baraholka.onliner.by/"] span.b-main-navigation__text`)
        await driver.wait(until.elementsLocated(baraholkaButtonLocator), defaultWaitingTime);
        await driver.findElement(baraholkaButtonLocator).click();
        pageUrl = "https://baraholka.onliner.by/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const baraholkaPageTitle = await driver.findElement(By.xpath(`//div[contains(@class, "b-mnforum-header-i")] //h1`))
        expect(await baraholkaPageTitle.getText()).to.be.deep.equal("Барахолка")
        })   

it("There should be a transition from the home page to the realt page", async () => {
        const realtButtonLocator: Locator = By.css(`a[href = "https://r.onliner.by/pk"] span.b-main-navigation__text`)
        await driver.wait(until.elementsLocated(realtButtonLocator), defaultWaitingTime);
        await driver.findElement(realtButtonLocator).click();
        pageUrl = "https://r.onliner.by/pk/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const sellButton = await driver.findElement(By.css(`a[href="https://r.onliner.by/pk/"] span.project-navigation__sign`))
        expect(await sellButton.getText()).to.be.deep.equal("Продажа")
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

it("From the main page should go to the tasks page ", async () => {
        const tasksButtonLocator: Locator = By.xpath(`//a[@href = "https://s.onliner.by/tasks"]/span[contains(@class, "b-main-navigation__text")]`)
        await driver.wait(until.elementsLocated(tasksButtonLocator), defaultWaitingTime);
        await driver.findElement(tasksButtonLocator).click();
        pageUrl = "https://s.onliner.by/tasks";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const tasksPageTitle = await driver.findElement(By.css(`a[href= "/tasks"] span.project-navigation__sign`))
        expect(await tasksPageTitle.getText()).to.be.deep.equal("Заказы")
        })

after(async () => {
        await driver.quit();
        })
})