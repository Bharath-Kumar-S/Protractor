const protractor = require('protractor')

describe('To test non angular site', () => {

    it('Simple test for non angular page', () => {
        browser.ignoreSynchronization = true;
        browser.actions().sendKeys(protractor.Key.F5).perform();
        browser.get('https://www.google.com')
        element(by.xpath('//input[@name = "q"]')).sendKeys("Protractor")
        element(by.xpath('//input[@name="btnK" and @value="Google Search"]')).submit();
        let expected = protractor.ExpectedConditions;
        browser.wait(expected.visibilityOf(element(by.xpath('//h3[text()="Protractor - end-to-end testing for AngularJS"]'))));
        expect(element(by.xpath('//h3[text()="Protractor - end-to-end testing for AngularJS"]')).getText()).toContain('Protractor')
    })

})