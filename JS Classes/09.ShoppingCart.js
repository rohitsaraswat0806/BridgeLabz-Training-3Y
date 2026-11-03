class Cart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    applyCoupon(coupon) {
        if (!/^(SAVE20|DISC10)$/.test(coupon)) {
            console.log("Invalid coupon code.");
            return this.getTotal();
        }
        const discount = coupon === "SAVE20" ? 20 : 10;
        const total = this.getTotal();
        const finalTotal = total - total * discount / 100;
        console.log("Total: ₹" + total.toFixed(2));
        console.log("Discount: " + discount + "%");
        console.log("Final Total: ₹" + finalTotal.toFixed(2));
        return finalTotal;
    }
}
const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);
console.log("Cart Total: ₹" + cart.getTotal().toFixed(2));
cart.applyCoupon("SAVE20");
