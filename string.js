function swapFirstLast(str) {
  // If string length is 1, return it as it is
  if (str.length <= 1) {
    return str;
  }

  // Get first and last characters
  let first = str[0];
  let last = str[str.length - 1];

  // Get middle part
  let middle = str.slice(1, -1);

  // Combine them
  return last + middle + first;
}

// Example 
console.log(swapFirstLast("hello")); 
console.log(swapFirstLast("A"));     