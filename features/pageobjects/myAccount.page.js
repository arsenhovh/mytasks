const Page = require('./page');


class myAccountPage extends Page {

    get accountName () { return $('#gh-ug > b:nth-child(1)') }
    get logintext () {return $('#gh-ug > a')}
    get arrowDownSign() {return $('#gh-ug > b.gh-eb-arw.gh-sprRetina')}

}

module.exports = new myAccountPage();
