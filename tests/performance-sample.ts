const datetime = new Date();

describe(`enriquegh.com performance test ${datetime}`, ()=> {
    it.only("should go to enriquegh.com", ()=> {
        browser.url("https://enriquegh.com")
        browser.getTitle();
        browser.execute("console.log('Sent from webdriver.io!');");
    })

    it("should go to enriquegh.com and use performance log JS command", ()=> {
        browser.url("https://enriquegh.com")
        browser.getTitle();
        browser.execute("sauce:log", {"type":"sauce:performance"})
    })

    it("should go to enriquegh.com and use network log JS command", ()=> {
        browser.url("https://enriquegh.com")
        browser.getTitle();
        browser.execute("sauce:log", {"type":"sauce:network"})
    })

    it("should go to enriquegh.com and use performance log wdio command", ()=> {
        browser.url("https://enriquegh.com")
        browser.getTitle();
        browser.getPageLogs("sauce:performance")
    })
    
    it("should go to enriquegh.com and use network log wdio command", ()=> {
        browser.url("https://enriquegh.com")
        browser.getTitle();
        browser.getPageLogs("sauce:network")
    })

})