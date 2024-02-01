"use strict";
console.log('Classes and Interfaces');
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmloyee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log(`Total de empleados: ${this.employees.length}`);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
console.log(accounting);
accounting.describe();
console.log(accounting.name);
accounting.addEmloyee('Alex');
accounting.addEmloyee('Bernard');
accounting.printEmployeesInfo();
//# sourceMappingURL=class-basics.js.map