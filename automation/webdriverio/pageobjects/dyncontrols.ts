import { $, expect } from "@wdio/globals";
import Page from "./page.js";
import { loadSelectors } from "../utils/selectors.js";

interface dc {
    cb: string, cbbutton: string, ip: string, ipbutton: string
}
const selectors = loadSelectors<dc>('dyncon.yaml');
class DynCon extends Page {
    public open() {
        return super.open("dynamic_controls");
    }
    public async removecheckbox() {
        try {
            await this.checkboxButton.click();

            await this.checkbox.waitForDisplayed({
                reverse: true,
                timeout: 10000
            });

            console.log("Checkbox removed successfully");

        } catch (error) {
            console.error("Failed to remove checkbox:", error);
            throw error;
        }
    }
    public async addcheckbox() {
        await this.checkboxButton.click();
        await this.checkbox.waitForDisplayed({
            timeout: 10000
        });
    }
    public async enableinput() {
        await this.inputButton.click();
        await this.inputField.waitForEnabled({
            timeout: 10000
        });
    }
    public async disableinput() {
        await this.inputButton.click();
        await this.inputField.waitForEnabled({
            reverse: true,
            timeout: 10000
        });
    }

    public async verifyCheckboxDisappeared() {
        await expect(this.checkbox).not.toBeDisplayed();
    }

    public async verifyCheckboxDisplayed() {
        await expect(this.checkbox).toBeDisplayed();
    }

    public async verifyInputEnabled() {
        await expect(this.inputField).toBeEnabled();
    }

    public async verifyInputDisabled() {
        await expect(this.inputField).not.toBeEnabled();
    }

    public get checkbox() {
        return $(selectors.cb);
    }

    public get checkboxButton() {
        return $(selectors.cbbutton);
    }

    public get inputField() {
        return $(selectors.ip);
    }

    public get inputButton() {
        return $(selectors.ipbutton);
    }
}
export default new DynCon();
