class Node {
    constructor(letter){
        this.letter = letter;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null,
        this.size = 0
    }


    add(letter){

        let node = new Node(letter);

        if (this.head === null) {
            this.head = node;
            this.size++;
            console.log(`added ${letter}`);
        } else {

            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
            console.log(`added ${letter}`);
        }
    }

    printTogether() {
        let current = this.head;
        let print = "";

        
        while (current != null) {
            print = print + current.letter;
            current = current.next;
        };
        return print;
    }
}


function stringToList(str, list) {
    const stringArray = str.split("");

    stringArray.forEach(e => {
        list.add(e);
    })
}