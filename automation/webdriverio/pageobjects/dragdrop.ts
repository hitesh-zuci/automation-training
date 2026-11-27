import { $, expect } from "@wdio/globals";
import Page from "./page.js";
import { loadSelectors } from "../utils/selectors.js";

interface dd {
boxa:string,boxb:string
}
const selectors = loadSelectors<dd>('dragdrop.yaml');
class DragDrop extends Page{
    public open(){
        return super.open('drag_and_drop');
    }
    public get ba(){
        return $(selectors.boxa);
    }
    public get bb(){
        return $(selectors.boxb);
    }

    public async dragdrop(){
      (await this.ba).dragAndDrop(this.bb);  
    }
    public async verifyBoxesSwapped() {
    await expect(this.ba).toHaveText("B");
    await expect(this.bb).toHaveText("A");
}
}
export default new DragDrop();