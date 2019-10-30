describe("Login The Internet Heroku app", () => {
    it("should enter username and password", () => {
        browser.url("https://the-internet.herokuapp.com/login");

        let username = $("#username")
        username.setValue("tomsmith")
        
        let password = $("#password")
        password.setValue("SuperSecretPassword!");

        $(".radius").click()
        
        browser.pause(5000)
    })
})