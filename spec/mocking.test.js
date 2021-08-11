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

    it("spying the greet method", () => {
        let spy = sinon.spy(mockInstance, "greet")
        mockInstance.signUp("Praveen", "8554947569", "praveen@gmail.com", "12344")
        sinon.assert.calledOnce(spy)
    })

    it("Using chais expectation for assertion in spying", () => {
        let spy = sinon.spy(mockInstance, "greet")
        mockInstance.signUp("Praveen", "8554947569", "praveen@gmail.com", "12344")
        expect(spy.calledOnce).to.be.true
    })

    it("mockng the greeting", () => {
        let mockGreet = sinon.mock(mockInstance)
        let expectation = mockGreet.expects("greet")
        expectation.exactly(1)
        mockInstance.signUp("Praveen", "8554947569", "praveen@gmail.com", "12344")
        mockGreet.verify()
    })

    it("mocking thirdParyAuth using sinon stub", () => {
        sinon.stub(mockInstance, "thirdPartyAuth").callsFake(() => {
            return true
        })
        expect(mockInstance.logIn("praveen@gmail.com", "12344")).to.be.true
    })

    it("stub thirdParyAuth failed", () => {
        sinon.stub(mockInstance, "thirdPartyAuth").callsFake(() => {
            return false
        })
        expect(mockInstance.logIn("praveen", "1")).to.be.false
    })
})
