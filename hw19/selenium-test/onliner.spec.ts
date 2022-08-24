import { expect } from "chai";
import { By, until, Builder, Capabilities, Locator } from "selenium-webdriver"

const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
const baseUrl = "https://www.onliner.by/"
const defaultWaitingTime = 3000;
let pageUrl: string;
let currentUrl: string;

describe("Onliner header menu tests", () => {

    before(async () => {
        await driver.manage().window().maximize();
    })

    it("Should navigate to the catalog page from main page", async () => {
        await driver.get(baseUrl);

        const catalotButtonLocator: Locator = By.css(`a[href = "https://catalog.onliner.by"] span.b-main-navigation__text`);
        await driver.wait(until.elementsLocated(catalotButtonLocator), defaultWaitingTime);
        await driver.findElement(catalotButtonLocator).click();

        pageUrl = "https://catalog.onliner.by/";
        await driver.wait(until.urlIs(pageUrl), defaultWaitingTime);
        const catalogTitle = await driver.findElement(By.css(`a.catalog-navigation__bubble`))
        expect(await catalogTitle.getText()).to.be.deep.equal("Все суперцены!")
    })

     it("Should navigate to the baraholka page from main page", async () => {
         
        await driver.get(baseUrl);
   
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



