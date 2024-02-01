/**
 * Class inheritance
 * protected access modifier: is like private, but you can access to it in the subclasess
 * Getters and Setters
 */

class DepartmentBase {
  protected employees: string[] = [];

  constructor(private id: string, public name: string) { }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesDetails() {
    console.log(`Total de empleados: ${this.employees.length}`)
    console.log(this.employees)
  }
}

class Accounting extends DepartmentBase {
  public admins: string[] = [];

  constructor(id: string) {
    super(id, 'Accounting')
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

const account = new Accounting('d2');
account.addEmployee('Bernard');
account.printEmployeesDetails();
account.addAdmin('Ruth');
account.printAdminDetails();