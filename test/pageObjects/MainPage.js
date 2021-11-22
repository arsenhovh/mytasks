const Page = require('./Page');
class MainPage extends Page {
    get searchInput(){return $('#twotabsearchtextbox')}
    get searchButton(){return  $('#nav-search-submit-button')}
    get langHoverIcon(){return  $('#icp-nav-flyout')}
    get langlinkafterHoverES(){return  $('#nav-flyout-icp > div.nav-template.nav-flyout-content.nav-tpl-itemList > a:nth-child(4) > span > i')}
    get cartCount(){return  $('#nav-cart-count')}
    get GeneralAmazonIcon() {return  $('#nav-logo-sprites')}
    get textInNavBar() {return  $("#nav-xshop > a:nth-child(6)")}
}

module.exports = new MainPage();

