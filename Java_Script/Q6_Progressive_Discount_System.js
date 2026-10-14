// Q6. Progressive Discount System
const total = 6500; // Enter purchase amount
let discountRate = 0;

if (total >= 10000) {
  discountRate = 25;
} else if (total >= 5000) {
  discountRate = 15;
} else if (total >= 2000) {
  discountRate = 5;
}

const discountAmount = Math.round(total * discountRate / 100);
const finalPrice = Math.round(total - discountAmount);

console.log(`Original total: ₹${total}`);
console.log(`Discount: ${discountRate}%`);
console.log(`Final price after discount: ₹${finalPrice}`);
