/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

*/


function sortItOut(arr){
    //filter odd numbers
    let odd = arr.filter(num => Math.floor(num) % 2 !== 0);
    //sort odd numbers
    odd.sort((a, b) => a - b);
    //filter even numbers
    let even = arr.filter(num => Math.floor(num) % 2 === 0);
    //sort even numbers
    even.sort((a, b) => b - a);
    //concatenate odd and even numbers
    let result = odd.concat(even);
    //round numbers down
    // result = result.map(num => Math.floor(num));
    
        return result;
}

//or

function sortItOut(array){
    return array.filter(a => Math.floor(a) % 2 !== 0).sort((a,b) => a - b)
    .concat(array.filter(a => Math.floor(a) % 2 === 0).sort((a,b) => b - a))
  }
