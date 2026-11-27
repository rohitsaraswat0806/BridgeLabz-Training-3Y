// Q3. Product Discount System

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

let product1 = new Product("Laptop", 50000);
let product2 = new Product("Headphones", 2000);
let product3 = new Product("Keyboard", 1500);

console.log(product1.name, "final price:", product1.applyDiscount(10));
console.log(product2.name, "final price:", product2.applyDiscount(20));
console.log(product3.name, "final price:", product3.applyDiscount(5));

// Abstraction: applyDiscount() hides the discount calculation.
// We only call the method and provide the discount percentage.
