import { expect } from "chai";
import { By, until, Builder, Capabilities, Locator } from "selenium-webdriver"

const driver = new Builder()
     .withCapabilities(Capabilities.chrome())
     .build();
const baseUrl = "https://www.onliner.by/"
const defaultWaitingTime = 5000;
let pageUrl: string;

describe("Onliner header menu tests", () => {
     before(async () => {
        await driver.manage().window().maximize();
     })
     beforeEach(async () => {
        await driver.get(baseUrl);
})

it('When User clicks on the logo of site, the main page is displayed', async function () {
        await driver.findElement(By.className('b-top-logo')).click();
        await driver.wait(until.urlContains(baseUrl), defaultWaitingTime);
    });

it("Should navigate to the catalog page from main page", async () => {
        const catalotButtonLocator: Locator = By.css(`a[href = "https://catalog.onliner.by"] span.b-main-navigation__text`);
        await driver.wait(until.elementsLocated(catalotButtonLocator), defaultWaitingTime);
        await driver.findElement(catalotButtonLocator).click();
        pageUrl = "https://catalog.onliner.by/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const catalogTitle = await driver.findElement(By.css(`a.catalog-navigation__bubble`))
        expect(await catalogTitle.getText()).to.be.deep.equal("Все суперцены!")
})

it("Should navigate to the Auto shope page from main page", async () => {
        const autoShopButtonLocator: Locator = By.xpath(`//a[@href = "https://ab.onliner.by"]/span[contains(@class, "b-main-navigation__text")]`);
        await driver.wait(until.elementsLocated(autoShopButtonLocator), defaultWaitingTime);
        await driver.findElement(autoShopButtonLocator).click();
        pageUrl = "https://ab.onliner.by/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const autoPageTitle = await driver.findElement(By.css("div.vehicle-form h1"))
        expect(await autoPageTitle.getText()).to.be.deep.equal("Автобарахолка")
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

after(async () => {
        await driver.quit();
        })
 })