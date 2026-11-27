import { Given } from "@wdio/cucumber-framework";
import LoginPage from "../../../pageobjects/login.page.js";
import { CustomWorld } from "../../support/world.js";
import Dropdown from "../../../pageobjects/dropdown.js";
import Dyncon from "../../../pageobjects/dyncontrols.js";
import Dragdrop from "../../../pageobjects/dragdrop.js";
// Login
Given("I am on the login page", async () => {
    return LoginPage.open();
});

// World
Given("I store a username", function (this: CustomWorld) {
    this.username = "testuser";
});

//Dropdown
Given("I am on the dropdown page", async () => {
    return Dropdown.open();
});

//Dynamic Controls
Given("I am on the dynamic controls page", async () => {
    await Dyncon.open();
});

//drag and drop
Given("I am on the dragndrop page",()=>Dragdrop.open());