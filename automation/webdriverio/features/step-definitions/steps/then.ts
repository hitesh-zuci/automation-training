import { Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import SecurePage from "../../../pageobjects/secure.page.js";
import Dyncon from "../../../pageobjects/test.js";
import { CustomWorld } from "../../support/world.js";
import { $ } from "@wdio/globals";
import Dropdown from "../../../pageobjects/dropdown.js";
// World
Then(
    "the username should be {string}",
    function (this: CustomWorld, expectedUsername: string) {
        expect(this.username).toBe(expectedUsername);
    }
);

// Login
Then("I should see {string}", async (expectedMessage: string) => {
    await expect(SecurePage.flashAlert).toBeDisplayed();

    await expect(SecurePage.flashAlert).toHaveText(
        expect.stringContaining(expectedMessage)
    );
});

// Dropdown
Then("I should confirm option1 is selected", async () => {
    await expect($("#dropdown")).toHaveValue("1");
    return Dropdown.confselection();
});

// Dynamic Controls
Then("the checkbox should disappear", async () => {
    await expect(Dyncon.checkbox).not.toBeDisplayed();
});

Then("the checkbox should appear", async () => {
    await expect(Dyncon.checkbox).toBeDisplayed();
});

Then("the input should be enabled", async () => {
    await expect(Dyncon.inputField).toBeEnabled();
});

Then("the input should be disabled", async () => {
    await expect(Dyncon.inputField).not.toBeEnabled();
});