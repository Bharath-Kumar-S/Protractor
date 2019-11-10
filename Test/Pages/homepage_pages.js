const homepage = {
    input1: element(by.model('first')),
    input2: element(by.model('second')),
    gobtn: element(by.id('gobutton')),
    latest: element(by.binding('latest')),
    history: element.all(by.repeater('result in memory'))
}

exports.homepage = homepage;

const libs = {
    add: (a, b) => {
        libs.input(a, b);
        // homepage.operator.add;
        homepage.gobtn.click();
    }, sub: (a, b) => {
        libs.input(a, b);
        // homepage.operator.sub;
        homepage.gobtn.click();
    }, mul: (a, b) => {
        libs.input(a, b);
        // homepage.operator.mul;
        homepage.gobtn.click();
    }, div: (a, b) => {
        libs.input(a, b);
        // homepage.operator.div;
        homepage.gobtn.click();
    }, mod: (a, b) => {
        libs.input(a, b);
        // homepage.operator.mod;
        homepage.gobtn.click();
    }, input: (a, b) => {
        homepage.input1.sendKeys(a);
        homepage.input2.sendKeys(b);
    }
}

exports.libs = libs;