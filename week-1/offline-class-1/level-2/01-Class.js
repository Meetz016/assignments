
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static type(){
    console.log("I am an animal at last")
  }
   describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

dog=new Animal('dog',4)
console.log(typeof(Animal.type()))
