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

pseudo-code:

create space
create block
create layer add space to block

Task: create blocks

*/

function towerBuilder(nFloors) {
  // build here

  const tower = [];
  let blockCount = 1;
  let spaceCount = nFloors-1;
  let space = "";

  for (let j = 0; j < nFloors; j++){
    
    let space = "";
    for (let i = 0; i < spaceCount; i++){
      space = space + " ";
    }

    let block = "";
    for (let i = 0; i < blockCount; i++){
      block = block + "*";
    }
    
    let layer = space + block + space;
    tower.push(layer);
    blockCount += 2;
    spaceCount--;
  }
  return tower;
};

towerBuilder(4)
















    // const tower = [];
    // let level = 1;

    // for(j = 0; j < nFloors; j++){
        

    //     // create space
    //     let space = "";
    //     for (let i = 1; i < nFloors-2; i++){
    //         space = space + "_";
    //     }
        
    //     // create block
    //     let block = "";
    //     for (let i = 0; i < level; i++){
    //         block = block + "*";
    //     }
        
    //     // create layer add space to block
    //     let layer = space + block + space;

        
    //     // add to tower
    //     tower.push(layer);
    //     nFloors = nFloors-1;
    //     level++;
    // }
    // return tower;