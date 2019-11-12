// http://www.way2automation.com/angularjs-protractor/banking/#/customer
const loc = require('../Pages/Banking_pages').loc;
const libs = require('../Pages/Banking_pages').lib

describe('Simple tests', () => {

    beforeEach(() => {
        browser.driver.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });

    it('first test - Check for title', () => {
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
    });

    it('first test - Login successfull', () => {
        libs.login()
        expect(loc.customer.Logout.isDisplayed()).toEqual(true);
    });

    it('Deposit amount - Check for title', async () => {
        let amount = '1000';
        libs.login();
        expect(loc.customer.Logout.isDisplayed()).toEqual(true);
        libs.deposit(amount);
        expect(loc.customer.alert.isDisplayed()).toEqual(true);
        expect(loc.customer.balance.getText()).toEqual(amount);
        let a = await loc.customer.account.getText();
        console.log(a);
    });

    it('Check webtable - list customers - banking', async () => {
        libs.manager_login();
        expect(loc.manager.addCustomer.isDisplayed()).toEqual(true)
        expect(loc.manager.listCustomers.btn.isDisplayed()).toEqual(true)
        expect(loc.manager.openAccount.isDisplayed()).toEqual(true)
        expect(libs.countCustomers()).toEqual(5)
    });

    it('Check webtable - list customers - banking', async () => {
        libs.manager_login();
        expect(loc.manager.addCustomer.isDisplayed()).toEqual(true)
        expect(loc.manager.listCustomers.btn.isDisplayed()).toEqual(true)
        expect(loc.manager.openAccount.isDisplayed()).toEqual(true)
        expect(libs.getAllCustomers()).toEqual('Hermoine');

    });

})
