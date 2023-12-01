/*
Sum of the first nth term of Series

Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/

function SeriesSum(n)
{
    var count = 1;
    var currentDivisor = 0
    var total = 0;

    while (count <= n){
        currentDivisor = (count * 3) - 2
        total = total + (1/currentDivisor);
        count++;
    }
    return total.toFixed(2);

}

SeriesSum(4);