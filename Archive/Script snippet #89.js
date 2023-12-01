

class ListItem {
    constructor (data) {
        this.data = data,
        this.next = null
    }

}


class LinkedList {
    constructor (name) {
        this.head = null,
        this.size = 0
    }

    add(data) {
        const node = new ListItem(data);
        let current = this.head;

        if (this.head === null) {
            this.head = node;
        } else {
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}


function addLoads(word) {
    word.split("").forEach(e => {
        hello.add(e)
    })
}

function loop_size(node) {
    const startingNode = node;
    let current = node;
    let count = 1;

    while (current.next != startingNode){
        current = current.next;
        count++;
    }
    return count;

}

function makeLoop(list){
    let current = list.head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = list.head;
}

function printList(list){
    let current = list.head;
    while (current.next != null) {
        console.log(current.data);
        current = current.next;
    }
    console.log(current.data);
}