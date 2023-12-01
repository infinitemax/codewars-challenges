// create the class

class Thing {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
}

// create instances of the class
const bannie = new Thing("Annie", 163);
const max = new Thing("Max", 183);
const hardasiron = new Thing("Hardasiron", 10);

// add a method to the class
Thing.prototype.sayHi = function(){
        console.log("Hello, I am " + this.name);
};

// create a new instance of the class
const cover = new Thing("Cover", 0.1);


// it seems that the new method is added to all instances of the class, which is ace.