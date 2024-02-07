/** Interfaces
 * It´s another way to name an object type
 * Define a custom type
 * Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
 */

interface User {
  name: string;
  age: number;
  greet(phrase: string): void;
}

// with Type alias
// type User = {
//   readonly name: string;
//   age: number;
//   greet(phrase: string): void;
// }


let user1: User;

user1 = {
  name: 'Alexander',
  age: 27,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }
}

console.log(user1);
user1.greet('Buenos días');

/** Interfaces and classes 
 * A class must follow the custom type
 * It forces to implemet methods defined in the interface
 * it can use a type alias
*/

/** Optionanl proprs and fn */

interface Greetable {
  readonly name?: string; // optional name
  greet(phrase: string): void;
}

// A class can implement from multiple interfaces
class Person implements Greetable {
  public name?: string;
  public age: number;

  constructor(a: number, n?: string) { // optional param in constructor, or default value
    this.age = a;
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`)
    } else {
      console.log('hi');
    }
  }
}

let user2: Greetable;
user2 = new Person(28); // can use Greetable custom type because the class is implemented with it

console.log(user2);
user2.greet('Me llamó');

// trying to change a readonly prop
// user2.name = 'lalo'; // error 

/**Extending Interfaces */

interface Named {
  readonly name: string;
}

interface Aged {
  readonly age: number;
}

interface Information extends Named, Aged {
  showInfo(): void;
}

class Employee implements Information {
  constructor(public name: string, public age: number) { }

  showInfo() {
    console.log(`Empleado: ${this.name} tiene ${this.age} de edad`);
  }
}

let employee: Named;

employee = new Employee('Fabio', 40);
console.log(employee);
// employee.showInfo() // error, showInfo does not exist in the type Named

let employee2: Information;

employee2 = new Employee('Ford', 18);
employee2.showInfo();


// Interfaces as custom types
// At the end functions are objects
// also called an anonymous function
// type AddFn = {
//   (a: number, b: number): number;
// 

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (n1: number, n2: number) => n1 + n2;

console.log(add(25, 200));