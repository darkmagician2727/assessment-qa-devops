const { Builder, Browser, By, until } = require("selenium-webdriver");
require("chromedriver");


let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

//Check that clicking the Draw button displays the div with id = “choices”

describe("Duel Duo tests", () => {
  test("clicking the Draw button displays the div with id = “choices”", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

//Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

describe("Duel Duo tests", () => {
  test("clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.className("bot-btn")).click();
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

//Check that when a bot is “Removed from Duo”, that it goes back to “choices”

describe("Duel Duo tests", () => {
  test("when a bot is “Removed from Duo”, that it goes back to “choices”", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.className("bot-btn")).click();
    await driver.findElement(By.className("bot-btn")).click();
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});