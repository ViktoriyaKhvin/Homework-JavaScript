import { Builder, Capabilities } from "selenium-webdriver";
import { HomePage } from "../pageObjects/homePage";
import { NAVIGATION_ITEMS, PAGES, SELECTOR_TYPES } from "../utils/types";
import { expect } from "chai";
import { mkdirSync, rmSync, writeFile } from "fs";
import { Context } from "mocha";
import { LoginPage } from "../pageObjects/loginPage";
import { PageFactory } from "../pageObjects/pageFactory";

const driver = new Builder()
     .withCapabilities(Capabilities.chrome())
     .build();

const homePage: HomePage = (PageFactory.getPage(driver, PAGES.HOME) as HomePage)
const loginPage: LoginPage = (PageFactory.getPage(driver, PAGES.LOGIN) as LoginPage)

const screenDir = "hw21/screenshots"
let totalCounter = 1;

describe("Onliner tests", () => {
    before(async () => {
        homePage.maximizeWindow();  rmSync(screenDir, { recursive: true, force: true });
        mkdirSync(screenDir, { recursive: true })
    })

    beforeEach(async () => {
         await homePage.visitPage();
    })

    describe("Onliner navigation menu tests", () => {
        it("Should navigate to the Katalog page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.CATALOG);
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'a.catalog-navigation__bubble')).getText()).to.be.deep.equal("Все суперцены!")
        });

        it("Should navigate to the Auto shope page from main page", async () => {
             await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.AUTO);
             expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'div.vehicle-form h1')).getText()).to.be.deep.equal("Автобарахолка")
        });

        it("Should navigate to the realt page from main page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.REALT);
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'a[href="https://r.onliner.by/pk/"] span.project-navigation__sign')).getText()).to.be.deep.equal("Продажа")
        })

        it("Should navigate to the tasks page from main page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.TASKS);
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'a[href= "/tasks"] span.project-navigation__sign')).getText()).to.be.deep.equal("Заказы")
        })

        it("Should navigate to the baraholka page from main page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.BARAHOLKA);
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.XPATH, '//div[contains(@class, "b-mnforum-header-i")] //h1')).getText()).to.be.deep.equal("Барахолка")
        })


        describe("Login page test", () => {
            it("Should successfully log the use in and show protection pop up while login with correct credentials", async () => {
                await homePage.clickLoginButton();
                await loginPage.fillEmailField("test12051@mail.ru")
                await loginPage.fillPasswordField("test12051");
                await loginPage.submitForm();
                expect(await (await loginPage.getProtectionPopUpMessage()).getText()).to.have.string(`Давайте проверим, вы робот или нет`);
            })
        })

        afterEach(async function () {
            const data = await driver.takeScreenshot();
            writeFile(`${screenDir}/${totalCounter++}. ${(this as Context).currentTest?.title}.png`, data, "base64", (err) => {
                if (err) console.log(err.message);
            })
        })

        after(async () => {
             homePage.quitBrowser();
        })
    })
})