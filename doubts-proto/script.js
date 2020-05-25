
let p = {a: 10, b: 'asd', c: true}

/**
 * when we do b = Object.create(a)
 * then b.__proto__ is a
 * and we say that a is the prototype based on 
 * which b has been created
 */
let q = Object.create(p)

class Vehicle {
  constructor(wheels, color) {
    this.wheels = wheels 
    this.color = color
  }
  isSafe() {
    return this.wheels >= 4
  }
}

let redCar  = new Vehicle(4, 'red')
let blackBike  = new Vehicle(2, 'black')