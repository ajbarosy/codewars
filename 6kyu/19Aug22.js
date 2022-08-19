//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){

    let result = []; // this array will store unique elements
    for (let i = 0, length = iterable.length; i < length; i++){
    // we step through the elements in iterable from the beginning to the end
      if (iterable.indexOf(iterable[i]) !== iterable.indexOf(iterable[i + 1])) {
        // and add an element to the result array every time this is different from the following element
        result.push(iterable[i]);
      }
    }
    return result;
  }