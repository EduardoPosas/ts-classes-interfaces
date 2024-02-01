console.log('Classes and Interfaces');

/**
 * Defining a class and an instance
*/

class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // constructor functions
  describe(this: Department) {
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