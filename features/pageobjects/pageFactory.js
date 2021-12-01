const LoginPage = require("../pageobjects/login.page");
const myAccountPage = require("../pageobjects/myAccount.page");
const Page = require("../pageobjects/page");
const HomePage = require("../pageobjects/home.page");
const AfterSearchPage = require("../pageobjects/afterSearch.page");
const Checkout = require("../pageobjects/checkout.page");

class pageFactory {

    static getPage(pageName) {

        switch (pageName) {
            case "login":
                return new LoginPage();
            case "account":
                return new myAccountPage();
            case "home":
                return new HomePage();
            case "afterSearch":
                return new AfterSearchPage()
            case "checkout":
                return new Checkout()
            default:
                return new Page();
        }

    }
}
module.exports =  pageFactory
