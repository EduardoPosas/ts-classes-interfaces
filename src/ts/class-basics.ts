console.log('Classes and Interfaces');

/**
 * Defining a class and an instance
*/

class Department {
  // public name: string; // can use public keyword, but it´s the default
  // name: string;
  // private readonly id: string
  private employees: string[] = []; // private prop

  // constructor(name: string, id: string) {
  //   this.name = name;
  //   this.id = id;
  // }

  //shorthand initialization
  // create property with the extact name without assigning it in the constructor
  // explicitly assign the public or private
  constructor(private readonly id: string, public name: string) { }

  // constructor functions
  describe(this: Department) {
    // console.log(`Department: ${this.name}`);
    console.log(`Department ${this.id}: ${this.name}`)
  }

  addEmloyee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    // this.id = 'd2' // cannot re-assign because it is a readonly prop
    console.log(`Total de empleados: ${this.employees.length}`);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');
console.log(accounting); // object
accounting.describe();

/** this keyword */
// const accountingCopy = { describe: accounting.describe } // this is refering to accounting copy
// accountingCopy.describe(); // undefined

// const accountingCopy = { describe: accounting.describe }; // don´t have the correct type structure
// accountingCopy.describe(); // error, type Department

// const accountingCopy = { name: 'Some name', describe: accounting.describe };
// accountingCopy.describe(); // ok

/** Public and private */
// console.log(accounting.employees); // error - private prop
console.log(accounting.name); // ok - public prop, also can modify the value
accounting.addEmloyee('Alex');
accounting.addEmloyee('Bernard');

accounting.printEmployeesInfo();