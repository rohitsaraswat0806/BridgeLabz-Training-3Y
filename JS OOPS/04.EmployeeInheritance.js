// Q4. Employee Inheritance

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " is doing general employee work.";
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        return this.name + " is managing the " + this.department + " department.";
    }
}

let employee1 = new Employee("Aman", "Development");
let manager1 = new Manager("Riya", "Sales");

let team = [employee1, manager1];

team.forEach(person => {
    console.log(person.work());
});

// Runtime polymorphism: the same work() call gives different results
// depending on the actual object.
