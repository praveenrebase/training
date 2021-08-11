const mocking = require("./../modules/mocking")

const chai = require("chai")
const sinon = require("sinon")

const expect = chai.expect


describe("Mocking", () => {

    beforeEach(() => {
        mockInstance = new mocking()
    })

    it("Without mockng the greeting", () => {
        expect(mockInstance.signUp("Praveen", "8554947569", "praveen@gmail.com", "12344")).to.be.equal("You got a new acconnt")
    })

    it("mockng the greeting", () => {

        mockGreet = sinon.mock(mocking, "greeting")
        mockGreet.expects("greeting").once().throws();
        expect(mockInstance.signUp("Praveen", "8554947569", "praveen@gmail.com", "12344")).to.be.equal("You got a new acconnt")
    })
})
