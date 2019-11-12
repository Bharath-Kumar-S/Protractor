const homepage = require('../Pages/homepage_pages').homepage;
const libs = require('../Pages/homepage_pages').libs

describe('Simple tests', function () {

    browser.ignoreSynchronization = false;

    beforeEach(function () {
        browser.driver.get('http://juliemr.github.io/protractor-demo/');
    });

    it('first test', function () {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        libs.add(1, 2);
        expect(homepage.latest.getText()).toEqual('3');
    });

    it('should sub two and one', function () {
        libs.sub(2, 1);
        expect(homepage.latest.getText()).toEqual('1');
    });

    it('should Multiply two and five', function () {
        libs.mul(2, 5);
        expect(homepage.latest.getText()).toEqual('10');
    });

    it('should Divide ten by five', function () {
        libs.div(10, 5);
        expect(homepage.latest.getText()).toEqual('2');
    });


    it('should calculate mod of ten by five', function () {
        libs.mod(10, 5);
        expect(homepage.latest.getText()).toEqual('0');
    });

    it('should read the value from an input', function () {
        homepage.input1.sendKeys(1);
        expect(homepage.input1.getAttribute('value')).toEqual('1');
    });

    it('should have a history', function () {
        libs.add(4, 6);
        libs.add(4, 6);
        expect(homepage.history.count()).toEqual(2);
        libs.add(4, 6);
        expect(homepage.history.count()).toEqual(3); // This is wrong!
    });

    it('should have a history', function () {
        libs.add(1, 2);
        libs.add(3, 4);
        expect(homepage.history.last().getText()).toContain('1 + 2');
        expect(homepage.history.first().getText()).toContain('3 + 4'); // This is wrong!
    });

})
