import { expect, $ } from "@wdio/globals";
import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import Dyncon from "../pageobjects/test.js";
import { after } from "node:test";
import { CustomWorld } from "../support/world.js";
import { asyncWrapProviders } from "node:async_hooks";
const pages = {
    // login: LoginPage,
    // home: test,
    // window: Window,
    //   alerts: Alerts,
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
// Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
//   await pages[page].open();
// });

// When(/^I click the ch link$/, async () => {
//   await Window.ch();
//   wn = await browser.getWindowHandles();
// });

// Then(/^I should be on the new window$/, async () => {
//   await browser.switchToWindow(wn[1]);
//   const hding = await $("h3").getText();
//   await expect(hding).toBe("New Window");
// });
// When(/^I switch back$/, async () => {
//   await browser.switchToWindow(wn[0]);
// });
// Then(/^I should return to window page$/, async () => {
//   await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/windows");
// });

//alerts
// Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
//   await pages[page].open();
// });
// When(/^I click the jsconfirm link$/, async () => {
//   browser.on("dialog", () => {});
//   await $("button=Click for JS Confirm").click();
// });
// Then(/^I should get alert text and i should cancel it$/, async () => {
//   const message = await browser.getAlertText();
//   await expect(message).toBe("I am a JS Confirm");
//   await browser.dismissAlert();
// });
// Then(/^I should get cancel message$/, async () => {
//   const message = await $("#result").getText();
//   await expect(message).toBe("You clicked: Cancel");
// });

//hooks
Before(async () => {
    console.log("scenario is starting");
});
After(async () => {
    console.log("Scenario has finished");
});

//world class
Given("I store a username", function (this: CustomWorld) {
    this.username = "testuser";
});

When("I retrieve the stored username", function (this: CustomWorld) {
    console.log("Stored username:", this.username);
});

Then("the username should be {string}", function (this: CustomWorld, expectedUsername: string) {
    expect(this.username).toBe(expectedUsername);
});

//login outline
Given("I am on the login page", async () => {
    await LoginPage.open();
});

When(
    "I login with {string} and {string}",
    async (username: string, password: string) => {
        await LoginPage.login(username, password);
    }
);

Then("I should see {string}", async (expectedMessage: string) => {
    await expect(SecurePage.flashAlert).toBeDisplayed();

    await expect(SecurePage.flashAlert).toHaveText(
        expect.stringContaining(expectedMessage)
    );
});

//table
When("I read these users:", function (datatable) {
    const d = datatable.hashes();
    for (const i of d) {
        console.log(i.username)
    }
})

//dropdown
Given("I am on the dropdown page", async () => {
    await Dropdown.open();
})

When("I select option1", async () => {
    await $("#dropdown").selectByVisibleText("Option 1");
});
Then("I should confirm option1 is selected", async () => {
    const c = await $("#dropdown").getValue();

    await expect(c).toBe("1");

});

//dynamic controls
Given ("I am on the dynamic controls page",async()=>{
    await Dyncon.open();
});
When ("I remove the checkbox",async()=>{
    await Dyncon.removecheckbox();
});
Then("the checkbox should disappear", async () => {
  await expect(Dyncon.checkbox).not.toBeDisplayed();
});
When ("I add the checkbox",async()=>{
    await Dyncon.addcheckbox();
});
Then("the checkbox should appear", async () => {
  await expect(Dyncon.checkbox).toBeDisplayed();
});
When ("I enable the input",async()=>{
    await Dyncon.enableinput();
});
Then("the input should be enabled", async () => {
  await expect(Dyncon.inputField).toBeEnabled();
});
When ("I disable the input",async()=>{
    await Dyncon.disableinput();
});
Then("the input should be disabled", async () => {
  await expect(Dyncon.inputField).not.toBeEnabled();
});