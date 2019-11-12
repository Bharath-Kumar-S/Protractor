const homepage = {
    input1: element(by.model('first')),
    input2: element(by.model('second')),
    gobtn: element(by.id('gobutton')),
    latest: element(by.binding('latest')),
    history: element.all(by.repeater('result in memory')),
    operator: {
        add: element(by.cssContainingText('option', '+')),
        sub: element(by.cssContainingText('option', '-')),
        mul: element(by.cssContainingText('option', '*')),
        mod: element(by.cssContainingText('option', '%')),
        div: element(by.cssContainingText('option', '/'))
    }
}

exports.homepage = homepage;

const libs = {
    add: (a, b) => {
        libs.input(a, b);
        homepage.operator.add.click();
        homepage.gobtn.click();
    }, sub: (a, b) => {
        libs.input(a, b);
        homepage.operator.sub.click();
        homepage.gobtn.click();
    }, mul: (a, b) => {
        libs.input(a, b);
        homepage.operator.mul.click();
        homepage.gobtn.click();
    }, div: (a, b) => {
        libs.input(a, b);
        homepage.operator.div.click();
        homepage.gobtn.click();
    }, mod: (a, b) => {
        libs.input(a, b);
        homepage.operator.mod.click();
        homepage.gobtn.click();
    }, input: (a, b) => {
        homepage.input1.sendKeys(a);
        homepage.input2.sendKeys(b);
    }
}

exports.libs = libs;