function areAllDigitsSame(num) {
  let str = num.toString();

  // Take the first digit
  let firstDigit = str[0];

  // Loop through all digits
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== firstDigit) {
      return false; // Found a different digit
    }
  }

  return true; // All digits are the same
}

// Example 
console.log(areAllDigitsSame(1111)); 
console.log(areAllDigitsSame(222));  
console.log(areAllDigitsSame(123));  