/*

You're going on a trip with some students and 
it's up to you to keep track of how much money 
each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, 
and twenties. Your job is to return the name of the 
student with the most money. If every student has 
the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person 
has the most, or everyone has the same amount
If there is only one student, then that student has the 
most money

*/

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 0);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);



function mostMoney(students) {
  // your code here
  

    // calculate a student's total cash, by adding a total method.

    Student.prototype.total = function(){
        let fivesTotal = this.fives * 5,
            tensTotal = this.tens * 10,
            twentiesTotal = this.twenties * 20;

        return fivesTotal + tensTotal + twentiesTotal;

    }

    let richest = students[0];
    let parityCheckArray = [];

    students.forEach(student => {
        parityCheckArray.push(student.total())
    })



    if (students.length === 1){
        // single student
        // console.log(students[0].name + ' has a total of ' + students[0].total());
        // console.log("only one: " + students[0].name);
        return students[0].name;
        
    } else if (checkParity(parityCheckArray)){
    // check for all having the same 
    
        return "all";
        
    } else {

    // where one is richest
        
        students.forEach(student => {
            // console.log(student.name + ' has a total of ' + student.total());
            if (richest.total() < student.total())
            {
                richest = student;
            }
        });

        
        return richest.name;

        
    }


      

}


function checkParity(array){

    const max = Math.max(...array);
    const min = Math.min(...array);

    if (min === max){
        return true;
    } else {
        return false;
    }

}

console.log("test: one has most");
mostMoney([andy, stephen, eric, david, phil]);

// console.log("test: one student")
// mostMoney([andy]);

// console.log("test: all have the same")
// mostMoney([cam, geoff])
