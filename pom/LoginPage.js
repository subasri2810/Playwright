
class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginlink = page.getByRole('link', { name: "Log in" });
        this.EmailTxt = page.getByRole('textbox', { name: "Email:" });
        this.passwordTxt = page.getByRole('textbox', { name: "Password" });
        this.LoginBtn = page.locator(".button-1.login-button");
    }

    async enterEmail() {
        await this.EmailTxt.fill("subashree078@gmail.com");
    }

    async enterPassword() {
        await this.passwordTxt.fill("suba@123");
    }

    async clickOnLoginLink() {
        await this.loginlink.click();
    }

    async clickOnLoginBtn() {
        await this.LoginBtn.click();
    }

    async LoginToApp() {
        await this.clickOnLoginLink();
        await this.enterEmail();
        await this.enterPassword();
        await this.clickOnLoginBtn();
    }
}

export default LoginPage;
