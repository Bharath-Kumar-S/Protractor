const browser = require('protractor').browser;
const loc = require('./Locators/elements').elements;


describe('Simple tests', () => {

    it('first test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    })

    it('should add one and two', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        loc.input1.sendKeys(1);
        loc.input2.sendKeys(2);
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).
            toEqual('3'); // This is wrong!
    });

})

describe('Protractor Demo App', function () {

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        loc.input1.sendKeys(1);
        loc.input2.sendKeys(2);
        loc.gobtn.click();
        expect(loc.latest.getText()).toEqual('3');
    });

    it('should add four and six', function () {
        // Fill this in.
        loc.input1.sendKeys(4);
        loc.input2.sendKeys(6);
        loc.gobtn.click();
        expect(loc.latest.getText()).toEqual('10');
    });

    it('should read the value from an input', function () {
        loc.input1.sendKeys(1);
        expect(loc.input1.getAttribute('value')).toEqual('1');
    });
});