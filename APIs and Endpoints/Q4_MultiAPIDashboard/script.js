const BASE_URL = "http://localhost:3004";

async function loadDashboard() {
    const usersBox = document.getElementById("users");
    const ordersBox = document.getElementById("orders");
    const productsBox = document.getElementById("products");
    const warning = document.getElementById("warning");

    try {
        const responses = await Promise.all([
            fetch(BASE_URL + "/users"),
            fetch(BASE_URL + "/orders"),
            fetch(BASE_URL + "/products")
        ]);

        if (responses.some(response => !response.ok)) {
            throw new Error("One or more API requests failed.");
        }

        const [users, orders, products] = await Promise.all(
            responses.map(response => response.json())
        );

        usersBox.textContent = users.length;
        ordersBox.textContent = orders.length;
        productsBox.textContent = products.length;
    } catch (error) {
        warning.textContent = "Some data could not be loaded.";
        usersBox.textContent = "Unavailable";
        ordersBox.textContent = "Unavailable";
        productsBox.textContent = "Unavailable";
    }
}

loadDashboard();
