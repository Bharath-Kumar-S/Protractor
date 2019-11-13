const by = require('protractor').by
const element = require('protractor').element
const expected = require('protractor').ExpectedConditions
const browser = require('protractor').browser


const loc = {
    webtable: element.all(by.repeater('dataRow in displayedCollection'))
}

exports.loc = loc

const libs = {
    getrowsCount: () => {
        return loc.webtable.count()
    },
    getrows: () => {
        
    }
}

exports.libs = libs