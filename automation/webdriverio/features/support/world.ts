import {
  setWorldConstructor,
  World
} from "@wdio/cucumber-framework";

export class CustomWorld extends World {
  username!: string;
  alertMessage!: string;
}

setWorldConstructor(CustomWorld);