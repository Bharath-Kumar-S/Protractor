const loc = require('../Pages/Webtable_pages').loc;
const libs = require('../Pages/Webtable_pages').libs;

describe('Way2automate webtable tests', () => {

    browser.ignoreSynchronization = false;

    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    })

    it('Check page title', () => {
        expect(browser.getTitle()).toEqual('Protractor practice website - WebTables');
    })

    it('Check the number of rows in webtable', () => {
        // expect(libs.getrowsCount()).toEqual(7)
        expect(libs.getrowsCount()).toEqual(6)
    })

    it('Print rows info of the webtable', () => {
        // expect(libs.getrows).toEqual(7)
        loc.webtable.each((e) => {
            let data = e.$$('td');
            // console.log('\n');
            data.each((f) => {
                f.getText().then((g) => {
                    console.log(g)
                })
            })
        })
    })


})