// Exercise 2: Method Overriding, Private Properties, and Getter
//
// 1. Create a class `Animal` with a private property `#type` and a getter `getType` to access the private property.
// 2. The `Animal` class should have a method `speak()` that returns "The [type] makes a sound" using the getter.
// 3. Create a subclass `Dog` that overrides the `speak()` method to return "The dog barks". "dog" needs to pass as an argument to the parent constructor using `super`.
// 4. Create another subclass `Cat` that overrides the `speak()` method to return "The cat meows". "cat" needs to pass as an argument to the parent constructor using `super`.


class Animal {
  #type;

  constructor(type) {
      this.#type = type;
  }

  getType() {
      return this.#type;
  }

  speak() {
      return `The ${this.getType()} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(type) {
    super(type)
  }
  
  speak() {
    return `The ${super.getType()} barks`
  }
}

class Cat extends Animal {
  constructor(type) {
    super(type)
  }

  speak() {
    return `The ${super.getType()} meows`
  }
}


// Test Code / Driver Code
const dog = new Dog("dog");
const cat = new Cat("cat");

console.log(dog.speak());  // Expected Output: "The dog barks"
console.log(cat.speak());  // Expected Output: "The cat meows"
