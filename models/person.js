class Person {
  constructor({ firstName, lastName, age }) {
    this.id = Person.incrementId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // static method to auto-increment the id
  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}

module.exports = Person;
