/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){

    //create an array
    let array = Array.from(arr)
    let even = []
    //create condition to target all odd numbers
    array.forEach((x, i) => {
      if(i % 2 == 0){
        even.push(x); //add to new array
      }
    })
    //return the new array
    return even
  }

  //Or

  function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }