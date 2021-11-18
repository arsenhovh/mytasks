const Page = require('./page');


class SecondLoginPage extends Page {

    get inputPassword () { return $('#pass') }
    get SignInBtn () { return $('#sgnBt')}

    async signIn (password) {
        await this.inputPassword.setValue(password);
        await this.SignInBtn.click();
    }


}

module.exports = new SecondLoginPage();
