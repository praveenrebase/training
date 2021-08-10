class Percent {
    calculate(marks, total) {
        if (total && total != 0) {
            try {
                let raw = (marks / total) * 100

                return raw.toFixed(2) + " " + this.ratePerformance(raw.toFixed(2))
            }
            catch (error) {
                console.log("Error")
                return (error)
            }
        }
        return ("Invalid: Total marks could not be 0 or empty")
    }


    ratePerformance(score) {
        if (score < 40) {
            return "Failed"
        }
        if (score < 60) {
            return "Just Pass"
        }
        if (score < 80) {
            return "Very Good"
        }
        if (score <= 100) {
            return "Exellent"
        }
        return "Invalid"

    }
}

// const p1 = new Percent()

// console.log(p1.calculate(110))

module.exports = Percent