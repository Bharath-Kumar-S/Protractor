const by = require('protractor').By;
const element = require('protractor').element;

exports.elements = {
    input1: element(by.model('first')),
    input2: element(by.model('second')),
    gobtn: element(by.id('gobutton')),
    latest: element(by.binding('latest'))
}