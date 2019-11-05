const by = require('protractor').By;
const element = require('protractor').element;

exports.homepage = {
    input1: element(by.model('first')),
    input2: element(by.model('second')),
    gobtn: element(by.id('gobutton')),
    latest: element(by.binding('latest')),
    history: element.all(by.repeater('result in memory')),
    operator: {
        add: element(by.model("operator")).sendKeys('+'),
        sub: element(by.model("operator")).sendKeys('-'),
        div: element(by.model("operator")).sendKeys('/'),
        mul: element(by.model("operator")).sendKeys('*'),
        mod: element(by.model("operator")).sendKeys('%')
    }
}

exports.libs = {
    add: (a, b) => {
        this.libs.input(a, b);
        this.homepage.operator.add;
        this.homepage.gobtn.click();
    }, sub: (a, b) => {
        this.libs.input(a, b);
        this.homepage.operator.sub;
        this.homepage.gobtn.click();
    }, mul: (a, b) => {
        this.libs.input(a, b);
        this.homepage.operator.mul;
        this.homepage.gobtn.click();
    }, div: (a, b) => {
        this.libs.input(a, b);
        this.homepage.operator.div;
        this.homepage.gobtn.click();
    }, mod: (a, b) => {
        this.libs.input(a, b);
        this.homepage.operator.mod;
        this.homepage.gobtn.click();
    }, input: (a, b) => {
        this.homepage.input1.sendKeys(a);
        this.homepage.input2.sendKeys(b);
    }
}