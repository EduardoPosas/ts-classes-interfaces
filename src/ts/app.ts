/**
 * Class inheritance
 * protected access modifier: is like private, but you can access to it in the subclasess
 * Getters and Setters
 * Static method: can be used without an instance of the class
 * static prop: can be used without an instance of the class
 * 
 * Abstract class: can´t be instanciated, just inherited
 * abstract method or prop: just define the method or property and its declartion type in abstract class
 * and force other classes implementing it
 */

abstract class DepartmentBase {
  protected employees: string[] = [];
  // Static prop
  static fiscalYear = 2020;

  constructor(protected id: string, public name: string) {
    // Can´t call a static property with this
    // this.fiscalYear = 2024; // error
    // Can use directly with the Class name or in static functions
    DepartmentBase.fiscalYear = 2024;
  }

  // Abstact method
  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesDetails() {
    console.log(`Total de empleados: ${this.employees.length}`)
    console.log(this.employees)
  }

  // Método estático
  static createEmployee(name: string) {
    console.log(DepartmentBase.fiscalYear);
    return { name };
  }
}

class Accounting extends DepartmentBase {
  public admins: string[] = [];
  private static instance: Accounting;

  private constructor(id: string) {
    super(id, 'Accounting')
  }

  // Singleton Pattern
  static getInstance() {
    if (Accounting.instance) {
      return this.instance;
    }
    this.instance = new Accounting('d2');
    return this.instance;
  }

  // Requiered method
  describe() {
    console.log(`Department: ${this.name} with id: ${this.id}`)
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }

  printAdminDetails() {
    console.log(`Total de administradores: ${this.admins.length}`);
    console.log(this.admins);
  }
}

class ITDepartment extends DepartmentBase {
  private reports: string[] = [];
  private lastReport: string;

  constructor(id: string) {
    super(id, 'IT Department');
    this.lastReport = this.reports[0];
  }

  // Requiered method
  describe() {
    console.log(`Department: ${this.name} with id: ${this.id}`)
  }

  // Overriding a method from base class
  addEmployee(employee: string) {
    if (employee === 'Alex') {
      return
    }
    this.employees.push(employee); // have access to employee from base class, using protected
  }

  addReport(report: string) {
    this.reports.unshift(report)
    this.lastReport = this.reports[0]
  }
  printReports() {
    console.log(this.reports);
  }

  get mostRecentReport() {
    if (!this.lastReport) {
      throw new Error('Reporte no encontrado')
    }
    return this.lastReport;
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Pasa un valor valido');
    }
    this.addReport(value);
  }
}

const it = new ITDepartment('d1');
it.addEmployee('Alexander');
it.addReport('reporte de junio');
it.printReports();
it.addEmployee('Alex');
it.addEmployee('Brumm');
it.printEmployeesDetails();

// Getters and setters
it.mostRecentReport = 'Reporte final de año'; // assigne a value as a property
console.log(it.mostRecentReport); // not call the function ()

// const account = new Accounting('d2');
const account = Accounting.getInstance();
account.addEmployee('Bernard');
account.printEmployeesDetails();
account.addAdmin('Ruth');
account.printAdminDetails();

// Static method
const newEmployee = DepartmentBase.createEmployee('alexander');
console.log(newEmployee);
console.log(DepartmentBase.fiscalYear);