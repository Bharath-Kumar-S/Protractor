const by = require('protractor').by
const element = require('protractor').element

const loc = {
    user: element(by.cssContainingText('option', 'Ron Weasly')),
    Login: element(by.buttonText('Login')),
    Logout: element(by.buttonText('Logout')),
    Deposit: element(by.buttonText('Deposit')),
    balance: element(by.binding('amount')),
    Deposit_amount: element(by.xpath('//*[text()="Deposit"]')),
    input_amount: element(by.model('amount')),
    alert:element(by.cssContainingText('span','Deposit Successful'))
}
exports.loc = loc;

const lib = {
    login: () => {
        loc.user.click();
        loc.Login.click();
    },
    deposit: () => {
        loc.Deposit.click();
        loc.input_amount.sendKeys('1000');
        loc.Deposit_amount.click();
    },
    waitElementDisplayed(element) {
        return browser.wait(() => {
            return element.isDisplayed().then(function (displayed) {
                return displayed;
            });
        });
    }
}
exports.lib = lib;