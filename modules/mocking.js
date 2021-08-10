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
}

module.exports = Mocking