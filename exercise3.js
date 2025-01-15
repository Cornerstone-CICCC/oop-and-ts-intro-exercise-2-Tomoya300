// Exercise 3: Inheritance, Override, Super, and Private Properties
//
// 1. Create a class `Employee` with private properties `#name` and `#position`.
// 2. The `Employee` class should have a method `introduce()` that returns "Hi, I'm [name], a [position]".
// 3. Create a subclass `Manager` that inherits from `Employee`. Add a private property `#department` to the constructor.
// 4. In the `Manager` class, use `super` to call the parent constructor, and override the `introduce()` method to include the department in the output.
//    The output should be: "Hi, I'm [name], a [position] in the [department] department."


class Employee {
  #name
  #position

  constructor(name, position) {
    this.#name = name
    this.#position = position
  }

  introduce() {
    return `Hi, I'm ${this.#name}, a ${this.#position}`
  }
}

class Manager extends Employee {
  #department

  constructor(name, position, department) {
    super(name, position)
    this.#department = department
  }

  introduce() {
    return `${super.introduce()} in the ${this.#department} department.`
  }
}


// Test Code / Driver Code
const manager = new Manager("Alice", "Manager", "Sales");
console.log(manager.introduce());  // Expected Output: "Hi, I'm Alice, a Manager in the Sales department"