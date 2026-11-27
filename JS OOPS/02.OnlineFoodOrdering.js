// Q2. Online Food Ordering

let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];

function calculateBill(orderItems) {
    let priceList = orderItems.map(itemName => {
        let item = menu.find(menuItem => menuItem.name === itemName);

        if (!item) {
            throw new Error(itemName + " is not available in the menu.");
        }

        return item.price;
    });

    return priceList.reduce((total, price) => total + price, 0);
}

try {
    let bill = calculateBill(["Pizza", "Burger", "Pasta"]);
    console.log("Total bill: Rs.", bill);
} catch (error) {
    console.log("Order error:", error.message);
}

try {
    let bill = calculateBill(["Pizza", "Sandwich", "Sushi"]);
    console.log("Total bill: Rs.", bill);
} catch (error) {
    console.log("Order error:", error.message);
}
