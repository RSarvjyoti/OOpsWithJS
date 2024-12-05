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