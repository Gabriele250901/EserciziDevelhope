const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);
console.log(keys);

// Print values of person using Object.keys
keys.forEach (function(key) {
 console.log(`${key}: ${person[key]}`)
});