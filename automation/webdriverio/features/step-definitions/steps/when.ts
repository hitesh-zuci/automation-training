import { When } from "@wdio/cucumber-framework";
import { $ } from "@wdio/globals";
import LoginPage from "../../../pageobjects/login.page.js";
import { CustomWorld } from "../../support/world.js";
import Dropdown from "../../../pageobjects/dropdown.js";
import Dyncon from "../../../pageobjects/dyncontrols.js"
import Dragdrop from "../../../pageobjects/dragdrop.js";
//Login
When(
    "I login with {string} and {string}",
    async (username: string, password: string) => {
        await LoginPage.login(username, password);
    }
);

//World
When("I retrieve the stored username", function (this: CustomWorld) {
    console.log("Stored username:", this.username);
});

//Data Table
When("I read these users:", function (datatable) {
    const users = datatable.hashes();

    for (const user of users) {
        console.log(user.username);
    }
});

//Dropdown
When("I select option1", () =>Dropdown.selectop());

//Dynamic Controls
When("I remove the checkbox", async () => {
    return Dyncon.removecheckbox();
});

When("I add the checkbox", async () => {
    return Dyncon.addcheckbox();
});

When("I enable the input", async () => {
    return Dyncon.enableinput();
});

When("I disable the input", async () => {
    return Dyncon.disableinput();
});

//drag and drop
When("I drag A over B",()=>Dragdrop.dragdrop());