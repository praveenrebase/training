class Mocking {

    greet(name) {
        console.log("Hello ", name)
    }

    signUp(name, contact, email, password) {
        this.greet(name)

        if (name && contact && email && password)
            return ("You got a new acconnt")

        return ("Ivalid Entries")
    }

    logIn(email, password) {
        const result = this.thirdPartyAuth(email, password)
        return result
    }

    thirdPartyAuth(email, password) {
        if (email === "praveen@gmail.com") {
            if (password === "12344") {
                return true
            }
            return false
        }
        return false
    }
}

module.exports = Mocking