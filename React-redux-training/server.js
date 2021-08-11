const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    const name = "Hello " + req.query.name
    let available = fs.readFileSync("students.json").toString()
    available = JSON.parse(available)
    available.push(name)
    fs.writeFileSync('students.json', JSON.stringify(available))
    res.send(`<h2>${name}</h2>`)
})

app.post("/", (req, res) => {
    try {
        console.log(req.body)
        const name = req.body.name
        let availableData = fs.readFileSync("students.json").toString()
        if (availableData === "") {
            availableData = "[]"
        }
        availableData = JSON.parse(availableData)
        const count = availableData.length
        if (availableData.includes(name)) {
            res.json([
                {
                    message: "Success",
                    totalVisitors: count
                }
            ])

        } else {
            availableData.push(name)
            fs.writeFileSync('students.json', JSON.stringify(availableData))
            res.json([
                {
                    message: "Success",
                    totalVisitors: count + 1
                }
            ])
        }
    } catch (error) {
        res.status(401).send("Error: " + error)
    }
})


app.listen(5000, () => {
    console.log("Server is running")
})