module.exports = class LoginPage {

    get inputUsername() {
        return $('#userid')
    }
    get continueButton() {
        return $('#signin-continue-btn')
    }
    get inputPassword() {
        return $('#pass')
    }
    get SignInButton() {
        return $('#sgnBt')
    }
    get errorMassageText() {
        return $('#errormsg')
    }

}
