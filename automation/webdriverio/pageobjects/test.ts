import { $ } from "@wdio/globals";
import Page from "./page.js";
import { publicDecrypt } from "node:crypto";

class test extends Page {
  public open() {
    return super.open("");
  }
  public async cbclick() {
    return $("=Checkboxes").click();
  }
  public async curl() {
    return browser.getUrl();
  }
  public async back() {
    return browser.back();
  }
}
class Window extends Page {
  public async ch() {
    return $("=Click Here").click();
  }
  public open() {
    return super.open("windows");
  }
}

class Alerts extends Page {
  public open() {
    return super.open("javascript_alerts");
  }
}
class Dropdown extends Page {
  public open() {
    return super.open("dropdown");
  }
}
class DynCon extends Page {
  public open() {
    return super.open("dynamic_controls");
  }
  public async removecheckbox() {
    await this.checkboxButton.click();
    await this.checkbox.waitForDisplayed({
      reverse: true,
      timeout: 10000
    });
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
  public async verifyCheckboxDisplayed() {
    await expect(this.checkbox).toBeDisplayed();
  }

  public async verifyInputEnabled() {
    await expect(this.inputField).toBeEnabled();
  }

  public get checkbox() {
    return $("#checkbox");
  }

  public get checkboxButton() {
    return $("#checkbox-example button");
  }

  public get inputField() {
    return $("#input-example input");
  }

  public get inputButton() {
    return $("#input-example button");
  }
}
export default new DynCon();
