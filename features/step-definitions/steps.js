const { Given, When, Then} = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const myAccountPage = require('../pageobjects/myAccount.page');
const Page = require("../pageobjects/page");


Given(/^I am on the "(.*)" page$/, async (path) => {
    await LoginPage.open(path)
});
When(/^I login with "(.*)"$/, async (username) => {
    await LoginPage.continue(username)
});
Then(/^I should wait "(.*)" seconds and continue write "(.*)"$/, async (time,password)=> {
    await LoginPage.signIn(Number(time), password)
})
Then(/^I should see a flash message saying (.*)$/, async (massage) => {
    await expect(myAccountPage.arrowDownSign).toExist();
});
Then(/^I should compare "(.*)" with error message$/, async (massage) => {
    await expect(LoginPage.errorMassText).toHaveText(massage)
});

