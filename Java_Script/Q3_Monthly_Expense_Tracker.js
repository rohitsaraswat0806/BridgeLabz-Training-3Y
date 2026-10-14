// Q3. Monthly Expense Tracker
const expenses = {
  food: 4500,
  travel: 1200,
  rent: 6000,
  bills: 1500,
  leisure: 800
};

let total = 0;
for (const amount of Object.values(expenses)) {
  total += amount;
}

const average = total / Object.keys(expenses).length;
const taxRate = 0.10;
total += total * taxRate;

console.log(`Total before tax: ₹${(total / (1 + taxRate)).toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${total.toFixed(2)}`);
