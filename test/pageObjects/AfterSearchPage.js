const Page = require('./Page');

class PageAfterSearch extends Page {

    get searchedProduct() {
        return $('.s-image')
    }

    get addToBag() {
        return $('#add-to-cart-button')
    }

    get closeSignForAddToBag() {
        return $('#attach-close_sideSheet-link')
    }


}

module.exports = new PageAfterSearch();
