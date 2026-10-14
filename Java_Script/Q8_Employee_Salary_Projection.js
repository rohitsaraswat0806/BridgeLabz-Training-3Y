// Q8. Employee Salary Projection
const currentSalary = 40000;
const annualIncrementRate = 8; // percentage
let salary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
  salary += salary * annualIncrementRate / 100;
  salary = Math.round(salary);
  projection.push({
    Year: year,
    Salary: salary
  });
}

console.table(projection);
