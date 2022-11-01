// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
    if(n > m){
      return Math.ceil(n%m)
      }else if(n == 0 || m == 0){
        return NaN
      }else{
        return Math.ceil(m%n)
        }
    
  }