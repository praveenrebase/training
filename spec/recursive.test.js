// const createNode = require('./recursive')

const recursive = require('./../modules/recursive')
const assert = require('assert')

describe("Creating the NODE", () => {
    beforeEach(() => {
        NODE = {
            name: "A",
            description: "root",
            children: []
        }
    })

    describe("createNode", () => {
        tests = [
            {
                description: "S",
                expected: true,
                query: recursive.createNode(NODE, "B", "node 1", "A")
            },
            {
                description: "Eliminate node without name entry",
                expected: false,
                query: recursive.createNode(NODE, "", "node 1", "A")
            },
            {
                description: "Reject node already present",
                expected: false,
                query: recursive.createNode(NODE, "B", "node 1", "A")
            },
            {
                description: "Make description compolsory",
                expected: false,
                query: recursive.createNode(NODE, "C", "", "A")
            }
        ],
            tests.forEach(test => {
                it(test.description, () => {
                    assert.equal(test.query, test.expected);
                });
            });
    })

});