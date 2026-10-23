// Q9. Odd-Even Number Analyzer

// Create an array containing numbers from 1 through 30 using a loop
const numbers = [];
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number and store the results in a new array
const results = [];

for (const number of numbers) {
    let classification;

    // Check FizzBuzz first so numbers divisible by both 3 and 5 are handled
    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push(`${number}: ${classification}`);
}

// Display all classifications
console.log(results.join("\n"));
