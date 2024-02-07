"use strict";
let user1;
user1 = {
    name: 'Alexander',
    age: 27,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
console.log(user1);
user1.greet('Buenos días');
class Person {
    constructor(a, n) {
        this.age = a;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log('hi');
        }
    }
}
let user2;
user2 = new Person(28);
console.log(user2);
user2.greet('Me llamó');
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`Empleado: ${this.name} tiene ${this.age} de edad`);
    }
}
let employee;
employee = new Employee('Fabio', 40);
console.log(employee);
let employee2;
employee2 = new Employee('Ford', 18);
employee2.showInfo();
let add = (n1, n2) => n1 + n2;
console.log(add(25, 200));
//# sourceMappingURL=app.js.map