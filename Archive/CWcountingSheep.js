function countSheeps(arrayOfSheep) { 
    var sheep = 0
    arrayOfSheep.forEach((e) => {if (e===true)sheep++});
    return sheep;
}

var field = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

countSheeps(field);