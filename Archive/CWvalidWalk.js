/*

You live in the city of Cartesia where all roads are laid out in a perfect grid. 
    You arrived ten minutes too early to an appointment, so you decided to take 
    the opportunity to go for a short walk. The city provides its citizens with 
a Walk Generating App on their phones -- everytime you press the button it sends 
    you an array of one-letter strings representing directions to walk 
        (eg. ['n', 's', 'w', 'e']). You always walk only a single block 
        for each letter (direction) and you know it takes you one minute to 
            traverse one city block, so create a function that will return true if 
the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
    and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction 
    letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
  //insert brilliant code here

    // discount walks that are too long or too short
    
    if(walk.length != 10){
        console.log(walk);
        return false;
    }

    // see if we get back to the start
    
    let nsCount = 0;
    let ewCount = 0;


    // I find this very unsatisfactory, I'm sure there's a better way to check the characters.
    // an alternative is using swtich statements! See version 2!
    walk.forEach(element => {
        if (element === "n"){
            nsCount++;
        } else if (element === "s") {
            nsCount--;
        } else if (element === "e"){
            ewCount++;
        } else {
            ewCount--;
        } 
    });
    
    if(nsCount === 0 && ewCount === 0){
        console.log(walk);
        return true;
    } else {
        console.log(walk);
        return false;
    }
  
}

const myWalk = [  'n', 'w', 'n', 'w',
  'n', 'w', 'n', 'w',
  'n', 'w'
               ];

isValidWalk(myWalk);