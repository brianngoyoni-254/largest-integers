const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log("Largest number is: " + num1);
  } else if (num2 > num1) {
    console.log("Largest number is: " + num2);
  } else {
    console.log("Both numbers are equal");
  }
}

function start() {
  rl.question("Enter first number: ", function(input1) {
    rl.question("Enter second number: ", function(input2) {

      // Use let to declare variables
      let num1 = Number(input1);
      let num2 = Number(input2);

      compareNumbers(num1, num2);

      console.log("-------------------");

      start(); // repeat the process like a loop
    });
  });
}

start();