// Q8. Dynamic Discount Evaluator

// Products in the shopping cart
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value using reduce()
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

// Apply category-specific discounts using a loop and conditionals
let discountedSubtotal = 0;
const itemReport = [];

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountAmount = product.price * discountRate;
    const finalItemPrice = product.price - discountAmount;
    discountedSubtotal += finalItemPrice;

    itemReport.push(
        `${product.item}: ₹${product.price} - ₹${discountAmount.toFixed(2)} discount = ₹${finalItemPrice.toFixed(2)}`
    );
}

// Apply an extra 5% discount if the original cart value is greater than ₹50,000
const extraDiscount = originalTotal > 50000 ? discountedSubtotal * 0.05 : 0;
const finalTotal = discountedSubtotal - extraDiscount;

// Display the item and cart totals
console.log(`Dynamic Discount Evaluator
${itemReport.join("\n")}
Original cart value: ₹${originalTotal.toFixed(2)}
Subtotal after category discounts: ₹${discountedSubtotal.toFixed(2)}
Extra cart discount: ₹${extraDiscount.toFixed(2)}
Final total: ₹${finalTotal.toFixed(2)}`);
