let NODE = {
  name: "A",
  decription: "root",
  children: []
}

function createNode(NODE, name, description, parent) { 
    if (DFS(NODE, name)) {
        console.log(`Node with name ${name} already present in tree`)
        return false
    }
    else{
        if (NODE.name === parent) {
            NODE.children.push({
              name: name,
              description: description,
              children: [],
            });
            return true;
          }
        
          if (NODE.children.length !== 0) {
            for (let i = 0; i < NODE.children.length; i++) {
                const success = createNode(NODE.children[i], name, description, parent);
                if (success) break;
              }
            }
            return false;
    }
  
}


// Depth Fist Serach Tree
// takes two argument 1. root Node 2. Name of Node to be serached

function DFS(NODE, name="Dummy") {
    console.log(NODE.name)
    

    if (NODE.name === name) 
        return true;

    if(NODE.children.length != 0){

        for (let i = 0; i < NODE.children.length; i++){

            if (DFS(NODE.children[i], name) === true) {
                return true
            }
        }
    }
    return false;
}


// Breadth first Search
let visited = []
function BFS(NODE)
{
    if (NODE) {
        if (NODE.children.length === 0) {
            return
        }
        for (let i=0; i<NODE.children.length; i++){
            BFS(NODE.children[i])
        }
    }
}


//Firing some Entrys
function makeSomeEntry() {
    createNode(NODE, "B", "child1", "A");
    createNode(NODE, "C", "child1", "A");

    createNode(NODE, "D", "child1", "B");
    createNode(NODE, "E", "child1", "B");
    createNode(NODE, "F", "child1", "B");
    createNode(NODE, "G", "child1", "B");

    createNode(NODE, "H", "child1", "C");
    createNode(NODE, "I", "child1", "C");

    createNode(NODE, "J", "child1", "D");
    createNode(NODE, "K", "child1", "D");

    createNode(NODE, "L", "child1", "E");

    createNode(NODE, "M", "child1", "L");
    createNode(NODE, "N", "child1", "L");

    createNode(NODE, "O", "child1", "H");

    createNode(NODE, "T", "child1", "I");

    createNode(NODE, "P", "child1", "O");
    createNode(NODE, "Q", "child1", "O");

    createNode(NODE, "R", "child1", "P");

    createNode(NODE, "S", "child1", "R");

    createNode(NODE, "U", "child1", "T");
    createNode(NODE, "V", "child1", "T");

    createNode(NODE, "W", "child1", "V");
    createNode(NODE, "X", "child1", "V");


    createNode(NODE, "Y", "child1", "X");
    createNode(NODE, "Z", "child1", "Y");

    console.log(NODE);
}

makeSomeEntry()

// BFS(NODE)


console.log(DFS(NODE))
