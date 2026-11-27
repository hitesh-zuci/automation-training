import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep} from "@wdio/cucumber-framework";
import fs from "node:fs";
import path from "node:path";

Before(async () => {
    console.log("Scenario is starting");
});

After(async function (scenario) {
    console.log("Scenario has finished");
    console.log("Scenario result:", scenario.result?.status);

    if (scenario.result?.status === "FAILED") {
        const screenshot = await browser.takeScreenshot();

        const screenshotDir = path.resolve(process.cwd(), "screenshots");

        const fileName = `failure-${Date.now()}.png`;
        const filePath = path.join(screenshotDir, fileName);

        fs.writeFileSync(filePath, screenshot, "base64");

        console.log(`Screenshot saved: ${filePath}`);
    }
});
BeforeAll(async () => {
    console.log("Test run is starting");
});

AfterAll(async () => {
    console.log("Test run is finished");
});
BeforeStep(async function () {
    console.log("Starting a step");
});

AfterStep(async function (step) {
    console.log("Finished a step:", step.result?.status);
});