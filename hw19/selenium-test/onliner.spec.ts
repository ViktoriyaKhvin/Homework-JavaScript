import { Builder, Capabilities, By, until, WebElement, } from 'selenium-webdriver';
import { expect } from 'chai';

 import { By, Builder, Capabilities, until } from 'selenium-webdriver';
 import { after, before } from 'mocha';
 import { expect } from 'chai';

 const baseUrl = 'https://www.onliner.by';
 const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

 before(async () => {
    await driver.manage().window().maximize();
    await driver.get(baseUrl);
});

it('Should display the title of main page correctly', async () => {
    await driver.get(baseUrl);
    const currentTitle = await driver.getTitle();
    expect(currentTitle).to.equal('Onliner');
});

it('When User click "Форум", the page is displayed with title including "Форум"', async () => {
    await driver.findElement(By.linkText('Форум')).click();
    const catalog = await driver.getTitle();
    expect(catalog).to.include('Форум');
});
  


