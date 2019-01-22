var { JSDOM } = require('jsdom');
 
describe('index.html', function () {
 
    var browser;
 
    beforeEach(function (done) {
        JSDOM.fromFile('../../index.html', function () {
 
        }).then(function (resp) {
            browser = resp;
            done();
        });
    });
 
    afterEach(function () {
        browser.window.close();
    });
 
    it('has start-button element', function () {
        var el = browser.window.document.querySelector('#btn');
        expect(el).not.toBe(null);
    })
})

describe('ss', function() {
  it('true', function(){
    expect(true).toBe(true);
  })
})