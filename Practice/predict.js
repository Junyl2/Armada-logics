/*f unction calculateSum(arr) {
    let sum = 0; //[i]
    for (let i = 0; i < arr.length; i++) {//0, 1, 2, 3
        sum += arr[i];//sum = 0, 1, 2, 3
    }
    return sum;//return [0, 1, 2, 3]
}

let numbers = [1, 2, 3, 10]; //nubmers
console.log("Sum:", calculateSum(numbers));//


function isEven(num) {
    if (num % 2 === 0) {
        return 'number is even';
    } else {
        return 'number is odd';
    }
} console.log(isEven(2));
console.log(isEven(3));

//

function greet(name) {
    return "Hello, " + name + "!"; // hello name !
}

function personalizedGreeting(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(greet(names[i]));
    }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);
 */
// Task: Create an array of objects where each object represents a product (name, price, category). Then, print the name of the second product.

let products = [
  {
    name: "iPhone",
    price: 799,
    category: "Electronics",
  },
  {
    name: "Sony Headphones",
    price: 99,
    category: "Electronics",
  },
  {
    name: "Samsung Galaxy",
    price: 699,
    category: "Electronics",
  },
]; //✅ Goal: Learn how to store and access objects inside an array.
console.log(products[1].price);

// Given an array of items, count how many items are in the cart.

let cart = ["product 1", "product 2", "product 3"];
console.log(cart.length); //✅ Goal: Get comfortable using .length to count elements in an array.

//Task: Given an array of products, find the first product that costs more than $100...
let gadgets = [
  {
    name: "iPhone",
    price: 69,
    category: "Electronics",
  },
  {
    name: "Sony Headphones",
    price: 101,
    category: "Electronics",
  },
  {
    name: "Samsung Galaxy",
    price: 200,
    category: "Electronics",
  },
];
let expensiveProduct = gadgets.find((gadgets) => gadgets.price > 300);
let obj = JSON.stringify(expensiveProduct); // learned how to make obj as string

console.log(`These are the expensive products ${obj}`); //✅ Goal: Learn how to use the .find() method to find the first element that meets a condition.

//Task: Given a list of products, return only the ones that belong to the "Electronics" category.

let item = [
  { name: "iPhone", price: 799, category: "Electronics" },
  { name: "Sony Headphones", price: 99, category: "iPhone" },
  { name: "Samsung Galaxy", price: 699, category: "iPhone" },
  { name: "iPad", price: 300, category: "Tablet" },
];

let electronics = item.filter((item) => item.category === "Electronics");
let obj1 = JSON.stringify(electronics);
console.log(`This is phone is under Electronic: ${obj1}`);

//💡 Task: Given an array of products in a shopping cart, calculate the total price.

let cart1 = [
  { name: "iPhone", price: 799 },
  { name: "Sony Headphones", price: 99 },
  { name: "Samsung Galaxy", price: 699 },
];
let totalPrice = cart1.reduce((cart1) => cart1.price + cart1.price);
console.log(totalPrice);

//Sort an array of products from the cheapest to the most expensive.

//im doing to sort items from cheapest to expsensive

let cart3 = [
  {
    name: "iPhone",
    price: 100,
    category: "Electronics",
  },
  {
    name: "iPhone",
    price: 1300,
    category: "Electronics",
  },
  {
    name: "iPhone",
    price: 1400,
    category: "Electronics",
  },
];
let sortedPrice = cart3.sort((a, b) => a.price - b.price);
console.log(sortedPrice);

//

/* Task: Write a function that finds duplicate numbers in an array. */

let numbers = [1, 2, 3, 4, 2, 3, 5, 6, 7, 5];
let duplicates = []; // make an empty array
let obj3 = {}; // make an empty object
for (let i of numbers) {
  //loop through the numbers
  if (obj3[i]) {
    //if obj3[i] is true
    duplicates.push(i); //push i to duplicates
  } else {
    //else
    obj3[i] = 1; //obj3[i] = 1
  }
}
console.log(duplicates); //log duplicates

//Task: Write a function that returns the first non-repeating number in an array.

let nums = [1, 2, 2, 3, 3, 4, 5, 6, 6];
let dups = [];
let obs = {};
for (let i of nums) {
  if (obs[i]) {
    dups.push(i);
  } else {
    obj[i] = 1;
  }
}
console.log(dups);

//Create a function that processes each element of an array using a provided callback and returns a new array with the transformed results.
const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(playerPick) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerPick === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  } else if (playerPick === "Paper") {
    if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You lose";
    } else if (computerMove === "Rock") {
      result = "You win";
    }
  } else if (playerPick === "Scissors") {
    if (computerMove === "Scissors") {
      result = "Tie";
    } else if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    }
  }
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  alert(`You picked${playerPick}. Computer picked${computerMove}. ${result}
    Wins: ${score.wins} Losses:${score.losses} Ties:${score.ties}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 2) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 2 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
