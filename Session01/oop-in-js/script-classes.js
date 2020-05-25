
class Person {
  constructor(name, age) {
    this.name = name 
    this.age = age
  }
  isAdult() {
    return this.age >= 18
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  allowedToDrive() {
    return super.isAdult()
  }
}

let p1 = new Person('Ashok', 30)
let p2 = new Person('Asmita', 20)

// similar to checking (p1 instanceOf Person)
Person.prototype.isPrototypeOf(p1)



let s1 = new Student('Rahul', 12, 7)
let s2 = new Student('Rekha', 13, 8)