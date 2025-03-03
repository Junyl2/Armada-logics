//calculates the total cost

const cloth = 15;
const jeans = 15;
const jacket = 15;

let totalCost = cloth + jeans + jacket;

console.log(`Total Cost: $${totalCost}`);

//calculates the average
const tshirt = 10;
const slipper = 2;
const shoes = 10;

let average = (tshirt + slipper + shoes) / 3;

console.log(average);

//identifies  if the number is odd or even
const num1 = 15;

if (num1 % 2 === 0) {
  console.log(`${num1} is an Even number`);
} else {
  console.log(`${num1} is an Odd number`);
}

//finds the original price
const price = 100;
const discount = 20;

let save = (price * discount) / 100;

let finalPrice = price - save;

console.log(`The discounted pice is $${finalPrice}.`);

let originalPrice = finalPrice / (1 - discount / 100);

console.log(`The original price is $${originalPrice}.`);

