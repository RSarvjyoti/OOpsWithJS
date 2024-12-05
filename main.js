// Syntax for the creating class
class Rectangle {
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    area = () => {
        return this.length * this.width;
    }
}

let myRectangle = new Rectangle(10, 10);
console.log(myRectangle.area());

class Car {
    constructor(color, brand, speed) {
        this.color = color;
        this.brand = brand;
        this.speed = speed;
    }
}
// Inherit of Car property
class SUV extends Car{
    constructor(color, brand, speed) {
        super(color, brand, speed);
    }
}

let SUV1 = new SUV("red", "ABC", "100KMPH");
console.log(SUV1);

// Encapsulation

class Student {
    #score  // score make the private
    constructor(name, score) {
        this.name = name;
        this.#score = score;
    }

    get marks() { // allowed the access private property
        return this.#score
    }
    set marks(newVal) { // allowed the update private property
        this.#score = newVal
    }
}

let s1 = new Student("Sarvjyoti", 89);
s1.score = 90 // We can not able to change the value of this property (It is a private)
s1.marks = 90 // now able to update marks with help of setter function
console.log(s1.marks)

// *********** Abstraction **********
// users will to able to create object but they can able to access the property and method is called Abstraction
class User {
    constructor() {
        // Abstraction
        if(this.constructor === User) {
            throw new Error("Cannot Create Object");
        }
    }
}

// let u1 = new User(); 
// console.log(u1); // User {} // Error("Cannot Create Object");

class Employee extends User {
    constructor() {
        super();
    }
}

let emp1 = new Employee(); 
console.log(emp1); // User {}


// ********* Polymorphism *********

class Animal {
    speak() {
      console.log("Animal speaks...");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Dog barks...");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Cat meows...");
    }
  }
  
  const animals = [new Animal(), new Dog(), new Cat()];
  animals.forEach(animal => animal.speak());