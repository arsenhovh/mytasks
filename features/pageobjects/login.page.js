const Page = require('./page');


class LoginPage extends Page {

    get inputUsername () { return $('#userid') }
    get continueBtn () { return $('#signin-continue-btn')}
    get inputPassword () { return $('#pass') }
    get SignInBtn () { return $('#sgnBt')}
    get errorMassText () { return $('#errormsg')}
    get checkboxSecure (){return $("#checkbox")};
    // "Oops, that s not a match."

    async continue (username) {
        await this.inputUsername.setValue(username);
        await this.continueBtn.click();
        await browser.pause(10000);
   }
    async signIn (time,password) {
        await browser.pause(5000);
        await this.inputPassword.setValue(password);
        await browser.pause(5000);
        await this.SignInBtn.click();

    }

    open (path) {
        return super.open(path);
    }

}

module.exports = new LoginPage();
