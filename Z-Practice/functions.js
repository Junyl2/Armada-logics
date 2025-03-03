//practice funtions
//
//  Falsey Values:

/* false
0
NaN
"" (empty string)
null
undefined
Truthy Values: */
/* 
Everything else, such as:
Non-zero numbers (1, -5)
Non-empty strings ("Hello")
Objects and arrays */

//conditions
let username = "";

if (username) {
  console.log("Welcome," + username);
} else {
  console.log("please enter a username");
}

//Short-Circuit Evaluation

//Short-circuit evaluation stops checking conditions once a truthy condition is found. This improves performance and reduces unnecessary operations.
/* 
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Welcome back, user!");
} else if (isAdmin) {
  console.log("Welcome, Admin!");
} else {
  console.log("Please log in.");
}

let temperature = 35;

if (temperature > 30) {
  console.log("It's hot outside! Stay hydrated.");
} else if (temperature > 20) {
  console.log("It's warm outside! Enjoy the weather.");
} else if (temperature > 10) {
  console.log("It's a bit chilly! Wear a jacket.");
} else {
  console.log("It's freezing! Stay warm indoors.");
}

let passingScore = 60;

if (passingScore > 50) {
  console.log("You passed the test!!");
} else if (passingScore === 50) {
  console.log("You passed the test!");
} else {
  console.log("Please try again");
} */

//end section of conditions

//Switch Case Ternary

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today's special is a free croissant with any coffee!");
    break;
  case "Wednesday":
    console.log("Enjoy half-price lattes today!");
    break;
  case "Friday":
    console.log("Free cookie with every sandwich!");
    break;
  default:
    console.log("Check back tomorrow for new specials.");
}

let workDays = "Saturday";

switch (workDays) {
  case "Tuesday":
    console.log("I have work today");
    break;
  case "Thursday":
    console.log("I have work today");
    break;
  case "Saturday":
    console.log("I have work today");
    break;
  default:
    console.log("its my rest day");
}

//The Ternary Operator "return condition ? A : B;""  condition ? valueIfTrue : valueIfFalse;

let orderTotal = 60;

let deliveryCost = orderTotal >= 50 ? "free delivery" : "delivery is $5.";

console.log(deliveryCost);

//access log in

let isLoggedIn = false;

let accessMessage = isLoggedIn ? "Welcome back!" : "Please log in to continue.";

console.log(accessMessage);

/* When to Use switch:

When handling multiple specific values (e.g., days of the week, menu options).
Improves readability over a long chain of else if.
When to Use Ternary:

For simple yes/no decisions or assignments.
Keeps code concise but should be avoided for complex logic.
When to Use if-else:

For range-based conditions or more complex decision-making. */

let age = 10; // Change to test different cases
let isMember = false; // Change to test different cases

let ticketPrice = age > 12 ? "Free" : isMember ? "$10" : "$15";

console.log("Ticket price:", ticketPrice);

/* calculate accepts two numbers and a function (operation).
The callback function (add or multiply) processes the numbers.
Your Turn! Modify the calculate function to also support subtraction and division. */

/* let products = [
  { id: 1, name: 'iPhone', price: 299, categories: 'Electronics' },
  { id: 2, name: 'Samsung', price: 299, categories: 'Electronics' },
  { id: 3, name: 'Nokia', price: 299, categories: 'Electronics' },
];

let cart = [];

function addToCart(productId) {
  let product = products.find(products => products.id === productId);
  if (product) {
    cart.push(product);
    console.log(`item ${product.name} has been added to cart`);
  } else {
    console.log('item not found');
  }
} addToCart(1);
addToCart(2);
addToCart(2);
console.log(cart);

function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(`The total is $${total}`);
} calculateTotal();

function removeFromCart(productId) {
  let index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    let removedItem = cart.splice(index, 1);
    console.log(`${removedItem[0].name} is removed from cart`);
  } else {
    console.log('Product not found');
  }

} removeFromCart(2);
removeFromCart(1);
console.log(cart);
calculateTotal(); */

let products = [
  {
    id: 1,
    name: "iPhone",
    price: 200,
    categories: "Electrocis",
  },
  {
    id: 2,
    name: "Samsung",
    price: 200,
    categories: "Electrocis",
  },
  {
    id: 3,
    name: "iPhone",
    price: 200,
    categories: "Electrocis",
  },
];

let cart = [];

function addToCart(productId) {
  let product = products.find((products) => products.id === productId);
  if (product) {
    cart.push(product);
    console.log(`${product.name} is added to cart`);
  } else {
    console.log("product not found");
  }
}
addToCart(1);
addToCart(2);
addToCart(2);
addToCart(2);

function calculateTotal(productId) {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(`The total is $${total}`);
}
calculateTotal();

function removeFromCart(productId) {
  let index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    let removedItem = cart.splice(index, 1);
    console.log(`${removedItem[0].name} has been removed from cart`);
  } else {
    console.log("product not found");
  }
}
removeFromCart(1);
removeFromCart(2);
console.log(cart);
calculateTotal();

function computerMove() {
  let pickRandom = Math.random();

  let computerPick = "";
  if (pickRandom > 0 && pickRandom < 1 / 4) {
    computerPick = "Scissors";
  } else if (pickRandom > 1 / 4 && pickRandom < 1 / 8) {
    computerPick = "Rock";
  } else if (pickRandom > 1 / 8 && pickRandom < 1) {
    computerPick = "Paper";
  }
  return computerPick;
}

function playerPick() {
  let computerPick = computerMove();

  let result = "";
  if (computerPick === "Rock") {
    if (playerPick === "Rock") {
      result = "Tie";
    } else if (playerPick === "Scissors") {
      result = "You win";
    } else if (playerPick === "Paper") {
      result = "You lose";
    }
  } else if (computerPick === "Scsissors") {
    if (playerPick === "Scissors") {
      result = "Tie";
    } else if (playerPick === "Rock") {
      result = "You win";
    } else if (playerPick === "Paper") {
      result = "You lose";
    }
  }
  alert(
    `computer Picked${computerPick}. You pick ${playerPick} result ${result}`
  );
}

//Create a function that processes each element of an array using a provided callback and returns a new array with the transformed results.
/* function customMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
let numbers = [1, 2, 3];
let doubled = customMap(numbers, function (num) {
  return num * 2;
});
console.log(doubled);  */ // Should output: [2,4,6]

function filter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

let result = filter([1, 2, 3, 4, 15], function (val) {
  return val < 10;
});
console.log(result); // Should output: [1

/* 
function isEven(num) {
  if (num % 2 === 0) { //if num is even
    return true; // return true
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
 */

/* 
function greet(name) {
  return "Hello, " + name + "!"; //greet Hello + name !
}

function personalizedGreeting(names) { names as place holder / friends var is passed as argument.
  for (let i = 0; i < names.length; i++) //personalizedGreeting(friends), 0, 1 ,2
    console.log(greet(names[i])); console.log(greet(names[0, 1, 2]));
  }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);
 */

function reverseArray(arr) {
  //arrgument = orginalArray = 3 elements
  let reversed = []; // reversed =  0   , returned value :  //[2, 1 0]
  for (let i = arr.length - 1; i >= 0; i--) {
    // { 2 > =0 i-- || 2, 1, 0
    reversed.push(arr[i]); //2,1,0 will be push to revered variable
  }
  return reversed; //reversed is now 2, 1, 0
}

let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray)); // 30, ,20, 10
console.log(originalArray);
