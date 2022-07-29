import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const rlSync = require('readline-sync');

import { contacts, baseUrl } from './contacts.js';

let username;
let password;
let driver;

function getCredentials() {
  console.log('Please enter github credentials');
  username = rlSync.question('username: ');
  password = rlSync.question('password: ');
}

async function startBrowser() {
  let options = new chrome.Options();
  driver = await new Builder()
    .setChromeOptions(options)
    .forBrowser('chrome')
    .build();
}

async function login() {
  await driver.get('https://www.github.com/login');
  await driver.findElement(By.id('login_field')).sendKeys(username);
  await driver.findElement(By.id('password')).sendKeys(password);
  await driver.findElement(By.name('commit')).click();
  await driver.wait(until.elementLocated(By.id('global-nav')), 30000);
}

async function addContacts(contacts) {
  try {
    for (const contact of contacts) {
      await driver.get(`${baseUrl}${contact}`);
      const selector = "input[value='Follow'][class='btn btn-block']";
      let element = await driver.findElement(By.css(selector));
      if ((await element.isDisplayed()) && (await element.isEnabled())) {
        await element.click();
        console.log(`Added ${contact}`);
      }
    }
  } catch (error) {
    console.log(error);
  }

  await driver.quit();
}

async function main() {
  getCredentials();
  await startBrowser();
  await login();
  addContacts(contacts);
}

main();
