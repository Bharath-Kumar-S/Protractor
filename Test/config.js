const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['Specs/*.spec.js'],
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    rootElement: `*[ng-app]`,
    onPrepare: async () => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = false;
        browser.manage().deleteAllCookies().then(() => { console.log("cache cleared") }
        );
         //Add custom reporter which only counts 
         jasmine.getEnv().addReporter({
            jasmineStarted: function (suiteInfo) {
                console.log(`Due to execute #${suiteInfo.totalSpecsDefined} specs in total`);
            }
        });
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots',
                screenshotsFolder: 'images',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true
            })
        );
    },
    capabilities: {
        browserName: 'chrome',
    //     chromeOptions: {
    //         args: ['--disable-notifications',"--headless","--disable-gpu","--window-size=800,600","--no-sandbox","--disable-dev-shm-usage"]
    //     }
    }
    // multiCapabilities: [
    //     {
    //         browserName: 'firefox',
    //         firefoxOptions: {
    //             args: ['--headless']
    //         },
    //         'moz:firefoxOptions': {
    //             args: ['--headless']
    //         }
    //     }
    // ]

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