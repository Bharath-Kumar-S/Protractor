const browser = require('protractor').browser;
const loc = require('../Pages/homepage').homepage;
const libs = require('../Pages/homepage').libs;

describe('Simple tests', () => {

    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('first test', () => {
        expect(browser.getTitle()).toEqual('Super Calculator');
    })

    it('should add one and two', () => {
        libs.add(1, 2);
        expect(loc.latest.getText()).toEqual('3');
    });

    it('should add four and six', () => {
        libs.add(4, 6);
        expect(loc.latest.getText()).toEqual('10');
    });

    // it('should sub six and four', () => {
    //     libs.sub(6, 4);
    //     expect(loc.latest.getText()).toEqual('2');
    // });

    it('should read the value from an input', () => {
        loc.input1.sendKeys(1);
        expect(loc.input1.getAttribute('value')).toEqual('1');
    });

    it('should have a history', function () {
        libs.add(4, 6);
        libs.add(4, 6);
        expect(loc.history.count()).toEqual(2);
        libs.add(4, 6);
        expect(loc.history.count()).toEqual(0); // This is wrong!
    });

    it('should have a history', function () {
        libs.add(1, 2);
        libs.add(3, 4);
        expect(loc.history.last().getText()).toContain('1 + 2');
        expect(loc.history.first().getText()).toContain('foo'); // This is wrong!
    });

})