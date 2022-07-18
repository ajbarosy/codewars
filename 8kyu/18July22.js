//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

String.prototype.toAlternatingCase = function () {
    return this.split('').map(flipCase).join('');
    
    function flipCase(x){
      if(x.toLowerCase() === x){
        return x.toUpperCase()
      }else if(x.toUpperCase() === x){
        return x.toLowerCase()
      }
    }
  }