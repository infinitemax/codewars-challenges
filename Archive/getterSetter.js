const person = {
    fName: "Max",
    lName: "BB",
    get fullName() {
        return `${this.fName} ${this.lName}`
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

console.log(person.fullName)

// person.fullName = "Annie BB"