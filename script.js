// Person class definition
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet method to Person's prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee class definition that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the parent constructor (Person) to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype methods in Employee
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet method to Employee's prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
