const axios = require("axios")


export const registerMyName = (data) => {
    try {
        const visitors = axios.post("http://192.168.42.250:5000", { name: data })
        return visitors
    } catch (error) {
        console.log("Found Error", error)

    }
}