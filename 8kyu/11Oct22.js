//function takes in a word and determine whether or not if word is a palindrome

// word -> str, never empty, no special characters or nums, not case sensitive 

//return a boolean
//racecar -> true
//hello -> false

// function isPalindrome(str){
//     //word -> reverse the word: split, reverse, join
//     let reversed = str.split('').reverse('').join('')
//     //compare reversed word to orginial word; revWord === str
//     return reversed === str ? true : false
// }


const isPalindrome = str => str === str.split('').reverse('').join('')

console.log (isPalindrome('racecar'), 'true')
console.log (isPalindrome('hello'), 'false')