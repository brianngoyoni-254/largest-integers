//define a function
function differencewith13(num) {
    if (num > 13)//check if the number is greater than 13
     {
        return 2 * Math.abs(num - 13);
    } else {
        return Math.abs(num - 13);// give the difference and ensure the difference is always positive
    }
}
//examples
console.log(differencewith13(9));
console.log(differencewith13(30));