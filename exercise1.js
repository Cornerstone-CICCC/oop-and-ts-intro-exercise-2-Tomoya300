// Exercise 1: Inheritance, Super, and Private Properties
// 
// 1. Create a class `Vehicle` with private properties `#make`, `#model`, and `#year`.
// 2. The `Vehicle` class should have a method `getInfo` that returns a string with the vehicle’s details.
// 3. Create a subclass `Car` that inherits from `Vehicle`. Add a new private property `#doors`.
// 4. In the `Car` class, use the `super` keyword to call the parent constructor.
// 5. Override the `getInfo` method in the `Car` class to include the number of doors in the string.


class Vehicle {
  #make
  #model
  #year

  constructor(make, model, year) {
    this.#make = make
    this.#model = model
    this.#year = year
  }

  getInfo() {
    return `${this.#year} ${this.#make} ${this.#model}`
  }
}

class Car extends Vehicle {
  #doors

  constructor(make, model, year, doors) {
    super(make, model, year)
    this.#doors = doors
  }

  getInfo() {
    return `${super.getInfo()} with ${this.#doors} doors`
  }
}


// Test Code / Driver Code
const vehicle1 = new Vehicle("Toyota", "Corolla", 2020)
console.log(vehicle1.getInfo())
const myCar = new Car("Toyota", "Corolla", 2021, 4);
console.log(myCar.getInfo());  // Expected Output: "2021 Toyota Corolla with 4 doors"

// --------------------------------------note---------------------------------------------

// class Person {
//   constructor(fname, lname) {
//     this.firstname = fname
//     this.lastname = lname
//   }
// }

// class Employee extends Person {
//   constructor(fname, lname, salary) {
//     super(fname, lname)
//     this.salary = salary
//   }
// }

// const employee1 = new Employee("John", "Smith", 30000)
// console.log(employee1)

// class Vehicle {
//   constructor(capacity) {
//     this.capacity = capacity
//   }

//   describe() {
//     return `this vehicle can support ${this.capacity} passengers`
//   }
// }

// class Car extends Vehicle {
//   #make
//   #model

//   constructor(make, model, capacity) {
//     super(capacity)
//     this.#make = make
//     this.#model = model
//   }

//   describe() {
//     // return `this car is a ${this.make} ${this.model}. the vehicle can support ${this.capacity} passengers.`
//     return `this car is a ${this.#make} ${this.#model}. ${super.describe()}`
//   }
// }

// class Boat extends Vehicle {
//   #boatName

//   constructor(name, capacity) {
//     super(capacity)
//     this.#boatName = name
//   }

//   describe() {
//     return `The boat's name is the ${this.#boatName}. ${super.describe()}`
//   }
// }

// class Racecar extends Car {
//   #type

//   constructor(make, model, capacity, type) {
//     super(make, model, capacity)
//     this.#type = type
//   }

//   describe() {
//     return `I love my ${this.#type} racecar. ${super.describe()}`
//   }
// }

// class Rental {
//   constructor(price) {
//     this.price = price
//   }

//   describe() {
//     return `The rental costs ${this.price}.`
//   }
// }

// class Apartment extends Rental {
//   #rooms

//   constructor(rooms, price) {
//     super(price)
//     this.#rooms = rooms
//   }

//   describe() {
//     return `This apartment has ${this.#rooms} rooms. ${super.describe()} I want this apartment.`
//   }
// }

// const vehicle1 = new Vehicle(5)
// console.log(vehicle1.describe())
// const car1 = new Car("Toyota", "Prius", 12)
// console.log(car1.describe())
// const boat1 = new Boat("S.S. Sinkable", 1)
// console.log(boat1.describe())
// const racecar1 = new Racecar("Toyota", "Lexus", 2, "F1")
// console.log(racecar1.describe())
// const rental1 = new Rental(200)
// console.log(rental1.describe())
// const apartment1 = new Apartment(2, 300)
// console.log(apartment1.describe())

// ------------------------------------multilevel inheritance-----------------------------------------

// class Person {
//   constructor(fname, lname) {
//     this.firstname = fname
//     this.lastname = lname
//     // this.school = "CICCC"
//   }

//   greeting() {
//     return `My name is ${this.firstname} ${this.lastname}.`
//   }
// }

// class Student extends Person {
//   #course

//   constructor(fname, lname, course) {
//     super(fname, lname)
//     this.#course = course
//   }

//   get course() {
//     return this.#course
//   }

//   greeting() {
//     return `${super.greeting()} I am studying ${this.#course}.`
//   }
// }

// class Instructor extends Person {
//   #classes

//   constructor(fname, lname, noOfClasses) {
//     super(fname, lname)
//     this.#classes = noOfClasses
//   }

//   greeting() {
//     return `${super.greeting()} I am teaching ${this.#classes} classes. I am teaching in ${this.school}.`
//   }
// }

// class Staff extends Person {
//   #hireDate
//   #salary

//   constructor(fname, lname, hireDate, salary) {
//     super(fname, lname)
//     this.#hireDate = hireDate
//     this.#salary = salary
//   }

//   greeting() {
//     return `${super.greeting()} I was hired on ${this.#hireDate} with a starting salary of ${this.#salary}.`
//   }
// }

// class Manager extends Staff {
//   #department

//   constructor(fname, lname, hireDate, salary, department) {
//     super(fname, lname, hireDate, salary)
//     this.#department = department
//   }

//   greeting() {
//     return `${super.greeting()} I am handling the ${this.#department} department.`
//   }
// }

// const person1 = new Person("Jane", "Doe")
// console.log(person1)
// const student1 = new Student("John", "Doe", "WAD")
// console.log(student1.greeting())
// const instructor1 = new Instructor("Call", "Casdy", "WAD")
// console.log(instructor1.greeting())
// const staff1 = new Staff("Ethan", "Doomer", "14-02-2025", 80000)
// console.log(staff1.greeting())
// const manager1 = new Manager("Kaylee", "Timerburg", "03-01-2026", 90000, "English Literature")
// console.log(manager1.greeting())

