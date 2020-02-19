describe("Google Test", () => {
    it("should go to google and click Sauce Labs", () => {
        for (let index = 0; index < 5; index++) {
            
            browser.url("https://google.com");
    
            const searchBar = $("[name='q']")
            
            searchBar.setValue("Sauce Labs");
            searchBar.click();
        
        }
    })

})