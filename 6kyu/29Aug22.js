// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  
    string = string.split('').map(x => {
      if (x === x.toUpperCase()){
        x = ' ' + x
      }
      return x
    })
      return string.join('')
  }
  