// Q6. E-Commerce Inventory System

let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 12 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 700, stock: 4 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 8 },
    { id: 5, name: "Notebook", category: "Stationery", price: 100, stock: 2 }
];

function getLowStockProducts(productList) {
    return productList.filter(product => product.stock < 5);
}

function sortProductsByPrice(productList) {
    return [...productList].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(productList) {
    return productList.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:", getLowStockProducts(products));
console.log("Products sorted by price:", sortProductsByPrice(products));
console.log("Total inventory value: Rs.", calculateTotalInventoryValue(products));
console.log("Products grouped by category:", groupByCategory(products));
