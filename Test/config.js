exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['Specs/*.js'],
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    rootElement: `*[ng-app]`,
    onPrepare: async () => {
    //     // await browser.waitForAngularEnabled(false);
        await browser.driver.manage().window().maximize();
        await browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = false;
        browser.manage().deleteAllCookies().then(() => { console.log("cache cleared") }
        );
    },
    // capabilities: {
    //     browserName: 'chrome'
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