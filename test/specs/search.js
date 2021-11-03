const Page = require('../pageObjects/Page');
const MainPage = require('../pageObjects/MainPage');
const AfterSearchPage = require('../pageObjects/AfterSearchPage');

describe("Amazon  search, and language check ", ()=> {

    it("Should open url and after that verify the title", async () => {
        await MainPage.open()
        await expect(browser).toHaveTitle("Amazon.com. Spend less. Smile more.");
    });
    it("Find laptop in Amazon.com", async () => {
        await MainPage.open();
        await MainPage.searchInput.addValue("Laptop");
        await MainPage.searchButton.click();
        await expect(MainPage.searchInput).toHaveAttribute("value", "Laptop");

    })
    it("Add some product in bag and Check count", async () => {
        await MainPage.open();
        await MainPage.searchInput.addValue("Laptop");
        await MainPage.searchButton.click();
        await AfterSearchPage.searchedProduct.click();
        await AfterSearchPage.addToBag.click();
        await browser.pause(5000)
        await expect(MainPage.cartCount).toHaveText("1");

    })
    it("Change language and Check  translations ", async () => {

        await MainPage.open()
        await browser.pause(5000)
        await MainPage.langHoverIcon.moveTo()
        await browser.pause(5000)
        await MainPage.langlinkafterHoverES.click();
        await expect(MainPage.textInNavBar).toHaveText("Vender");
    })
 })