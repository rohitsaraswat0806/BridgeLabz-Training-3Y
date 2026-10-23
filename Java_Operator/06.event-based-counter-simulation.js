// Q6. Event-Based Counter Simulation

// Counter value shared by both functions
let count = 0;

function increment() {
    // Increase the count for a simulated click
    count++;
    console.log(`Count after increment: ${count}`);

    // Nested function can access and display the outer function's scope
    function showCountScope() {
        console.log(`Nested function can access count: ${count}`);
    }

    showCountScope();
}

function decrement() {
    // Decrease the count for a simulated click
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Simulate clicks by calling the functions manually
increment();
increment();
decrement();
console.log(`Final count: ${count}`);
