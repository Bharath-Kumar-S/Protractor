const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['Specs/*.js'],
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    rootElement: `*[ng-app]`,
    onPrepare: async () => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = false;
        browser.manage().deleteAllCookies().then(() => { console.log("cache cleared") }
        );
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots',
                screenshotsFolder: 'images',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true
            })
        );
    },
    // capabilities: {
    //     browserName: 'chrome'
    //     chromeOptions: {
    //         args: ['--disable-notifications']
    //     }
    // },
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }]
    // suites: {
    //     regression: ['Specs/spec.js', 'Specs/homepage.js'],
    //     sanity: 'Specs/sanity.js'
    // }
}