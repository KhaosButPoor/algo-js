let student = {
  name: 'Said', // Values = 'Said'
  favoriteFood: 'Cheese',
  city: 'Orly',
};

// Simple

let result = 0
let values = Object.values(student) // Convert object to board/array

values.forEach(value => { // Only works to boards/array
  result += value.length
});

// Those 2 are required if you want to count things from an object

console.log(result);

// Hardcore

result = values.reduce ((acc, value)=> acc + value.length, 0)

// Pair ou impair

if (result % 2) {
  console.log('impair');
} else {
  console.log(pair);
}

console.log(`Le resultat est ${result}`); // Interpolation