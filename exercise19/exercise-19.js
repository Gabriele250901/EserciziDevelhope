class Person {
  firstName = "";
  age = 0;
  lastName = "";
  constructor (firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstName() {
    return this.firstName;
  }
  get age () {
    return this.age;
  }
  get lastName () {
    return this.lastName;
  }
  get fullName () {
    return this.firstName + " " + this.lastName;
  }
  set firstName(firstName) {[]
    this.firstName = firstName;
  }
  set lastName(lastName) {
    this.lastName =lastName;
  }
  set age(age) {
    this.age = age;
  }
  
 /* saro` sincero penso che sia inutile creare tutti questi set and get se poi mi fanno
 stampare solo fullname, e la consegna stessa richiede che il method mi dia fullName.
 ho comunque creato dei get e dei set.
 */
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);