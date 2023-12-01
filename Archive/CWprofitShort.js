// a very short version using Math.max() and Math.min().

// going to try it with reduce() as apparently Math.min/max will fail on 
// arrays with lots of elements

function minMax(arr){
    return [(Math.min(...arr)),(Math.max(...arr))]
}

var myArr = [1,2,3,4,5,23,3,5]

minMax(myArr);