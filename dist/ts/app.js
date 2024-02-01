"use strict";
console.log('Classes and Interfaces');
/**
 * Defining a class and an instance
*/
class Department {
    constructor(name) {
        this.name = name;
    }
    // constructor functions
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new Department('Accounting');
console.log(accounting); // object
accounting.describe();
// this keyword
// const accountingCopy = { describe: accounting.describe } // this is refering to accounting copy
// accountingCopy.describe(); // undefined
// const accountingCopy = { describe: accounting.describe }; // don´t have the correct type structure
// accountingCopy.describe(); // error, type Department
const accountingCopy = { name: 'Some name', describe: accounting.describe };
accountingCopy.describe();
//# sourceMappingURL=app.js.map