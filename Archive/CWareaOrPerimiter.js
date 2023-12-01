/* You are given the length and width of a 4-sided polygon. 
The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

*/

const areaOrPerimeter = function(l , w) {
  // Return your answer

    // if(l === w){
    //     return l * w;
    // } else {
    //     return (l*2)+(w*2);
    // }


    //super short version using the conditional (ternary) operator "?"
    return l === w ? l*w  : (2*l)+(2*w)
    
};

areaOrPerimeter(5,5)
