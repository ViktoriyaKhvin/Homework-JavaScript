import { By, Builder, Capabilities, until, Locator } from 'selenium-webdriver';
import { after, before } from 'mocha';
import { expect } from 'chai';

const baseUrl = 'https://www.onliner.by';

describe('Onliner selenium-tests:', () => {
     const driver = new Builder()
         .withCapabilities(Capabilities.chrome())
         .build();

    before(async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
    });

    it('Should display page title is correctly', async () => {
        await driver.wait(until.elementLocated(By.css('title')));
        const textTitle = await driver.getTitle();
        expect(textTitle).to.eq('Onliner');
    });

    it('When User click "Каталог", the page is displayed with title including "Каталог"', async () => {
        await driver.findElement(By.linkText('Каталог')).click();
        const catalog = await driver.getTitle();
        expect(catalog).to.include('Каталог');
    });

    it("Should navigate to the baraholka page from main page", async () => {
        await driver.get(baseUrl);
        const baraholkaButtonLocator: Locator = By.css(`a[href="https://baraholka.onliner.by/"] span.b-main-navigation__text`)
        await driver.wait(until.elementsLocated(baraholkaButtonLocator), 3000);
        await driver.findElement(baraholkaButtonLocator).click();
        const pageUrl = "https://baraholka.onliner.by/";
        await driver.wait(until.urlIs(pageUrl), 3000);
        const baraholkaPageTitle = await driver.findElement(By.xpath(`//div[contains(@class, "b-mnforum-header-i")] //h1`))
        expect(await baraholkaPageTitle.getText()).to.be.deep.equal("Барахолка")
    })



after(async () => {
        await driver.quit();
    });
});