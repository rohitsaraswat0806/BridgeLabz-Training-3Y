class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}
const employees = [
    new Employee(1, "Aman", "IT", 40000),
    new Employee(2, "Neha", "HR", 35000),
    new Employee(3, "Rahul", "Finance", 45000),
    new Employee(4, "Priya", "Marketing", 38000),
    new Employee(5, "Karan", "IT", 50000)
];
employees[0].applyBonus(10);
employees.forEach(employee =>
    console.log(`${employee.name}: Annual Salary = ₹${employee.getAnnualSalary()}`)
);
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log("Total Annual Payout: ₹" + totalAnnualPayout);
