import { Given } from "@wdio/cucumber-framework";
import LoginPage from "../../../pageobjects/login.page.js";
import Dyncon from "../../../pageobjects/test.js";
import { CustomWorld } from "../../support/world.js";
import Dropdown from "../../../pageobjects/dropdown.js";
// Login
Given("I am on the login page", async () => {
    await LoginPage.open();
});

// World
Given("I store a username", function (this: CustomWorld) {
    this.username = "testuser";
});

// Dropdown
Given("I am on the dropdown page", async () => {
    await Dropdown.open();
});

// Dynamic Controls
Given("I am on the dynamic controls page", async () => {
    await Dyncon.open();
});