"use strict";
class DepartmentBase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesDetails() {
        console.log(`Total de empleados: ${this.employees.length}`);
        console.log(this.employees);
    }
}
class Accounting extends DepartmentBase {
    constructor(id) {
        super(id, 'Accounting');
        this.admins = [];
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    printAdminDetails() {
        console.log(`Total de administradores: ${this.admins.length}`);
        console.log(this.admins);
    }
}
class ITDepartment extends DepartmentBase {
    constructor(id) {
        super(id, 'IT Department');
        this.reports = [];
        this.lastReport = this.reports[0];
    }
    addEmployee(employee) {
        if (employee === 'Alex') {
            return;
        }
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.unshift(report);
        this.lastReport = this.reports[0];
    }
    printReports() {
        console.log(this.reports);
    }
    get mostRecentReport() {
        if (!this.lastReport) {
            throw new Error('Reporte no encontrado');
        }
        return this.lastReport;
    }
    set mostRecentReport(value) {
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
it.mostRecentReport = 'Reporte final de año';
console.log(it.mostRecentReport);
const account = new Accounting('d2');
account.addEmployee('Bernard');
account.printEmployeesDetails();
account.addAdmin('Ruth');
account.printAdminDetails();
//# sourceMappingURL=app.js.map