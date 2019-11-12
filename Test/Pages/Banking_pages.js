const by = require('protractor').by
const element = require('protractor').element
const expected = require('protractor').ExpectedConditions
const browser = require('protractor').browser

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
        },
        adduser: {
            fname: element(by.model('fName')),
            lname: element(by.model('lName')),
            postalcode: element(by.model('postCd')),
            add_customer_btn: element(by.xpath('//button[text()="Add Customer" and @type="submit"]'))
        },
        createAccount: {
            process_btn: element(by.buttonText('Process'))
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
    add_customer: async (data) => {
        let { fname, lname, postal } = data;
        loc.manager.addCustomer.click();
        loc.manager.adduser.fname.sendKeys(fname);
        loc.manager.adduser.lname.sendKeys(lname);
        loc.manager.adduser.postalcode.sendKeys(postal);
        loc.manager.adduser.add_customer_btn.click()
        await browser.wait(expected.alertIsPresent(), 5000)
        let alert = await browser.switchTo().alert();
        let alertText = await alert.getText();
        await alert.accept();
        browser.sleep(1000);
        return alertText;
    },
    open_account: async (data) => {
        let { fname, currency, lname } = data;
        loc.manager.openAccount.click();
        element(by.cssContainingText('option', `${fname} ${lname}`)).click();
        element(by.cssContainingText('option', currency)).click();
        loc.manager.createAccount.process_btn.click();
        await browser.wait(expected.alertIsPresent(), 5000);
        let alert = await browser.switchTo().alert();
        let alertText = await alert.getText();
        await alert.accept();
        return alertText;
    },
    delete_account: async (data) => {
        let { fname } = data;
        loc.manager.listCustomers.btn.click()
        let rows = loc.manager.listCustomers.table;
        rows.each(async (row) => {
            let cells = row.$$('td');
            let cell_data = await cells.get(0).getText();
            if (cell_data == fname) {
                cells.get(4).$('button').click();
            }
        })
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