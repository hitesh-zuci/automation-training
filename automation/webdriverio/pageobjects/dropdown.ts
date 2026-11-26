import { $ } from "@wdio/globals";
import Page from "./page.js";
import { loadSelectors } from "../utils/selectors.js";
interface dropd {
    dropdown: { select: string }
}
const selectors = loadSelectors<dropd>('dropdown.yaml');
// let op:string="1";
class Dropdown extends Page {
    public open() {
        return super.open("dropdown");
    }
    public get dropdown() {
        return $(selectors.dropdown.select);
    }
    public async selectop() {
        await this.dropdown.selectByVisibleText("Option 1");
    }
    public async confselection() {
        const c = await this.dropdown.getValue();
        await expect(c).toBe("1");
    }
}
export default new Dropdown();