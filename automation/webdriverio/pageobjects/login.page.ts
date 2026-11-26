import { $ } from '@wdio/globals';
import Page from './page.js';
import { loadSelectors } from '../utils/selectors.js';
interface LoginSelectors {
    login: {
        username: string;
        password: string;
        loginButton: string;
    };
}
const selectors = loadSelectors<LoginSelectors>('login.yaml');
class LoginPage extends Page {

    public get inputUsername() {
        return $(selectors.login.username);
    }

    public get inputPassword() {
        return $(selectors.login.password);
    }

    public get btnSubmit() {
        return $(selectors.login.loginButton);
    }

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public open() {
        return super.open('login');
    }
}

export default new LoginPage();

