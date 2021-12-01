const MainPage = require('../pageObjects/MainPage');
const AfterSearchPage = require('../pageObjects/AfterSearchPage');

describe("Amazon website title check, search and addToBag functionality, and translations check ", () => {

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
        await browser.waitUntil(() => {
                return MainPage.cartCount.isDisplayed()
            },
            {
                timeout: 10000
            });
        await expect(MainPage.cartCount).toHaveText("1");
    })
    it("Change language in Amazon website and after that check  translations ", async () => {
        await MainPage.open()
        await MainPage.languageHoverIcon.moveTo()
        await MainPage.languageLinkAfterHoverES.click();
        await expect(MainPage.textInNavBar).toHaveText("Vender");
    })
})