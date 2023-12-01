
// FROM GEEKS FOR GEEKS


// User defined class node
class Node {
    // constructor
    constructor(data) {
        this.data = data; // data
        this.next = null // pointer to next node
    }
}

// Linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add elements to the end of the list.
    // if the list is empty, the new node will 
    // become the head, if not it will be added
    // to the end of the list.
    add(element) {
    
            //create new node:-
        let node = new Node(element);
    
        // to store current node:-
        let current;
    
        // if list is Empty add the element and make it head:-
        if (this.head === null) {
            this.head = node;
        } else {
    
            // iterate through the list to the end:- 
            current = this.head;
            
            // use a while loop to iterate through to the end of the list:-
            while (current.next) {
                current = current.next
            }
    
            // add the new node to the end of the list:-
            current.next = node;
        }
        // increment size in the list:-
            this.size++;       
    }

    // INSERT AN ELEMENT AT A GIVEN INDEX
    insertAt(element, index) {

        // check validity of the index:-
        if (index < 0 || index > this.size) {
            return console.log("Invalid index, try again");
        } else {

            // create the node:-
            let node = new Node(element);

            // these variables are created to keep track of the current
            // and previous nodes (I guess to know where we are in the list):-
            let curr, prev;

            curr = this.head;

            // where the node is to be added to the top 
            // of the list (i.e. first index):-
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head; // I reckon this one is redundant...
                let it = 0; // "it" for iteration!

                // iterate over the list to find the position
                // at which we need to insert:-
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // add the element:-
                node.next = curr;
                prev.next = node;
            }
            size++;
        }
    }

    // REMOVE AN ELEMENT FROM A SPECIFIED LOCATION - removal is based 
    // on stating a specific index.

    removeFrom(index) {
        // check index is valid:-
        if (index < 0 || index > this.size) {
            return console.log("Invalid index, try again");
        } else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // if it's the first element to delete:-
            if (index === 0){
                this.head = curr.next;
            } else {
                // if it's a later element, we need to iterate
                // through the list to the position of the element:-
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element:-
                prev.next = curr.next;
            }
            this.size--;

            //return the element that has been removed:-
            return curr.element;
        }
    }

    // REMOVE AN ELEMENT BASED ON THE ELEMENT, i.e. stating
    // the element to be removed when the method is called.

    removeElement(element) {
        let curr = this.head;
        let prev = null;

        // iterate through the list and do stuff:-
        while (curr != null) { // note, I asked CGPT when curr will become null, and apparently it will happen when the end of the list is reached, presumably because the "next" of the final item is null.
            if (curr.data === element) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.element;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }

    ///////// HELPER METHODS

    // FIND THE INDEX OF AN ELEMENT

    indexOf(element) {
        let count = 0;
        let curr = this.head;
        let prev = null;

        // iterate through the list
        while (curr != null) {
            //compare with each element
            if (curr.data === element){
                return count;
            } else {
                count++;
                prev = curr;
                curr = curr.next;
            }
        }
        return -1;
    }

    // SEE IF THE LIST IS EMPTY

    isEmpty() {
        return !this.head;
    }

    // FIND THE LENGTH OF THE LIST

    sizeOfList() {
        let curr = this.head;
        let count = 0;

        while(curr != null) {
            count++;
            curr = curr.next;
        }
        return count;

        // this is one that I wrote but you can also simply do console.log(this.size);
    }

    // PRINT THE CONTENTS OF THE LIST

    logList() {
        let curr = this.head;

        while(curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    printList() {
        let curr = this.head;
        let str = "";

        while(curr != null) {
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
        
    }

    
}








/* FROM FREE CODE CAMP

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

*/