const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);
console.log(keys);

// Print values of person using Object.keys
let entry  = Object.entries(person);
console.log(entry);

/* come vedi sopra ho provato ad usare keys , ma per stampare in coppia come chiede 
l'esercizio credo sia piu` opportuno usare entries */