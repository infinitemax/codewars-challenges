var myLoveArray = ["Max", "Annie", "Cover", "Hardasiron", "Rabbit", "Rudolph"];
var myNumArray = [1,2,3,4,5];
var emptyArray = [];


var number = function(array) {

    return array.map((element, index) => (index+1) + ": " + element);

}



number(myLoveArray);

