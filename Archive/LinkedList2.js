class Node {
    constructor(name, data){
        this.name = name,
        this.data = data,
        this.next = null
    }

    hello(){
        console.log(`${this.name} says hello!`)
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(name, data){
        let node = new Node(name, data)
        let current = this.head;
    
        
        if (this.head === null){
            this.head = node
            this.size++;
        } else {

            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = node;
        }
        console.log(`Added ${node.name}`)
    }

    logNames(){
        let current = this.head;
        let count = 0

        while(count < this.size){
            count++;
            console.log(current.name);
            current = current.next;
        }
    }

    returnFromIndex(index){
        if (index > this.size-1){
            console.log("invalid index")
        } else {
            let current = this.head;
            let prev;
            let count = 0;

            while(count < index){
                count++;
                current = current.next;
            }
            return current.name;

            
        }
    }

    randomHi(){
        let random = (Math.floor(Math.random() * this.size-1))+1
        console.log(`${this.returnFromIndex(random)} says ahoy there!`)
    }
}


function testHi(num){
    for (let i = 0; 1 < num; i++){
        loves.randomHi();
    };
}