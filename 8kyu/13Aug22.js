// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
  }