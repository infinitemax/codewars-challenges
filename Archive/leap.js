function isLeap(year) {

/**************Don't change the code above****************/    
    
    //Write your code here.    



// A year is a leap year if it is evenly divisible by 4 ;

if (year % 4 === 0 && year % 100 != 0) {
    console.log(year + " is a leap year") 
}

    
// }


    
}


isLeap(2004)

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.