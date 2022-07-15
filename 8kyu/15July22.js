/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

*/

function getAge(inputString){
  
    switch (inputString){
      case '0 years old':
        return 0
        break;
      case '1 years old':
        return 1
        break;
      case '2 years old':
        return 2
        break;
      case '3 years old':
        return 3
        break;
      case '4 years old':
        return 4
        break;
      case '5 years old':
        return 5
        break;
      case '6 years old':
        return 6
        break;
      case '7 years old':
        return 7
        break;
      case '8 years old':
        return 8
        break;
      case '9 years old':
        return 9
        break;   
    }
    return parseInt(inputString.charAt(0))
  }