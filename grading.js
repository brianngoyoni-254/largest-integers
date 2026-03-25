const jane = 80;
const ciara = 77;
const smith = 88;
const thomas = 95;
const shelby = 68;

let average = (jane + ciara + smith + thomas + shelby) / 5;
let grade;

if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else if (average < 100) {
    grade = "A";
} else {
    grade = "A"; // handles 100 or above
}

console.log(`Average: ${average}`);
console.log(`Grade: ${grade}`);