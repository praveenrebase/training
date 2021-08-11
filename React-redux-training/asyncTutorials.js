

const jira = new Promise((reject, resolve) => {
    if (n * n === 25) {
        resolve("Success")
        return (n * n)
    }
    else {
        reject("Failed")
    }
}
)

jira(5).then(data => {
    console.log(data)
}).catch(err => {
    console.log("Rejected")
})