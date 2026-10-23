// Q3. Math Utility Dashboard

// Set the number for the math calculations
const x = 16.75;

// Perform the required calculations
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display a formatted summary using a template literal
console.log(`Math Utility Dashboard
Number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot}
Power (x^3): ${powerValue}
Random number (10-50): ${randomNumber}`);
