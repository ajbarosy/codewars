//Largest pair sum in array


function largestPairSum (numbers) {
    let sorted = numbers.sort((a, b) => a - b)
    let y = sorted.pop()
    let x = sorted.pop()
    return x + y
    
  }

  function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }