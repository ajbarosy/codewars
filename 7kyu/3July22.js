/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let words = s.toUpperCase().split(' ').map(x => x.length);
    words.sort((a, b) => a - b);
    
    
    return words[0];

  }
  
  