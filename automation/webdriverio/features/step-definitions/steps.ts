import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import Window from "../pageobjects/test.js";
const pages = {
  // login: LoginPage,
  // home: test,
  window: Window,
};
let wn: string[];
//login
// Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
//   await pages[page].open();
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//   await LoginPage.login(username, password);
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//   await expect(SecurePage.flashAlert).toBeExisting();
//   await expect(SecurePage.flashAlert).toHaveText(
//     expect.stringContaining(message),
//   );
// });

//url confirm
// Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
//   await pages[page].open();
// });
// When(/^I click the Checkboxes link$/, async () => {
//   await test.cbclick();
// });
// Then(/^I should be on the Checkboxes page$/, async () => {
//   await expect(browser).toHaveUrl(
//     "https://the-internet.herokuapp.com/checkboxes",
//   );
// });
// When(/^I navigate back$/, async () => {
//   await test.back();
// });

// Then(/^I should return to (\w+) page$/, async (page: keyof typeof pages) => {
//   await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/");
// });

//windows
Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
  await pages[page].open();
});

When(/^I click the ch link$/, async () => {
  await Window.ch();
  wn = await browser.getWindowHandles();
});

Then(/^I should be on the new window$/, async () => {
  await browser.switchToWindow(wn[1]);
  const hding = await $("h3").getText();
  await expect(hding).toBe("New Window");
});
When(/^I switch back$/, async () => {
  await browser.switchToWindow(wn[0]);
});
Then(/^I should return to window page$/, async () => {
  await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/windows");
});
