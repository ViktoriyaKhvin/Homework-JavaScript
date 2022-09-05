import { expect } from 'chai';
import { mkdirSync, rmSync, writeFile } from 'fs';
import { Builder, Capabilities, By, until } from 'selenium-webdriver';
import { Context } from 'mocha';

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const baseUrl = 'https://www.onliner.by/';
const titleOfMainPage = 'Onliner';
const textForMotors = 'Моторные масла';
const catalogIncludingText = 'Каталог';
const searchPlaceholderText = 'Поиск в Каталоге.';

const screensDir = 'HW_19/selenium/screenshots';
let testsCounter = 1;
const defaultWaitingTime = 3000;

describe('Tests of the site Onliner', function () {
     before(function () {
        rmSync(screensDir, { recursive: true, force: true });
        mkdirSync(screensDir, { recursive: true });
     });

     describe('Tests of the main page', async function () {
        it('Should display the title of main page correctly', async function () {
             await driver.manage().window().maximize();
             await driver.get(baseUrl);
             expect(await driver.getTitle()).to.equal(titleOfMainPage);
        });

        it(`When User clicks link ${textForMotors}, correct page is displayed with the title of article ${textForMotors}`, async function () {
             await driver.findElement(By.linkText(textForMotors)).click();
             const pageHeader = await driver.findElement(
                By.className('schema-header__title js-schema-header_title')
                );
             expect(await pageHeader.getText()).to.equal(textForMotors);
             await driver.executeScript(
                 "arguments[0].setAttribute('style', 'background: #91c3f2;')",
                 pageHeader
             );
        });

        it('When User clicks on the logo of site, the main page is displayed', async function () {
             await driver.findElement(By.className('b-top-logo')).click();
             await driver.wait(until.urlContains(baseUrl), defaultWaitingTime);
        });

        it(`When User clicks ${catalogIncludingText}, the page is displayed with title including ${catalogIncludingText}`, async function () {
             await driver.findElement(By.linkText(catalogIncludingText)).click();
             expect(await driver.getTitle()).to.include(catalogIncludingText);
        });

        it(`The main page contains search form with with placeholder including text ${searchPlaceholderText}`, async function () {
             await driver.findElement(By.className('b-top-logo')).click();
             const searchElement = await driver.findElement(
                By.xpath(
                     '//form[@class="fast-search__form"]/input[@type="text"]'
                )
             );
             expect(await searchElement.getAttribute('placeholder')).to.include(
                searchPlaceholderText
             );
             await driver.executeScript(
                "arguments[0].setAttribute('style', 'background: #91c3f2;')",
                searchElement
            );
        });

        afterEach(async function () {
            const data = await driver.takeScreenshot();
            const base64Data = data.replace(/^data:image\/png;base64,/, '');
            writeFile(
                `${screensDir}/${testsCounter++}.${
                    (this as Context).currentTest?.title
                }.png`,
                base64Data,
                'base64',
                function (err) {
                    if (err) console.log(err.message);
                }
            );
        });
    });
    after(async () => {
        await driver.quit();
    });
});