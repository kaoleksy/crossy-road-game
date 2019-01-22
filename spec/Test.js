var { JSDOM } = require('jsdom');
describe('index.html', function () {
    var browser;
    beforeEach(function (done) {
        JSDOM.fromFile('/home/kasia/Pulpit/io-projekt/index.html', function () {
 
        }).then(function (resp) {
            browser = resp;
            done();
        });
    });
 
    afterEach(function () {
        browser.window.close();
    });

    it('has reset button', function () {
        var el = browser.window.document.querySelector('#btn');
        expect(el).not.toBe(null);
    });

    it('has canvas element', function () {
        var el = browser.window.document.getElementsByTagName("canvas");
        expect(el).not.toBe(null);
    });

    it('has score field', function () {
        var el = browser.window.document.querySelector(".score-field");
        expect(el).not.toBe(null);
    });

    it('has lives field', function () {
        var el = browser.window.document.querySelector(".lives-field");
        expect(el).not.toBe(null);
    });

    it('has playerList field', function () {
        var el = browser.window.document.querySelectorAll(".char-image");
        expect(el).not.toBe(null);
    });
});

describe('At begin ', function () {
    var browser;
    beforeEach(function (done) {
        JSDOM.fromFile('/home/kasia/Pulpit/io-projekt/index.html', function () {
 
        }).then(function (resp) {
            browser = resp;
            done();
        });
    });
 
    afterEach(function () {
        browser.window.close();
    });
    
    it('user has 3 lives', function () {
        var el = browser.window.document.querySelector('#lives').innerHTML;
        expect(el).toBe("3");
    });

    it('user has 0 score', function () {
        var el = browser.window.document.querySelector('#result').innerHTML;
        expect(el).toBe("0");
    });
});