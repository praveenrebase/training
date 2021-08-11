const fs = require('fs')

console.log("Hello world")

//Print multiple occurance
const arr = [1, 2, 3, 4, 4, 2, 4, 1]

let list = []
let repeated = {
}
// arr.map(item => {
//     if (list.includes(item)) {
//         repeated.push(item)
//     } else {
//         list.push(item)
//     }
// })

// const occurance = arr => {
//     result = {}
//     arr.map(item => {
//         if (result[item]) {
//             result[item] += 1
//         } else {
//             result[item] = 1
//         }
//     })

//     return result
// }

// console.log(occurance(arr))



// const vowels = ['A', 'E', 'I', 'O', 'U']

// const consonents = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']

// const findVowelConsonent = name => {
//     const result = {
//         vowel: 0,
//         consonent: 0
//     }

//     for (let i = 0; i < name.length; i++) {
//         const char = name[i].toUpperCase()
//         if (vowels.includes(char)) {
//             result.vowel += 1
//         } else if (consonents.includes(char)) {
//             result.consonent += 1
//         }
//     }
//     return result
// }

// console.log(findVowelConsonent(name))

const name = "Praveen PrajapaTi is on interview"


const rShift = (name) => {
    const words = name.split(" ")
    const last = words[words.length - 1]
    const start = words.slice(0, words.length - 2)
    return [last, ...start].join(" ")
}

console.log(rShift(name))

// fs.mkdirSync("newFile")

// for (let i = 0; i < 5000; i++) {
//     fs.unlink(`${__dirname}/newFiles/text-${i}.txt`, (err) => {
//         if (err) {
//             pass
//         }
//         else {
//             return console.log("File deleted Successfully")
//         }
//     })
// }

// for (let i = 0; i < 5000; i++) {
//     fs.unlinkSync(`${__dirname}/newFile/text-${i}.txt`)
// }