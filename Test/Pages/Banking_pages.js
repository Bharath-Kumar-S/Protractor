const by = require('protractor').by
const element = require('protractor').element

const loc = {
    customer_login: element(by.css('[ng-Click="customer()"]')),
    manager_login: element(by.css('[ng-click="manager()"]')),
    customer: {
        user: element(by.cssContainingText('option', 'Ron Weasly')),
        Login: element(by.buttonText('Login')),
        Logout: element(by.buttonText('Logout')),
        Deposit: element(by.buttonText('Deposit')),
        balance: element(by.binding('amount')),
        Deposit_amount: element(by.xpath('//*[text()="Deposit"]')),
        input_amount: element(by.model('amount')),
        alert: element(by.cssContainingText('span', 'Deposit Successful')),
        account: element(by.binding('account')),
    },
    manager: {
        addCustomer: element(by.css('[ng-click="addCust()"]')),
        openAccount: element(by.css('[ng-click="openAccount()"]')),
        listCustomers: {
            btn: element(by.css('[ng-click="showCust()"]')),
            table: element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'))
        }
    }

}
exports.loc = loc;

const lib = {
    login: () => {
        loc.customer_login.click();
        loc.customer.user.click();
        loc.customer.Login.click();
    },
    manager_login: () => {
        loc.manager_login.click();
    },
    deposit: (e) => {
        loc.customer.Deposit.click();
        loc.customer.input_amount.sendKeys(e);
        loc.customer.Deposit_amount.click();
    },
    countCustomers: async () => {
        loc.manager.listCustomers.btn.click()
        let rows = await loc.manager.listCustomers.table.count();
        return rows;
    },
    getAllCustomers: async () => {
        loc.manager.listCustomers.btn.click()
        let rows = loc.manager.listCustomers.table.get(0);
        let cells = rows.$$('td');
        let data = await cells.get(0).getText();
        console.log(data);
        return data;
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