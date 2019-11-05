exports.config = {
    framework: 'jasmine',
    // seleniumAddress:'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['Specs/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }]
}