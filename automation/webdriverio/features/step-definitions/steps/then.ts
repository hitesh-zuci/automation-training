import { Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import SecurePage from "../../../pageobjects/secure.page.js";
import { CustomWorld } from "../../support/world.js";
import { $ } from "@wdio/globals";
import Dropdown from "../../../pageobjects/dropdown.js";
import Dyncon from "../../../pageobjects/dyncontrols.js";
import Dragdrop from "../../../pageobjects/dragdrop.js";
//World
Then(
    "the username should be {string}",
    function (this: CustomWorld, expectedUsername: string) {
        expect(this.username).toBe(expectedUsername);
    }
);

//Login
Then("I should see {string}", async (expectedMessage: string) => {
    await expect(SecurePage.flashAlert).toBeDisplayed();

    await expect(SecurePage.flashAlert).toHaveText(
        expect.stringContaining(expectedMessage)
    );
});

//Dropdown
Then("I should confirm option1 is selected", () => Dropdown.confselection());

//Dynamic Controls
Then("the checkbox should disappear", () => Dyncon.verifyCheckboxDisappeared());

Then("the checkbox should appear", () => Dyncon.verifyCheckboxDisplayed());

Then("the input should be enabled", () => Dyncon.verifyInputEnabled());

Then("the input should be disabled", () => Dyncon.verifyInputDisabled());

//drag and drop
Then("the boxes should be swapped", () => Dragdrop.verifyBoxesSwapped());