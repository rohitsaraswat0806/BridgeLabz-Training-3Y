// Q1. Scope Conflict Resolver

// Global bonus value
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local salary value
    let salary = 40000;
    let totalSalary = salary;

    // Add the global bonus only for permanent employees
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    // Print the total salary and the current global bonus
    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ${totalSalary}`);
    console.log(`Global bonus inside function: ${bonus}`);
}

// Test with different values of isPermanent
calculateSalary(true);
calculateSalary(false);

// Changing isPermanent does not change the global bonus.
// isPermanent is a function parameter, while bonus is global.
console.log(`Global bonus outside function: ${bonus}`);
