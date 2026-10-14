// Q4. Academic Performance Evaluator
const marks = [88, 76, 91, 84, 79]; // Enter marks for 5 subjects
const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
const percentage = (total / (marks.length * 100)) * 100;
const failedSubject = marks.some(mark => mark < 35);

let result;
if (failedSubject) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else if (percentage >= 50) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
