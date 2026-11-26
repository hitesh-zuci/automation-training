import { Before, After } from "@wdio/cucumber-framework";

Before(async () => {
    console.log("Scenario is starting");
});

After(async () => {
    console.log("Scenario has finished");
});