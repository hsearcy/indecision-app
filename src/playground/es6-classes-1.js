class Person {
  constructor(name = "Mystery Man", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hey, ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person("Houston Searcy", 29);
console.log(me.getDescription());

const nobody = new Person();
console.log(nobody.getDescription());