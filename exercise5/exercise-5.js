const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName="Simon";
//  se cambio uno cambio anche l'altro perche` i due oggetti hanno lo stesso riferimento ovvero person1.
// Modify the property `firstName` of the `person2` in "Simon".


console.log(person1);
console.log(person2);
