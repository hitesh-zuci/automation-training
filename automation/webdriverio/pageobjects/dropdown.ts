import { $, expect } from "@wdio/globals";
import Page from "./page.js";
import { loadSelectors } from "../utils/selectors.js";
interface dropd {
    dropdown: { select: string }
}
const selectors = loadSelectors<dropd>('dropdown.yaml');
class Dropdown extends Page {
    public open() {
        return super.open("dropdown");
    }
    public get dropdown() {
        return $(selectors.dropdown.select);
    }
    public async selectop() {
    try {
        await this.dropdown.selectByVisibleText("Option 1");
        console.log("Option 1 selected successfully");
    } catch (error) {
        console.error("Failed to select Option 1:", error);
        throw error;
    } finally {
        console.log("Dropdown selection operation finished");
    }
}
    public async confselection() {
        const c = await this.dropdown.getValue();
        expect(c).toBe("1");
    }
}
export default new Dropdown();