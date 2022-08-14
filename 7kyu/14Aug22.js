//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.

function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

//This solution uses the spread syntax, which expands all the numbers from the array and puts them into a Math.max parameter, i.e. it takes the maximum number in the array, and checks to see if that number is less than or equal to the limit. You don't have to check every number in the array, since this is checking the highest number.