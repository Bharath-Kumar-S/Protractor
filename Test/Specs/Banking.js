// http://www.way2automation.com/angularjs-protractor/banking/#/customer
const loc  = require('../Pages/Banking_pages').loc;
const libs = require('../Pages/Banking_pages').lib

describe('Simple tests', () => {

    beforeEach(() => {
        browser.driver.get('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
    });

    it('first test - Check for title', () => {
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
    });

    it('first test - Login successfull', () => {
        libs.login()        
        expect(loc.Logout.isDisplayed()).toEqual(true);
    });

    it('Deposit amount - Check for title', () => {
        libs.login()        
        expect(loc.Logout.isDisplayed()).toEqual(true);
        libs.deposit()
        expect(loc.alert.isDisplayed()).toEqual(true);
        expect(loc.balance.getText()).toEqual('1000');
    });

})
