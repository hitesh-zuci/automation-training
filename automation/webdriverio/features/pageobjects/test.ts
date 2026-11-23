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

export default new Alerts();
