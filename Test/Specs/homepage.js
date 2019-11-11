const homepage = require('../Pages/homepage_pages').homepage;
const libs = require('../Pages/homepage_pages').libs

describe('Simple tests', function () {

    beforeEach(function () {
        browser.driver.get('http://juliemr.github.io/protractor-demo/');
    });

    it('first test', function () {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        libs.add(1, 2);
        expect(homepage.latest.getText()).toEqual('4');
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


describe('Simple 1 tests', function () {

    beforeEach(function () {
        browser.driver.get('http://juliemr.github.io/protractor-demo/');
    });

    it('first test', function () {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        libs.add(1, 2);
        expect(homepage.latest.getText()).toEqual('4');
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