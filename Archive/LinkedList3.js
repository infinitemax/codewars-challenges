class Node {
    constructor(data) {
        this.data = data,
        this.next = null
    }
}


class LinkedList {

    constructor(name) {
        this.head = null,
        this.size = 0
    }

    add(data) {
        let node = new Node(data);

        if (this.head === null) {
            this.head = node;
            console.log(`added ${data}`)
            this.size++;
        } else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
            this.size++;
            console.log(`added ${data}`)
        }
    }

    logList(){
        let current = this.head;
        let count = 0;

        while (count < this.size) {
            console.log(current.data);
            current = current.next;
            count++;
        }
        
    }
    
}

// list of lists, and a create list function. 
// this create function creates a list with a given name
// and sticks it in the listOfLists object.
// To use the methods of the list you need to do:
// listOfLists.name.add()
// rather than binding it to a variable.

const listOfLists = {};

function createList(name) {
    const list = new LinkedList();
    listOfLists[name] = list;
    return list;
}


function addToList(array, list) {

    // Q - how do I get it to check whether the list exists?
    if (typeof list === "undefined") {
        console.log("hello")
        // let list = new LinkedList();
        // array.forEach((e) => {
        //     list.add(e);
        // })
    } else {
        array.forEach((e) => {
            list.add(e);
        })
    }
}

function listExist(list) {
    if (!list) {
        console.log(`${list} doesn't exist`)
    } else if (list) {
        console.log(`${list} does exist`)
    }
}