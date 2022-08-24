import { By, Builder, Capabilities, until } from 'selenium-webdriver';
import { after, before } from 'mocha';
import { expect } from 'chai';

const baseUrl = 'https://www.onliner.by';

describe('Onliner selenium-tests'), () => {
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
     })};









