const Percent = require("./../modules/find_percent")

const assert = require("assert")

describe("Tests on Percentage", () => {
    describe("Test on Calculate", () => {
        beforeEach(() => {
            p1 = new Percent
        })

        it("passed total argument 0", () => {
            assert.equal(p1.calculate(3000, 0), "Invalid: Total marks could not be 0 or empty")
        })

        it("Passed marks > total", () => {
            assert.equal(p1.calculate(3000, 2000), "150.00 Invalid")
        })

        it("When Student Failed", () => {
            assert.equal(p1.calculate(300, 2000), "15.00 Failed")
        })


    })
})