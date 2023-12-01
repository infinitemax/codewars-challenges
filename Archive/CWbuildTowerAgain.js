/*
Build a pyramid-shaped tower, as an array/list of strings, 
given a positive integer number of floors. A tower block is 
represented with "*" character.

For example, a tower with 3 floors looks like this:


[
  "  *  ",
  " *** ", 
  "*****"
]

here is a crazy solution that uses Arry.from and String.repeat to create the tower.
Obvs I didn't come up with it!


*/

function towerBuilder(n) {
    return Array.from({length: n}, (x, ind) => x = "_".repeat(n-ind-1) + "*".repeat(ind + 1 + ind) + "_".repeat(n-ind-1))
}

towerBuilder(3)

