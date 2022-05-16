//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!

// Examples: 
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)


function getSum( a, b){
  
      let sum = 0
    
      
      if (a == b){
        return a 
      }
      
      let min = a > b ? b : a;
      let max = a > b ? a : b;

      for(let i = min; i <= max; i++){
          sum += i
      }

        return sum 
    }


    function GetSum( a,b ) {
        var result = 0;
        var bigger = a > b ? a : b;
        var smaller = a > b ? b : a;
        for (var i = smaller; i <= bigger; i++) { result += i }
        return result
     }
    // He wants you to take -359 + 130 + -229 + -228 + -227... that would equal the -56105 Hope this helps :)