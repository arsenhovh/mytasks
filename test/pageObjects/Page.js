const BASE_URL = require('../../support/constants');

class Page {
    open(path) {
        return browser.url(BASE_URL);
    }
}
module.exports = new Page()