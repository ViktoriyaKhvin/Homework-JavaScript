import { By, until, Builder, Capabilities, Locator } from "selenium-webdriver"

 const driver = new Builder()
     .withCapabilities(Capabilities.chrome())
     .build();
 const baseUrl = "https://www.onliner.by/"
 const defaultWaitingTime = 3000;

